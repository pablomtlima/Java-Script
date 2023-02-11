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

Como você pode ver, as palavras que começam com letras minúsculas vêm antes das palavras que começam com letras maiúsculas.
