## O método MAP
 O metodo MAP é quando você quer gerar novo array com a mesma quantidade de itens do Array original só que com cada item transformado.

 Basicamente ele vai pegar cada item do array, e vai executar a função passada a ele por argumento retornando um array com os itens modificados, ou seja ele não modifica o item o array original 
 
 ```js
 const numbers = 1, 2, 3 

 numbers.map((item, index, array)=>{

})
``` 
O método map recebe como argumento uma função que por sua vez, pode receber três argumentos, sendo eles:
- item : que é o item iterado no momento
- index : que é o index do item iterado
- array: que é o array do item 

No exemplo abaixo, através do método map é criada uma nova função na qual os preços estão pela metade
```js 
const prices = [20, 10, 30, 23, 12, 40, 80, 5];

const salePrices = prices.map(price => price /2)

console.log(salePrices)
```
Na função passada como argumento para o map, o 'item'  que aqui foi chamado de price que é o item iterado no momento, é retornado pela metade. 

## Agora supondo que queremos retornar em um novo array somente os item acima de 30 reais com desconto de 50% 

```js
const products = [
    {name: 'Mouse sem fio', price: 30},
    {name: 'Pen drive ', price: 25},
    {name: 'Cartucho de tinta', price: 50},
    {name: 'Suporte Ergonômico para Notebook', price: 23},
    {name: 'Repetidor de sinal WI-FI', price: 44},
]

const sale = products.map( product => {
    if(product.price >= 30){    //verifica se o preço do produto é maior que 30 
        return {name: product.name, price: product.price / 2 } // retorna o preço divido por 2
    }
    return product // senão for igual ou maior que 30 retorna o mesmo item, pois o .map sempre precisa retorna algo
})

```