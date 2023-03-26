class User {
  #counter = 0

  constructor (name, email){
    this.name = name
    this.email = email
  }

  incrementCounter() {
    return ++this.#counter
  }
}

const createUser = (name, email) => {
  let counter = 0
  return {
    name,
    email,
    incrementCounter: () => ++counter
  }
}

const user = new User('pablo', 'pablomtlima1@gmail.com')

const user2 = createUser('pablo', 'pablomtlima1@gmail.com')

const user3 = createUser('pablo2', 'pablo2@gmail.com')

console.log(user.incrementCounter())

console.log(user.incrementCounter())

console.log(user2.incrementCounter())

console.log(user2.incrementCounter())

console.log(user3.incrementCounter())

console.log(user3.incrementCounter())

console.log(user3.incrementCounter())
