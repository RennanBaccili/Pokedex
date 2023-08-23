const pokemonsList =  document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit =10;
let offset=0;

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>` ).join('')}
            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>  
    </li>`
}

function loadPokemonsItens(offset,limit){
    pokeApi.getPokemons(offset,limit).then((pokemonList = []) => {
        console.log(pokemonList);
        pokemonsList.innerHTML += pokemonList.map(convertPokemonToLi).join('');
    })
}

loadMoreButton.addEventListener('click', ()=> {
    offset +=limit;

    const qtdRecordNextPage = offset + limit
        if(qtdRecordNextPage >= maxRecords){
            const newLimit = maxRecords - offset
            loadPokemonsItens(offset,newLimit)

            return loadMoreButton.parentElement.removeChild(loadMoreButton)

            
        }else{
            loadPokemonsItens(offset,limit);
        }
})

loadPokemonsItens();
// uma then recebe o retorn da then de cima
// encadeamento de thens 

// const listItens =[];

//     for (let index = 0; index < pokemonList.length; index++) {
//             const pokemon = pokemonList[index];
//             listItens.push(convertPokemonToLi(pokemonList));
//         }