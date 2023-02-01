const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit' , event => {
    event.preventDefault() // impede que a página recarregue

    console.log(form.username.value) // vale tanto para id quando para name
    console.log(event.target.username.value)
})

const userName = 'pablo matos'
const pattern = /[a-z]{6,}/ // pode receber 

// Para testar toda regex tem disponivél um método chamado test

const result = pattern.test(userName) 

// O metodo test vai tentar dá um match entre a regex e a string de argumento da invocação dele
// Se o match acontecer true é retornado caso contrario false

console.log(result)
