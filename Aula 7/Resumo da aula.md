O operador lógico not (!)
Quando queremos inverter um boolean  colocamos ! 
```js
let isUserLoggedIn = false

if (!isUserLoggedIn){
    console.log('Você precisa fazer login para continuar')
}
console.log(!true) // false
console.log(!false)  //true
```

Break e continue
    Quando queremos que em uma condição o codigo ignore uma determinada parte do array podemos fazer
    Se o 'indice a ser ignorado' for igual ao item a ser pulado continue, ou seja pule para o proximo item da iteração
    Isso não irá sair do loop, irá somente ignorar o item no if === 'item'
```js
const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i=0; i<scores.length; i++){
    if (scores[i] === 0 ){
        continue
    }

    console.log(`Sua pontuação: ${scores[i]}`)
    if(scores[i] === 100){
    console.log('Parabens, você atingia a Pontuação maxima')
    break
    }   
}
```

Switch statement
    As vezes para evitar o uso de varios if's e else's podemos executar um codigo a depende do valor armazenado
    Exemplo.: Caso grade seja 'A', o codigo dentro de case 'A' será executado
```js 
const grade = 'A'

switch (grade) {
    case 'A' :
        console.log('Você tirou um A')
        break
    case 'B':
        console.log('Você tirou um B')
        break
    case 'C':
        console.log('Você tirou um C')
        break
    case 'D':
        console.log('Você tirou um D')
        break
    case 'E':
        console.log('Você tirou um E')
        break
    default:
        console.log('Nota invalida')
}
``` 