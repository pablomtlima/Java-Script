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

==========================================================================
## Diferença entre metodos e função 