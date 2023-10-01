const offset=0;
const limit=1;
const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

//json convertido



pokeAPI.getPokemons().then((pokemonList = [])=>{
        //pega lista de pokemon e convert ela num html só
        pokemonSection.innerHTML += pokemonList.map(convertPokemonToHTML).join('');
    })

// html
function convertPokemonToHTML(pokemon){
    return `
    <div class="pokedex-information__about">
    <div class="inf">
        <span class="name_inf">${pokemon.name}</span>
        <span class="number_inf">#${pokemon.pokemonNumber}</span>
    </div>
    <div class="img">
        <img src="${pokemon.photo}" alt="${pokemon.name}">    
        </div>       
    </div>      
    <div class="pokedex-information__status">
        <h2>about</h2>
        <ul>
            <li>Type<strong>${pokemon.type}</strong></li>
            <li>Height<strong>${pokemon.height}</strong></li>
            <li>Weight<strong>${pokemon.weight}</strong></li>
            <li>Abilits<strong>${pokemon.abilits}</strong></li>
            <h3>Breeding</h3>
            <li>Types<strong>${pokemon.types}</strong></li>
        </ul>
    </div>`;
}
const pokemonSection = document.getElementById("pokemon-datails");
