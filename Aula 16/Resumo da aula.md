```js

// const button = document.querySelector('.button')

// button.addEventListener('click', () => {
//     console.log('Mais')
// })   //escultar 

const ul = document.querySelector('ul')

// ul.remove()


const lis = document.querySelectorAll('li')

lis.forEach((li) => {
    li.addEventListener('click', event => {
        const clickedElement = event.target
        clickedElement.style.textDecoration = 'line-through'
        clickedElement.remove()
    })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
    const li = document.createElement('li') // cria um elemento 'li'
    li.textContent = 'Novo item' // conteudo de texto de li será Novo item
    ul.prepend(li) // insere o elemento que ele recebeu como argumento, como primeiro filho desse elemento no qual ele foi encadeado
    // ul.append(li) // insere o elemento que ele recebeu como argumento, como ultimo filho desse elemento no qual ele foi encadeado
})
```
## nextSibling vs nextElementSibling

nextSibling retorna o próximo nó (um nó de elemento, um nó de texto ou um nó de comentário). Os espaços em branco entre os elementos também são nós de texto.

nextElementSibling retorna o próximo elemento (não nós de texto e comentário).

## previousSibling vs previousElementSibling

PreviousSibling retorna o nó anterior (um nó de elemento, um nó de texto ou um nó de comentário). Os espaços em branco entre os elementos também são nós de texto.

PreviousElementSibling retorna o elemento anterior (não os nós de texto e comentários).