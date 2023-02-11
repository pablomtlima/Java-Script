## Encadeamento de métodos

Sobre encadeamento do métodos neste exemplo foi usado o método *filter* para trazer os livros com a propriedade *price* acima de 20 reais. E encadeado a ele, ou seja ao final do *filter* foi utilizado o método *map* para gerar no array livrosAVenda um novo array com as template strings `Promoção do livro ${name} está a ${price} Reais`


```js
const books = [
    { name: 'Código Limpo', price: 30 },
    { name: 'O milagre da manhã', price: 5 },
    { name: 'Alice no País das Maravilhas', price: 10 },
    { name: 'Quem Pensa Enriquece', price: 50 },
    { name: 'O livro da ciência', price: 40 }
  ]

const livrosAVenda = books
    .filter( ({price}) => price > 20)
    .map(({name, price}) => `Promoção do livro ${name} está a ${price} Reais`)

```
o output é 
```js
[
    "Promoção do livro Código Limpo está a 30 Reais",
    "Promoção do livro Quem Pensa Enriquece está a 50 Reais",
    "Promoção do livro O livro da ciência está a 40 Reais"
]
```