## Event Bubling
O Event bubling ocorre quando um usuário interage com um elemento no HTML e o evento se propaga como bolhas por todos os elementos aninhados a ele.
Ou seja se ouver um addEventListener com Call back da tag pai ela será executada quando o evento ocorrer 

```js
const button = document.querySelector('button')
const
const lis = document.querySelectorAll('li')

lis.forEach((li) => {
    li.addEventListener('click', event => {
        const clickedElement = event.target
        console.log('Clicou na li')
        clickedElement.remove()
    })
})


button.addEventListener('click', () => {
    const li = document.createElement('li') // cria um elemento 'li'
    li.textContent = 'Novo item' // conteudo de texto de li será Novo item
    ul.prepend(li) // insere o elemento que ele recebeu como argumento, como primeiro filho desse elemento no qual ele foi encadeado
    // ul.append(li) // insere o elemento que ele recebeu como argumento, como ultimo filho desse elemento no qual ele foi encadeado
})

ul.addEventListener('click' , () =>{
        console.log('Clicou na UL')
})
```
Para evitar que essa propagação ocorra adicione 
```js
event.stopPropagation()
```
Como no exemplo abaixo
```js
lis.forEach((li) => {
    li.addEventListener('click', event => {
        const clickedElement = event.target
        event.stopPropagation()
        clickedElement.remove()
    })
})

