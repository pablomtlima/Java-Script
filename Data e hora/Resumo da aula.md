```js
const present = new Date() //gera um objeto que representa um momento no tempo

console.log(present)

console.log('getFullYear', present.getFullYear()) // ano 
console.log('getMonth', present.getMonth()) // A contagem do mês é zero based
console.log('getDate', present.getDate()) // dia do mês
console.log('getDay', present.getDay()) // dia da semana é zero based a partir de domingo
console.log('getHours', present.getHours())
console.log('getMinutes', present.getMinutes())
console.log('getSeconds', present.getSeconds())

console.log('timeStamp', present.getTime()) // os milisegundos desde 1 de janeiro de 1970 até aqui
console.log('toDateString', present.toDateString())
console.log('toTimeString', present.toTimeString())
console.log('toLocaleString', present.toLocaleString())

const past = new Date('May 1 2020 7:47:00')
const present = new Date()


const difference = present.getTime() - past.getTime()
console.log(difference)

const seconds = Math.round(difference / 1000)

console.log({seconds})

const minutes = Math.round(seconds / 60 )

console.log({minutes})

const hours = Math.round(minutes  / 60 )

console.log({hours})

const days = Math.round(hours  / 24 )

console.log({days})

console.log(`O post foi escrito há ${days} dias`)

const timeStamp = 88330140144

console.log( new Date(timeStamp))
