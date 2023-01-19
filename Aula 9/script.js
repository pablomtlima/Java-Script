// // funcção tradicional 
// const double = function (number){
//     return number *2
// }


// //arrow function
// const double2 = (number) => {
//     return number * 2 
// }

// const double3 = number => { //quando a arrow function tem somente um parâmetro uso do parentese ( ) é opcional
//     return number * 2 
// }



// const double4 = (number) => number * 3


// const result = double4(3)
// console.log(`O resultado é: ${result}`)

// Difereça metodo e função 

const name = 'Pablo'

/* ================================================*/
// Funções 

const sayHi = () => 'Oi'

const greet = sayHi()
console.log(greet)


//Métodos
const nameInUpperCase = name.toUpperCase()
console.log(nameInUpperCase)


/* ================================================*/

// forEach e callbacks
// const myFunc = callback => {
//     const value = 77

//     callback(value)
// }


// myFunc((number => {
//     console.log(number)
// } )) //função de callback

// const socialNetworks = ['youtube', 'twitter', 'instagram','facebook']
// const logArrayInfo =  (socialNetwork, index, array) => {
//     console.log(index, socialNetwork, array)
// }

// socialNetworks.forEach(logArrayInfo) //forEache itera sobre o array


const ul = document.querySelector('[data-js="ul"]')

const socialNetworks = ['youtube', 'twitter', 'instagram','facebook']

let HTMLTemplate = ''

socialNetworks.forEach(socialNetwork => {
    HTMLTemplate += `<li style="color: deeppink;">${socialNetwork}</li>`

})
console.log(HTMLTemplate)
ul.innerHTML = HTMLTemplate