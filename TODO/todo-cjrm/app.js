const formTodo = document.querySelector('.form-add-todo ')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')   


formTodo.addEventListener('submit', event => {
    event.preventDefault()

    const userInput = event.target.add.value.trim()

    if (userInput.length) {
        todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${userInput}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
        `
        event.target.reset()
    }

})

todosContainer.addEventListener('click', event => {
    const elementoClicado = event.target
    if (Array.from(elementoClicado.classList).includes('delete')) {
        elementoClicado.parentElement.remove()
    }

})
// isso é um teste
inputSearchTodo.addEventListener('input', event=> {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('d-flex')
        todo.classList.add('hidden')
    })

    Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
        todo.classList.remove('hidden')
        todo.classList.add('d-flex')
    })
})

console.log()









