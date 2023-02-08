const article = document.querySelector('article')

console.log(article.children) //retorno um HTML collection e relembrando que HTMLcollection não é compativél com forEatch()
console.log(Array.from(article.children)) //converte o Htmlcollection para um array

// A função Array.from não é destrutiva ou seja, ela não modifica o original

//  Array.from(article.children).forEach(element =>{
//     element.classList.add('article-element')
//  })

const title  = document.querySelector('h2')

 console.log(title.parentElement.parentElement) // descrobrir quem é o pai, e se encadear mais um parentElement descobre quem é o pai do pai

 //agora spara descobrir o proximo irmão do h2

 console.log(title.nextElementSibling)

 //Mostra que p é o proximo sibling

 console.log(title.previousElementSibling)
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