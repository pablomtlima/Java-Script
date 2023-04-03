function Pessoa (name) {
  this.name = name
}

Pessoa.prototype.getName = function () {
  return this.name
}

function PessoaFisica (name, cpf) {
  Pessoa.call(this, name)
  this.cpf = cpf
}

PessoaFisica.prototype = Object.create(Pessoa.prototype)
PessoaFisica.prototype.getCPF = function() {
  return this.cpf
}

function PessoaJuridica (name, cnpj) {
  Pessoa.call(this, name)
  this.cnpj = cnpj
}

PessoaJuridica.prototype = Object.create(Pessoa.prototype)
PessoaJuridica.prototype.getCNPJ = function() {
  return this.cnpj
}

function MEI (name, cnpj) {
  PessoaJuridica.call(this, name, cnpj)
  this.limit = 80000
}

MEI.prototype = Object.create(PessoaJuridica.prototype)
MEI.prototype.getLimit = function() {
  return this.limit
}



const pablo = new Pessoa('Pablo')
const pessoaF1 = new PessoaFisica('Pablo', 04451216107)
const pessoaJ1 = new PessoaJuridica('Pablo Matos LTDA', 406160000109)
const mei1 = new MEI('pablo 04451216109', 404040040404000109)

console.log(pablo)
console.log(pablo.getName())

console.log(pessoaF1)
console.log(pessoaF1.getCPF())

console.log(pessoaJ1)
console.log(pessoaJ1.getCNPJ())

console.log(mei1)
console.log(mei1.getLimit())