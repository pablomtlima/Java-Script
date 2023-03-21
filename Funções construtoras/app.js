// class Student {
//     constructor (name, email) {
//         this.name = name
//         this.email = email
//     }
// }


// this dentro de uma arrow func não representa o escopo dentro da função
// mas o escopo onde a arrow func foi declarada.

function Student (name, email) {
    this.name = name
    this.email = email
}


const gabrielFialho = new Student('Gabriel Fialho', 'gabrielf@roger.com.br')
const brenoLemos = new Student('Breno Lemos', 'brenol@rgoe.com.br')

