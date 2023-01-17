Operadores

```js
const age = 19

if ( age > 18){
    console.log('Você tem mais de 18 anos')
}

const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart']

if (simpsons.length >= 4){
    console.log('O array tem bastante personagens')
}
```

```js
const password = 'o11234'

if (password.length >= 12 && password.includes('1')){
    console.log('Essa senha é muito forte')
} else if(password.length >=8 || password.includes('1')){
    console.log('Essa senha tem 8 ou mais caracteres')
}else{
    console.log('Essa senha tem menos de 8 caracteres') 
}
```
