const myArray = [
    {a:1, b:2},
    {c:3, d:4},
    {e:5, f:6}
]

localStorage.setItem('name', JSON.stringify(myArray))
console.log( typeof JSON.stringify(myArray))
console.log( typeof myArray)

const getItemInString = localStorage.getItem('name')
const convertedItem = JSON.parse(getItemInString)
console.log(convertedItem) 

// localStorage.setItem('nome', 'Pablo')
// localStorage.setItem('Idade', 25)
// localStorage.setItem('nome1', 'Sofia')
// localStorage.setItem('Idade1', 2)

// const nome = localStorage.getItem('nome')
// const idade = localStorage.getItem('Idade')


// console.log(idade)
// console.log(nome)

// localStorage.removeItem('nome')

// localStorage.clear()

