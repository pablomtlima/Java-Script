// // function declaration
// /* a function declaration pode ser declarada em qualquer 
// lugar do codigo pois o Java Script puxa para cima a função  
// */
// function sayHi() {
//     console.log('Oi')    
// }

// //Function expresion
// /* já na function expresion isso não acontece, logo se a função 
// for chamada acima da sua criação, pode-se gerar um erro.*/

// const showFood = function (){
//     console.log('Pizza')
// }

// sayHi()
// sayHi()
// sayHi()

// showFood()
// showFood()
// showFood()

//Argumentos, parâmetros e default parameters

// const myFunc = function (name = 'Insira', lastName = 'Algo'){ //name é uma variável
//     console.log(`Oi, ${name} ${lastName}!`)
// }

// myFunc()
// myFunc('Pablo', 'Pablo')

//Retornando Valores
const double = function(number){
    // const doubleResult = number * 2 // como essa const foi declarada dentro da função ela só funciona localmente 
    return number * 2
}

const result = double(4)

const showResult = function(value){
    return `O resultado é ${value}`
}

console.log(showResult(result))
