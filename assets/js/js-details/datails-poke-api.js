//objeto 
const pokeAPI ={}

function convertPokeApiToPokemon(pokeDetails){
    const pokemon = new Pokemon()
    pokemon.pokemonNumber = pokeDetails.order
    pokemon.name = pokeDetails.name
    pokemon.height = pokeDetails.height
    pokemon.weight = pokeDetails.weight
    pokemon.abilits = pokeDetails.abilities.map((abilitiesSlot) =>abilitiesSlot.ability.name)
    const types = pokeDetails.types.map((typeSlot)=> typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetails.sprites.other.dream_world.front_default
    pokemon.alt = pokeDetails.name
    return pokemon
}


//fetch retorna uma promisse que vai me retorna uma resposta,
// processo assíncrono
// atraves a fetch(url) me retorna uma response, que vem no formato stream,
//logo usamos encadeamente de then para converter para um body
//função para abstrair o consumo da api

pokeAPI.getPokemonsDetail =(pokemon)=>{
    return fetch(pokemon.url)
    .then((response => response.json()))
    .then(convertPokeApiToPokemon);
}

pokeAPI.getPokemons = (offset=0, limit=3) =>{
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    return fetch(url)
    .then((response)=> response.json()) //response
    .then((jsonBody)=> jsonBody.results) //json convertido
    .then((pokemons) => pokemons.map(pokeAPI.getPokemonsDetail))
    .then((detailsRequests) => Promise.all(detailsRequests))
    .then((pokemonsDetails) => {console.log(pokemonsDetails); return pokemonsDetails})
    .catch((error)=> console.error(error))
    // a partir dessa requisição vamos fazer novas requisições
}
pokeAPI.getPokemonsSpecie = (offset=0, limit=3) =>{
    pokeAPI.getPokemons.then((pokemons)= pokemons.map(pokeAPI.getPokemonsSpecies))
    .then((detailsRequests)=> Promise.all(detailsRequests))
    .then((pokemonsDetails) => {console.log(pokemonsDetails); return pokemonsDetails})
}