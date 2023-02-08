# Parents e Siblings
Quando a gente tem elementos no mesmo pai chamamos de irmãos ou sibiling
No trecho abaixo supondo que a gente queira declarar uma constante para cada elemento de  <article>  
```html
    <article>

        <h2>Título do post </h2>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    
        <div>Escrito por Pablo Matos</div>
    </article>
```
Uma maneira de fazer isso é armazenar a referencia dele, e usar a referencia para obter uma elemento children para obter as referencias dos elementos filhos.

Para converter um HTMLcollection em um array devemos passar o HTMLcolletion como argumento de um metodo from de uma função construtora array
Retorna um HTML collection e relembrando que HTMLcollection não é compativél com forEatch()
```js

console.log(article.children)
```
Converte um HTMLCollection em um array 
```js
console.log(Array.from(article.children))
```
A função Array.from não é destrutiva ou seja, ela não modifica o original

Agora para adicionar uma class para os filhos do article fazemos dessa forma
```js
    Array.from(article.children).forEach(element =>{
    element.classList.add('article-element')
})
```
Parents e siblings

o title.parents descrobre quem é o pai, e se encadear mais um parentElement descobre quem é o pai do pai
```js 
const title  = document.querySelector('h2')

 console.log(title.parentElement.parentElement)
```
 Agora spara descobrir o proximo irmão do h2
 Usamos title.nextSibling
```js 
 console.log(title.nextElementSibling)
```
 Mostra que p é o proximo sibling
Usamos title.previousElementSibling
```js
 console.log(title.previousElementSibling)
```
 
```js 
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