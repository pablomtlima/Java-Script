// // objetos em arrays 


// let user = {
//     name: 'Pablo',
//     age: 26,
//     email: 'pablomtlima1@gmail.com',
//     city: 'Brasília',
//     blogPosts: [
//         { title: 'Empadão de frango', likes: 30},
//         { title: '4 receitas de purê de batatas', likes: 356}
//     ],
//     login () {
//         console.log(`Usuário logado`)
//     },
//     logout () {
//         console.log(`Usuário deslogado`)
//     },
//     logBlogPost () {
//         console.log(`${this.name} escreveu os seguintes posts:`)

//         this.blogPosts.forEach(post => {
//             console.log(post.title, post.likes)
//         })
//     }
// }


// user.logBlogPost()

/*================================================*/

// o objeto Math

console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.2

console.log(Math.round(area))  // arredonda um número
console.log(Math.floor(area))  // arredonda um número para baixo
console.log(Math.ceil(area))  // arredonda um número para cima
console.log(Math.trunc(area))  // remove tudo depois do ponto e retona o inteiro

// números aléatorios

const randomNumber = (Math.random())
console.log(randomNumber)

console.log(Math.round(randomNumber * 100))