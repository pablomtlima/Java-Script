## Método sort

O método sort é um método de array que serve para ordenar itens do array em ordem alfabetica, crescente em caso de números.

A sintaxe é no seguinte format 

```js
array.sort(compareFunction)
```
Onde compareFunction é uma função opcional que defica a lógica de comparação entre elementos do array.
Se compareFunction não for passada como argumento o metodo irá considerar todos os itens como string e irá comparar seus valores de acordo com a tabela unicode.

Vale lembrar que de acordo com o padrão Unicode, letras minúsculas vêm antes de letras maiúsculas. Portanto, no exemplo, "A" maiúsculo viria antes de "a" minúsculo.

![Alt text](https://file%2B.vscode-resource.vscode-cdn.net/c%3A/Users/Pablo/OneDrive/Imagens/Capturas%20de%20tela/2023-02-11.png?version%3D1676139099969)

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