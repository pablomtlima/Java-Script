```js 
const paragraph = document.querySelector('p')
 console.log(paragraph)
 console.log(paragraph.innerText)

 paragraph.innerText = 'Texto inserido'

 paragraph.innerText += ' Texto inserido'

const paragraphs = document.querySelectorAll('p')

console.log(paragraphs)

paragraphs.forEach((paragraph, index) => {
    paragraph.innerText += ` novo texto ${ index + 1} `
})



const div = document.querySelector('.content')
const div2 = document.querySelectorAll('.content')

 console.log(div.innerHTML)

 div.innerHTML += '<h2>Novo h2</h2>'

const people = ['Pablo', 'Fabiana', 'Sofia']

 console.log(div.innerHTML)
 console.log(div2)

 people.forEach(persons =>{
     div2.innerHTML += `<p>${persons}<p>`
 })

 people.forEach( person => {
     div.innerHTML += `<p style="color: red; font-size:300%; font-family:arial">${person}</p>`
 })


 const list = document.getElementById ('list')  //pegou o item pelo id

 list.innerHTML += `<li type='I'><a href="#">Item ${list.children.length+1}</a></li>`
 list.innerHTML += `<li type='I'></li>`
 list.innerHTML += `<li type='I'></li>`
 list.innerHTML += `No item "${people.join(', ')}" o ultimo é  ${people.pop()} e o primeiro é ${people.shift()} `


 list.innerHTML += "<p><h1>Macaco velho não aprende truque novo</h1></p>"
 const link = document.querySelector('a')

  console.log(link.getAttribute('href'))  coloca dentre de getAttribute('') //o nome do atributo oa sser bsucado 

 link.setAttribute('href', 'https:www.pablolima.com.br/')

 link.innerText = 'Meu site pessoal'

 const parag = document.querySelector('p')

 console.log(parag.getAttribute('class'))

 parag.setAttribute('class', 'sucess')  // modifica o valor de atributos que ja estão armazenado em uma tag

 parag.setAttribute('style' , 'color: green')

 const title = document.querySelector('h1')

 title.setAttribute ('style','margin:50px;')  // o metodo setAttribute pode substituir o estilo anterior

 console.log(title.style)
 console.log(title.style.color)

 title.style.margin = '50px'  //acessando o style dessa forma após .style é possivel inserir qualquer propriedade css sem subistituir o estilo anterior

 title.style.color = 'green'

 title.style.fontSize = '50px'  //toda vez que a propriedade css tiver mais de uma palavra exemplo font-size é adotado o style camelCase, logo ficaria fontSize

 title.style.margin = ''  //remover uma propriedade é só passar uma string vazia 

 const paragraph3 = document.querySelector('p')

 console.log(paragraph3.classList)  //obtém uma listagem dos elementos que um classe tem

 paragraph3.classList.add('error')

 paragraph3.classList.remove('error')

 paragraph3.classList.add('success')

 const paragraphs = document.querySelectorAll('p')

 console.log(paragraphs)

 paragraphs.forEach(paragraph => {
     if(paragraph.textContent.includes('error')){
         paragraph.classList.add('error')
     }else if(paragraph.innerText.includes('success')){
         paragraph.classList.add('success')
     }
 })

const title = document.querySelector('h1')

title.classList.toggle('test')
title.classList.toggle('test')