const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event =>{
    event.preventDefault()
    const regex = /^[a-zA-Z]{6,12}$/
    const validacao = regex.test(event.target.usernameid.value)
    if(validacao){
        feedback.textContent = 'Usuario valido'
        return
    }
    feedback.textContent = 'O usuario deve conter entre 6 e 12 caracteres e apenas letras'
})

// const form = document.querySelector('.signup-form')
// const feedback = document.querySelector('.feedback')

// form.addEventListener('submit', event=>{
//     event.preventDefault()
//     const username = event.target.usernameid.value
//     const regex = /^[A-Za-z]{6,12}$/
//     const isAValue = regex.test(username)

//     if(isAValue){
//         feedback.textContent = 'Nome de usuário valido'
//         return
//     }
    
//     feedback.textContent = 'O nome de usuário deve conter entre 6 e 12 caracteres e deve conter apenas letras'
// })