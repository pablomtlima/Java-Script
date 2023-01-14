## booleans
Metodo includes

```js
const email = 'pablomtlima1@gmail.com'
const filtermail = email.includes('@') //retorna True se '@' for encontrada na const email

```
Metodo arrayIncludes
```js
const names = ('pablo', 'matos', 'lima')
const filtername = names.arrayIncludes('lima') //retorna true se a var for encontrada no array

```
Posso checar da seguinte forma 
```js
const age = 26
console.log(age == 26) // True
console.log(age == '26') // True
```
Por que um int retorna True quando verificado se é igual a uma string ?
```js
console.log(age != 26) // False
console.log(age != '26') // False
```
Por que quando há == ou != o java script faz uma conversão antes de checar 

Agora se quiser checar o valor e o tipo pode se utilizar === ou !==

```js
console.log(age === 26) // True
console.log(age !== '26') // False
```
Checando <> em int
```js
console.log(age > 26) //False 
console.log(age < 26) //False
console.log(age <= 26) //True
console.log(age >= 26) //True

```
Checando <> em strings

```js
const name = 'a'
console.log(name > 'b') //False
console.log(name < 'b') //True
console.log(name > 'B') //True pois em JS as letras minusculas são consideras > maiusculas na ordem 
console.log(name < 'B') //False pois em JS as letras minusculas são consideras > maiusculas na ordem 
console.log(name = 'A') //False pois a != de A

```