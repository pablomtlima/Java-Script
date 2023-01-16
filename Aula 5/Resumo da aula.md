
Loop com while para iterar e 0 a 5
```js
let i = 0
while (i <= 5){
  console.log([i])
  i++
}
```



for (i=0; i<=5; i++){
  console.log(i)
}


for (i=0; i<10 ; i++){
  console.log(`Esta é a ${i}ª vez que esta frase é exibida no console.`)
}



const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']
let upperCaseCities = []

for (i = 0; i< cities.length ; i++){
  upperCaseCities.push(cities[i].toUpperCase())
  console.log(upperCaseCities)
}


const names = ['João Grilo', 'Chicó', 'Rosinha']

let HTMLTemplate = ''

for ( i=0; i<names.length ; i++){
  HTMLTemplate += `<li>${names[i]}</li>`
  // console.log(HTMLTemplate)
}
console.log(HTMLTemplate)


const numbers = ['91', '5', '30', '97', '83', '31']
let soma = 0  

for (i=0; i<numbers.length; i++){
soma += Number(numbers[i])
console.log(soma)
}
console.log(soma == 337)



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