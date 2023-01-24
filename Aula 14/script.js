// const paragraph = document.querySelector('p')
// // console.log(paragraph)
// // console.log(paragraph.innerText)

// // paragraph.innerText = 'Texto inserido'

// // paragraph.innerText += ' Texto inserido'

// const paragraphs = document.querySelectorAll('p')

// // console.log(paragraphs)

// // paragraphs.forEach((paragraph, index) => {
// //     paragraph.innerText += ` novo texto ${ index + 1} `
// // })



// const div = document.querySelector('.content')
// const div2 = document.querySelectorAll('.content')

// // console.log(div.innerHTML)

// // div.innerHTML += '<h2>Novo h2</h2>'

const people = ['Pablo', 'Fabiana', 'Sofia']

// console.log(div.innerHTML)
// console.log(div2)

// people.forEach(persons =>{
//     div2.innerHTML += `<p>${persons}<p>`
// })

// people.forEach( person => {
//     div.innerHTML += `<p style="color: red; font-size:300%; font-family:arial">${person}</p>`
// })


const h1 = document.querySelector('h1')
const div = document.querySelector('div.content')

console.log(h1.innerHTML += '<p>Esse é o novo título</p>')

people.forEach(people => {
    div.innerHTML += `<p>${people} Tavares</p>`
})
