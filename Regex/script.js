const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')
const testUser = username => /^[a-zA-Z]{6,12}$/.test(username)


form.addEventListener('submit', event => {
    event.preventDefault()
    const validation = testUser(event.target.usernameid.value)
    if(validation){
        feedback.textContent = `O username é válido `
        form.usernameid.setAttribute('class', 'sucess')
        return
    }
    feedback.textContent = `O nome de usuário deve conter entre 6 e 12 caracteres e deve conter apenas letras`
    form.usernameid.setAttribute('class', 'error')
})

form.usernameid.addEventListener('keyup', event =>{
    const validation = testUser(event.target.value)
    if(validation){
        feedback.textContent = `O username é válido `
        form.usernameid.setAttribute('class', 'sucess')
        return
    }
    feedback.textContent = `O nome de usuário deve conter entre 6 e 12 caracteres e deve conter apenas letras`
    form.usernameid.setAttribute('class', 'error')
})