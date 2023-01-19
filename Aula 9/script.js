// funcção tradicional 
const double = function (number){
    return number *2
}


//arrow function
const double2 = (number) => {
    return number * 2 
}

const double3 = number => { //quando a arrow function tem somente um parâmetro uso do parentese ( ) é opcional
    return number * 2 
}



const double4 = (number) => number * 3


const result = double4(3)
console.log(`O resultado é: ${result}`)