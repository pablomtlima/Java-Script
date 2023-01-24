## Ojetos em arrays 

```js
let user = {
    name: 'Pablo',
    age: 26,
    email: 'pablomtlima1@gmail.com',
    city: 'Brasília',
    blogPosts: [
        { title: 'Empadão de frango', likes: 30},
        { title: '4 receitas de purê de batatas', likes: 356}
    ],
    login () {
        console.log(`Usuário logado`)
    },
    logout () {
        console.log(`Usuário deslogado`)
    },
    logBlogPost () {
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post.title, post.likes)
        })
    }
}


user.logBlogPost()
```
## O objeto Math
```js
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.2

console.log(Math.round(area))  // arredonda um número
console.log(Math.floor(area))  // arredonda um número para baixo
console.log(Math.ceil(area))  // arredonda um número para cima
console.log(Math.trunc(area))  // remove tudo depois do ponto e retona o inteiro
```
## Números aléatorios
```js
const randomNumber = (Math.random())
console.log(randomNumber)

console.log(Math.round(randomNumber * 100))
```
## Valores primitivos 

Em valores primitivos quando dizendo que uma variável recerbe outrao que acontece é que é armazenado na memoria uma cópia, logo se a veriável 1 for modificada 2 dois não tem reflexo da 1
```js
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)
```
## Valores de referencia 

Em valores  de referencia quando dizendo que uma variável recerbe outra o que acontece é que é criado um apontador para o mesmo objeto logo ao modificar o objeto 1 o 2 sofre alterações
```js
let userOne = {name: 'Pablo', age: 26}
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 32

console.log(userOne, userTwo)

```