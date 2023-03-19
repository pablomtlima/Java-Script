class User {
    constructor (name, email, age) {
        this.name =  name
        this.email = email
        this.age = age
    }
}

const user = new User('Pablo', 'pablomtlima1@gmail.com',25)
const user2 = new User('Sofia', 'sofia@gmail.com',2)
''
console.log(user, user2)