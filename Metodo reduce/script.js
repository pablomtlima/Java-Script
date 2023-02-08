// const numbers = [1, 2, 3];

// const sumResult = numbers.reduce((accumulator, item) => {
//     return accumulator + item
// }, 0);

// console.log(sumResult)

const phaseScores = [
    {name: 'Vinicius Costa', score: 337 },
    {name: 'Roger Melo', score: 43 },
    {name: 'Alfredo Braga', score: 234 },
    {name: 'Pedro H. Silva', score: 251 },
    {name: 'Ana Paula Rocha', score: 453 },
    {name: 'Vinicius Costa', score: 165 },
    {name: 'Roger Melo', score: 123 },
    {name: 'Alfredo Braga', score: 356 },
    {name: 'Pedro H. Silva', score: 133 },
    {name: 'Ana Paula Rocha', score: 37 },
    {name: 'Sofia Castro', score: 133 },
]

const rogerScore =  phaseScores.reduce( (accumulator, phaseScore )=> {
    if(phaseScore.name === 'Roger Melo'){
        accumulator += phaseScore.score
    }
    return accumulator
},0)

console.log(rogerScore)