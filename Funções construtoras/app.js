function Student (name, email) {
  this.name = name
  this.email = email
  
}

Student.prototype.login = function () {
    return `${this.name} fez login`
}

Student.prototype.logout = function () {
    return `${this.name} saiu`
}

Student.prototype.coment = function () {
  return `${this.name} comentou`
}

Student.formatToDataBase = function (aString) {
  return aString
    .toUpperCase()
    .replaceAll(' ', '_')

}

function TeacherAssistant (name, email) {
  Student.call(this, name, email)
}

TeacherAssistant.prototype = Object.create(Student.prototype)

TeacherAssistant.prototype.giveBadge = function ({name}){
  return `${this.name} deu uma medalha para ${name}`
}

const gabrielFialho = new Student("Gabriel Fialho", "gabrielf@roger.com.br")
const brenoLemos = new Student("Breno Lemos", "brenol@rgoe.com.br")

const arthurSouza = new TeacherAssistant('Arthur Souza', 'ar@gmail.xom', true)
console.log(arthurSouza.giveBadge(gabrielFialho))
console.log(arthurSouza)
console.log(arthurSouza.login === gabrielFialho.login)




























// class Student {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   coment() {
//     return `${this.name} comentou`;
//   }

//   static formatToDatabase(aString) {
//     aString.toUpperCase().replaceAll(" ", "_");
//   }
// }

// this dentro de uma arrow func não representa o escopo dentro da função
// mas o escopo onde a arrow func foi declarada.

// function Student (name, email) {
//     this.name = name
//     this.email = email

// }
// // Para funções construtoras os métodos devem ser inseridos fora da função
// // é preciso armazenalos no prototype  pois o objeto somente aponta e não cria um método na memoria
// Student.prototype.login = function () {
//     return `${this.name} fez login`
// }

// Student.prototype.logout = function () {
//     return `${this.name} saiu`
// }

// Student.formatToDatabase = function (aString) {
//     return aString
//     .toUpperCase()
//     .replaceAll(' ','_')
// }

// const gabrielFialho = new Student("Gabriel Fialho", "gabrielf@roger.com.br");
// const brenoLemos = new Student("Breno Lemos", "brenol@rgoe.com.br");

// console.log(gabrielFialho, brenoLemos);
console.log(Student.formatToDataBase("String para banco de dados"));
