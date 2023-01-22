// // variaveis e escopo de bloco

// const age = 31




// if (true) {
//     const age = 3
//     const name = 'Pablo'
//     console.log(`dentro do bloco do código ${age}`)

//     if (true) {
//         const age = 99
//         console.log(`Dentro do segundo bloco de código ${age}`)
//         var test = ' Oi'
//     }
// }

// console.log(`fora do bloco do código ${age} ${test}`)

/*______________________________________________*/

// a palavra-chave this 
let user = {
    name: 'Pablo',
    age: 26,
    email: 'pablomtlima1@gmail.com',
    city: 'Brasília',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batatas'],
    login () {
        console.log(`Usuário logado`)
    },
    logout () {
        console.log(`Usuário deslogado`)
    },
    logBlogPost () {
        console.log(`${this.name} escreveu os seguintes posts:`)

        this.blogPosts.forEach(post => {
            console.log(post)
        })
    }
}

user.logBlogPost()
