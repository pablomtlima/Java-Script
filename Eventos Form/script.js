const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit' , event => {
    event.preventDefault() // impede que a página recarregue

    console.log(form.username.value) // vale tanto para id quando para name
    console.log(event.target.username.value)
})

const userName = 'pabloli'
const pattern = /^[a-z]{6,}$/

const result = pattern.test(userName)

console.log(result)
