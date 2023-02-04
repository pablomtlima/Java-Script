const form = document.querySelector('.quiz-form')
const finalResult = document.querySelector('.result')

const correctAnswers = ['B', 'B', 'B', 'B']

form.addEventListener('submit', event => {
  event.preventDefault()
  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })

  scrollTo(0, 0)

  finalResult.classList.remove('d-none')
  
  let counter = 0
  
  const timer = setInterval(() => {
    if(counter === score){
      clearInterval(timer)
    }
  
    finalResult.querySelector('span').textContent = `${counter}%`
    counter++
  }, 1);
})







// const timer = setInterval(() => {
//   counter++
//   if(counter === 5 ){
//     clearInterval(timer) // cancela a repetição do setInterval recebendo o ID do setInterval armazenado em timer
//   }
//   console.log('oi')
// }, 1000);


// i = 0;
// setInterval(() => { //executado repetidamente no intervalo de tempo especificado como segundo argumento
//   i++
//   console.log(`${i} segundos`)
// }, 1000)



// setTimeout(() => { // executa uma unica vez depois do intervalo de tempo especificado como segundo argumento
//   console.log('toksfmnsdl')
// }, 1000);
