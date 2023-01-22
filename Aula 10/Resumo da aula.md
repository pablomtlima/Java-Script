// ///criando um objeto literal

// let user = {
//     name: 'Jaão',
//     age: 31,
//     email: 'pablomtka@gmail.com',
//     city: 'Brasília',
//     blogPosts: ['Empadão de frango','Bolos Express']
// }



// console.log(user.age) // podemos exibir o valor da propriedade age por exemplo dessa forma

// user.age = 65 // acessar ou modifica a propriedade age do objeto user 

// console.log(user.age) // depois de modificada

// console.log(user['name']) // outra forma de acessar a variavel é com a notação de colchetes []

// user['name'] = 'Tiago' // podemos modificar uma propriedade da seguinte forma também

// console.log(user['name'])

// const key = 'email' // é possivel salvar o nome da propriedade em const para ser acessada depois
 
// console.log(user[key]) // busca a propriedade de nome que está armazenada em key no obj user

// user.key //mas não podemos usar dessa forma pois busca uma propriedade key dentro de user

// console.log(typeof user)

// ================================================

//adicionando métodos ao objeto

let user = {
    name: 'Pablo',
    age: 21,
    email: 'psds@gmail.com',
    city: 'Rio de Janeiro',
    blogPosts: ['Empadão de frango','Bolos Express','Perdi meu celular'],
    login: function (){
        console.log('Usuário logado')
    },
    logout: function (){
        console.log('Usuário deslogado')
    }
}

user.login() // acessa o método login dentro do obj user

user.logout() // acessa o métofo logout dentro do obj user