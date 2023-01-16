
Loop com while para iterar de 0 a 5
```js
let i = 0
while (i <= 5){
  console.log([i])
  i++
}
```

Loop com for para iterar de 0 a 5
```js
for (i=0; i<=5; i++){
  console.log(i)
}
```
Com o loop incrmentando em i, a cada vez que o loop é executado a parte do trecho ${i} exibe o número incrementado
```js
for (i=0; i<10 ; i++){
  console.log(`Esta é a ${i}ª vez que esta frase é exibida no console.`)
}
```
É possivel usar o .length para executar o for na exata quantidade de itens
```js
const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities = []

for (i = 0; i< cities.length ; i++){
  upperCaseCities.push(cities[i].toUpperCase())
  console.log(upperCaseCities)
}
```

```js
const names = ['João Grilo', 'Chicó', 'Rosinha']

let HTMLTemplate = ''

for ( i=0; i<names.length ; i++){
  HTMLTemplate += `<li>${names[i]}</li>`
}
console.log(HTMLTemplate)
```

No exercicio abaixo foi usado a função Number para converter as strings para número
```js
const numbers = ['91', '5', '30', '97', '83', '31']
let soma = 0  

for (i=0; i<numbers.length; i++){
soma += Number(numbers[i])
console.log(soma)
}
console.log(soma == 337)
```
Este exercicio for utilizado for em cadeia para acessar os números dos arrays dentro dos arrays
```js

const arrays = [
  [4, 32, 8],
  [64, 8, 32],
  [8, 32, 16],
  [2, 8, 4],
]

soma=0

for (i=0; i < arrays.length; i++){
  for (a=0; a < arrays[i].length ;a++){
    soma += arrays[i][a]
    console.log(`I=`,i,'a=',a)
    console.log(`O valor da soma até aqui é`,soma)
  }

}
```