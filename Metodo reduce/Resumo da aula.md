## O método reduce

O método reduce pode receber 4 parâmetros como argumentos de sua função:
```js
array.reduce(function(acumulador, itemAtual, index, array) {
  // código para processar cada item do array
  return valorAcumulado;
}, valorInicial);
```
Ele tem como função reduzir o array a um unico valor quando se trata de numeros

O primeiro argumento do reduce é uma função que receber outros quatro argumentos:
- 'acumulador' - que é o valor acumulador até o momento, iniciado com o valor de 'valorInicial', se o mesmo foi 
- especificado senão será o valor do primeiro item do array.
- 'itemAtual' - o valor atual do item sendo processado no array
- 'index' - o índice atual do item sendo processao no array.
- 'array' - o array original.

index e array não são obrigatorios

O segundo argumento é opcional e é o valor incial do acumulador.


```js
const numbers = [1, 2, 3];

const sumResult = numbers.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual
}, 0);

console.log(sumResult) // output = 6
```
No exemplo passado em aula para somar os scores do item de name: 'Roger Melo' do objeto phaseScores uma condicional é 
passada na função para verificar em cada item se o name corresponde a ' Roger Melo' se sim, o acumulador recebe o valor
 que ele já tinha somado ao phaseScore.score do item atual e ao final a função retorna o valor armazenado no acumulador.

```js
const phaseScores = [
    {name: 'Vinicius Costa', score: 337 },
    {name: 'Roger Melo', score: 43 },
    {name: 'Alfredo Braga', score: 234 },
    {name: 'Pedro H. Silva', score: 251 },
    {name: 'Ana Paula Rocha', score: 453 },
    {name: 'Vinicius Costa', score: 165 },
    {name: 'Roger Melo', score: 123 },
    {name: 'Alfredo Braga', score: 356 },
    {name: 'Pedro H. Silva', score: 133 },
    {name: 'Ana Paula Rocha', score: 37 },
    {name: 'Sofia Castro', score: 133 },
]

const rogerScore =  phaseScores.reduce( (accumulator, phaseScore )=> {
    if(phaseScore.name === 'Roger Melo'){
        accumulator += phaseScore.score
    }
    return accumulator
},0)

´´´ 

Além de somar números em um array, o método reduce() pode ser usado para realizar uma ampla variedade de tarefas
que exigem o processamento de elementos em um array e a redução dos resultados a um único valor. Alguns exemplos incluem:

- Calcular a média de valores em um array.
- Concatenar todos os elementos de um array de strings em uma única string.
- Contar a quantidade de elementos em um array que satisfazem uma determinada condição.
- Agrupar elementos em um array em um objeto de acordo com alguma propriedade.
- Criar uma nova estrutura de dados a partir de uma estrutura de dados existente.
O método reduce() é muito flexível e pode ser usado para resolver problemas complexos com pouco código. Além disso, 
ele é altamente performático e é uma boa escolha quando você precisa processar grandes quantidades de dados.



