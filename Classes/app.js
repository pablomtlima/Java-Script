class User {
    constructor (name, email, age) {
        this.name =  name
        this.email = email
        this.age = age
        this.points = 0
    }
    // criar os métodos fora do constructor
    login () {
        console.log(`${this.name} logou na aplicação`)
        return this
    }

    logout () {
        return `${this.name} deslogou da aplicação`
    }

    addPoints () {
        this.points++
        return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
    }
}

const user = new User('Pablo', 'pablomtlima1@gmail.com',25)
const user2 = new User('Sofia', 'sofia@gmail.com',2)

user.login().addPoints()

console.log(user, user2)




class Mammal {
    constructor (species, name, age) {
        this.species = species
        this.name = name 
        this.age = age
        this.mammaryGland = true
    }

    incrementAge () {
        this.age++
    }
}

//  extends faz com que Lion herde todas as propriedades e métodos de Mammal
class Lion extends Mammal{
    constructor (species, name, age, manEater) {
        super  (species, name, age)
        this.manEater = manEater
    }

    eatZebras (animals) {
        return animals.filter(animals => animals.species !== 'zebra')
    }
}
const zeca = new Mammal('zebra', 'Zeca', 5)
const pompeu = new Mammal('gnu', 'Pompeu', 4)
const angus = new Mammal('cavalo', 'Angus', 3)
const mufaza = new Lion('mufaza', 'Leão', 9, false)

const animals = [zeca, pompeu, angus]

console.log(zeca, pompeu, angus, mufaza)
console.log(mufaza.eatZebras(animals))


