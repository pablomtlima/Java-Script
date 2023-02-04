const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUserName = username => /^[A-Za-z]{6,12}$/.test(username)

form.addEventListener('submit', event=>{
    event.preventDefault()

    const isAValue = testUserName(event.target.usernameid.value)

    if(isAValue){
        feedback.textContent = 'Nome de usuário valido'
        return
    }
    
    feedback.textContent = 'O nome de usuário deve conter entre 6 e 12 caracteres e deve conter apenas letras'
})

form.usernameid.addEventListener('keyup', event =>{
    const isAValidUserName = testUserName(event.target.value)
    console.log(event)
    if (isAValidUserName) {
        form.usernameid.setAttribute('class', 'sucess')
        return
    }
    form.usernameid.setAttribute('class', 'error')
})