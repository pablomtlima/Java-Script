const ul = document.querySelector('ul')

// ul.remove()


const lis = document.querySelectorAll('li')

lis.forEach((li) => {
    li.addEventListener('click', event => {
        const clickedElement = event.target
        console.log('Clicou na li')
        event.stopPropagation()
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

ul.addEventListener('click' , () =>{
    console.log('Clicou na UL')
})