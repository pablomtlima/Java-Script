```js
const erroDiv = document.querySelector('body > h1')
console.log(erroDiv)

const paragraphs = document.querySelectorAll('p')
const errors = document.querySelectorAll('.error')

console.log(errors)
```
Obter um elemento através do ID 
```JS
const title = document.getElementById('title')

console.log(title)
```
Obter elementos através do nome da classe 
```JS
const errors = document.getElementsByClassName('error')
console.log(errors)
```
HTMLCollection represente uma lista generica de itens mas não é um array a pesar de pode ultilizar um indice item[1]
nodeList represente uma lista generica de itens mas não é um array a pesar de pode ultilizar um indice item[1] e poder fazer uso de foreacth

Obter elementos através do nome da tag
```JS
const paragraph1 = document.getElementsByName('p')
console.log(errors)
```