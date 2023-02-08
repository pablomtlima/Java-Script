// const numbers = [1, 2, 3 ]

// const doubleNumbers = numbers.map((item, index, array)=>{ // a função vai ser executada uma vez para cada item desse array
//   return  item * 2
// })

// console.log(doubleNumbers)


// // No exemplo abaixo, através do método map é criada uma nova função na qual os preços estão pela metade
// const prices = [20, 10, 30, 23, 12, 40, 80, 5];

// const salePrices = prices.map(price => price /2)

// console.log(salePrices)

const products = [
    {name: 'Mouse sem fio', price: 30},
    {name: 'Pen drive ', price: 25},
    {name: 'Cartucho de tinta', price: 50},
    {name: 'Suporte Ergonômico para Notebook', price: 23},
    {name: 'Repetidor de sinal WI-FI', price: 44},
]

const sale = products.map(product => {
    if (product.price >= 30){
        return {name: product.name, price: product.price / 2}
    }
    
    return product
})

console.log(products)
console.log(sale)