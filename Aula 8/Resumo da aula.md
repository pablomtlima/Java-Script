## Functions
# Existem duas formas de declara funções 
A 1º é a: Function declaration
A function declaration pode ser declarada em qualquer lugar do codigo pois o Java Script puxa a função para cima por debaixo dos panos 
```js
function sayHi() { //function + nome da função () 
    console.log('Oi')  // aqui dentro vai o código que a função irá executar
}
sayHi() // chamando a função sayHI

```
# Function expresion 
Já na function expresion isso não acontece, logo se a função for chamada acima da sua criação, isso vai gerar um erro.

```js
const showFood = function (){ // const + nome da função = function ()
    console.log('Pizza')  // aqui dentro vai o código que a função irá executar
}

showFood()  // chamando a função showFood
```

# Argumentos, parâmetros e default parameters 
```js

const myFunc = function (name){ //name é uma variável
    console.log(`Olá, ${name}!`)
}
myFunc('Pablo')  // manda a string 'Pablo' para o paramentro name na função myFunc

```
Podemos passar mais de um paramentro para dentro da função como no exemplo abaixo name e lastName
É importante ressaltar que os parâmetros são passados em ordem como name e last name, mas a ordem de execução dentro da função não importa
Outra coisa importante é que se não for passado nenhum parâmetro para a função undefined é o valor padrão 

```js

const myFunc = function (name = 'Insira', lastName = 'Algo'){ // name = recebe 'str1', lastName recebe 'str2'
}

myFunc() // considera o valor armazenado inicialmente em caso do parâmetro estar vazio undefined é apresentado
myFunc('Pablo', 'Matos') // envia 'Pablo' para name e envia 'Matos' para lastName
```

# Retornando Valores

```js
const double = function(number){
    // const doubleResult = number * 2 // como essa const foi declarada dentro da função ela só funciona localmente 
    return number * 2
}

const result = double(4)

const showResult = function(value){
    return `O resultado é ${value}`
}

console.log(showResult(result))
```