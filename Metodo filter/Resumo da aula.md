## O método filter

É semelhante ao método map, ele também executa uma função para cada item do array, só que é utilizado em casos que você quer um novo array só de alguns itens.`

A função passada como argumento deve retornar um boolean, se o item retornar um true o item iterado no momento é adicionado ao novo array, se false o item não é adicionada e se todos os itens resultam em true um array vazio é retornado

O método map recebe como argumento uma função que por sua vez, pode receber três argumentos, sendo eles:

- item : que é o item iterado no momento
- index : que é o index do item iterado
- array: que é o array do item

Por exemplo se você possui um array de 1 á 100 e quer retornar somentes os números acima de 37

```js
const numberGreaterThan37 = randomNumber.filter(
  (item, index, array) => item > 37
);
```

Um exemplo é quando temos um array de objetos e queremos trazer somente os itens que tem a propriedade premium ou seja com true

```js
const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
```

O novo array premiumUsers irá receber somente;

```js
premiumUsers = [
  {
    name: "Ada Lovelace",
    premium: true,
  },
  {
    name: "Alan Turing",
    premium: true,
  },
  {
    name: "Margaret Hamilton",
    premium: true,
  },
];
```
