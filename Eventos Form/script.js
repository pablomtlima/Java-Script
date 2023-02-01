const form = document.querySelector('.signup-form')
// const username = document.querySelector('#username')

form.addEventListener('submit' , event => {
    event.preventDefault() // impede que a página recarregue

    console.log(form.username.value) // vale tanto para id quando para name
    console.log(event.target.username.value)
})

const userName = '122pablomatos'
const pattern = /^[a-z]{6,}/ // pode receber 

// Para testar toda regex tem disponivél um método chamado test

const isAMatch = pattern.test(userName) 

// O metodo test vai tentar dá um match entre a regex e a string de argumento da invocação dele
// Se o match acontecer true é retornado caso contrario false

// if(isAMatch){
    
//     console.log('O teste da regex passou =)')
// }else{
//     console.log('O teste da regex não passou')
// }

const result = userName.search(pattern) // retorna o index da string onde ocorreu o mach
// o search retorna -1 quando não há mach

console.log(result) 

// para testar inputs de formulários é mais utilizado o pattern.test(inputDoUsuario) por exemplo