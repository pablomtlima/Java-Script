const getPokemons = async () => {

const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

console.log(bulbasaur.json())
// console.log(await charmander.json())
// console.log(await squirtle.json())

}

getPokemons()