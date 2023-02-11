## Método sort

O método sort é um método de array que serve para ordenar itens do array em ordem alfabetica, crescente em caso de números.

A sintaxe é no seguinte format 

```js
array.sort(compareFunction)
```
Onde compareFunction é uma função opcional que defica a lógica de comparação entre elementos do array.
Se compareFunction não for passada como argumento o metodo irá considerar todos os itens como string e irá comparar seus valores de acordo com a tabela unicode.

Vale lembrar que de acordo com o padrão Unicode, letras minúsculas vêm antes de letras maiúsculas. Portanto, no exemplo, "A" maiúsculo viria antes de "a" minúsculo.

![2023-02-11](https://user-images.githubusercontent.com/78696750/218274430-cfd6ab46-cf05-4961-bc3b-888c683d0bd1.png)


Aqui está um exemplo para ilustrar isso:

```js
var words = ['apple', 'Ant', 'banana', 'Cat'];
words.sort();
console.log(words);
```

Isso irá produzir a seguinte saída:

```js
['Ant', 'apple', 'banana', 'Cat']
```

Como você pode ver, as palavras que começam com letras maiúsculas vêm antes das palavras que começam com letras minúsculas.

Sabendo disso no array :
```js
const numbers = [20,10,35,5,45,70,50]
```
se nenhuma função for passada como argumento, teremos: 
```js
[10, 20, 35, 45, 5, 50, 70]
```
como resposta pois para ordenar no padrão unicode só é considerada o primeiro digito logo para o metodo 5 e 50 são parecido e 40 e 5 são mostrados em ordem.

Para colocar número em ordem, podemos usar o exemplo abaixo para entender 
```js
var numbers = [20,10,35,5,45,70,50];
numbers.sort((a, b)=> a - b)
```
logo teremos como saída 
```js
[5, 10, 20, 35, 45, 50, 70]
```
poís a função de comparação subtrai a - b se essa função retorna um número negativo significa que 'a'deve vir antes de b por exemplo

a= 20 e b=30 
se 20-30= -10 um negativo é retornado então a função irá fazer com que 'a' 20 venha antes de 'b' que é 30.

Se a função retorna zero significa que os valores devem permanecer na mesmo posição do original pois:

a=20 e b=20 
20-20 = 0 
logo a função deve manter os números na posição que em estão

Agora se a função retornar um positivo:

a=30 e b = 20 
30-20 = 10 retorna um positivo
logo o metodo irá fazer com que 'b' venha antes de 'a' e assim vai fazendo por cada item até que todos sejam comparados