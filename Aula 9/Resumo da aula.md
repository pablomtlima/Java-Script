# arrow Functions JS Moderno
## No JS moderno foi implementado o arrow function  

Função tradicional 
```js
const double = function (number){
    return number *2
}
``` 

Arrow function
```js
const double = (number) => {
    return number * 2 
}
```
Quando a arrow function tem somente um parâmetro uso do parentese ( ) é opcional.
E o mesmo também vale pra quando desejar atribuir um valor padrão para o parâmetro, ou se a função não recebe nenhum parâmetro.

```js
const double = number => { 
    return number * 2 
}
const result = double(3)
``` 
Agora se o bloco de código conter somente uma linha retornado um resutado, pode-se retirar o return e o uso das {} da seguinte forma

```js
const double = number => number * 2 
```

Porém so pode ser feito com uma expresão, não tem como fazer ela retornar um switch um if.

## CallBacks

Funções callbacks é quando uma função é passada como argumento de outra função

```js
function ola () {
    alert('Olá' + name)
}

function recebeDados(callback){
    let name = prompt('Insira seu nome:')
    callback(name)
}

recebeDados(ola)


```
## Diferença entre método e função 

A diferença é que um método é um função criada dentro de um objeto e a função são criadas fora de um objeto mas que no fim fazem a mesma coisa com nomes diferentes