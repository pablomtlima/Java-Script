## Local storage

Como persistir dados no navegador do usuario 

Ao digitar o localStorage no console e verificar a Proto é possivel verificar os seguintes métodos;

- clear()
- getItem()
- key()
- removeItem()
- setItem()
- Storage()
- length()

O localStorage armazena os arquivos no formato chave valor em strings, para armazenar por exemplo um nome Pablo e atribuilo a chave nome.

```js
localStorage.setItem('nome', 'Pablo')
```
O primeiro argumento é o nome da chave e o segundo é o valor
No console digitando localStorage um objeto contendo as informações é retornado 

```js
Storage {nome: 'Pablo', length: 1}
```
e se ir na aba Aplication > Storage > Local Storage é possivel observar os dados.

Ao passar o setItem() mesmo fechando a aplicação atualizando os dados permaneceram lá, somente trocando de dispositivo ou browser, ou limpando o cache que é possivel remover as informações.

Para modificar as chaves existentes o comando setItem pode ser usado, pois ele tanto cria quando atualiza um item, logo temos.
```js
localStorage.setItem('nome', 'Fernando')
```

## Pegando as informações armazenadas no localStorage
Para puxar os dados de uma item, pode-se usar o método getItem()

```js
const name = localStorage.getItem('nome')
```
## Apagando dados do LocalStorage

Para apagar um item pode-se usar o método removeItem(), onde se é passado o nome da chave como argumento

```js
localStorage.removeItem('nome')
```
Agora para apagar todos os dados armazenados na localStorage o método clear() é utilizado
```js
localStorage.clear()
```
## Agora para armazenar array ou objetos (array são objetos)
Como só é possivel armazenar strings no localStorage, é nescessario converter o array/objeto primeiro.

```js
const myArray = [
    {a:1, b:2},
    {c:3, d:4},
    {e:5, f:6}
]
JSON.stringify(myArray) //converter o objeto para stirng


localStorage.setItem('name', JSON.stringify(myArray)) // converter e salvar na key name o objeto já parseado
```