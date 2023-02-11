// //exemplo 1: ordenando strings
// const nomes = ['Pedro', 'Danilo','Agostinho']
// nomes.sort()
// console.log(nomes)

// //exemplo 2: ordenando números

const numbers = [20,10,35,5,45,70,50]
numbers.sort((score1, score2)=>score1-score2)

console.log(numbers)

//exemplo 3: ordenando objetos



const theBigFamily = [
    { name: 'Lineu', score: 20 },
    { name: 'Nenê', score: 10 },
    { name: 'Tuco', score: 50 },
    { name: 'Bebel', score: 30 },
    { name: 'Agostinho', score: 70 }
  ]


// theBigFamily.sort((item1, item2)=>{
//     if(item1.score > item2.score){
//         return -1
    
//     }
//     else if(item2.score > item1.score){
//         return 1 
//     }
//     return 0
// })

console.log(theBigFamily)

theBigFamily.sort((item1, item2)=> item2.score - item1.score)

