const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
        .then((response)=> response.json())
        .then(convertPokeApiDetailToPokemon)
}


pokeApi.getPokemons = (offset =0,limit=10)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    //fech por padrão usa get
    // fetch retorna uma promise (promise é uma promessa de uma resposta, vc pode receber se da tudo certo)
    fetch(url)
    //  Um processo assíncrono é um processo ou função que executa uma tarefa “em segundo plano”, sem que o usuário precise esperar que a tarefa termine.
    // then recebe a resposta do fetch
    return fetch(url) //promisse
    .then((response) => response.json())//me retorna a stream convertida, (função de call back)
    .then((jsonBody) => jsonBody.results)
    .then((pokemons)=> pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequest)=> Promise.all(detailRequest))
    .then((pokemonDetails)=>pokemonDetails)
}

// loadMoreButton(limit,offset)

// loadMoreButton.addEventListener('click', ()=> {
//     offset +=limit;
//     loadPokemonsItens();
// })

// const limit =5;
// let offset=0;