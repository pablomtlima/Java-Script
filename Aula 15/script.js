const article = document.querySelector('article')

console.log(article.children) //retorno um HTML collection e relembrando que HTMLcollection não é compativél com forEatch()
console.log(Array.from(article.children)) //converte o Htmlcollection para um array

// A função Array.from não é destrutiva ou seja, ela não modifica o original

//  Array.from(article.children).forEach(element =>{
//     element.classList.add('article-element')
//  })

const title  = document.querySelector('h2')

 console.log(title.parentElement.parentElement) // descrobrir quem é o pai, e se encadear mais um parentElement descobre quem é o pai do pai

 //agora spara descobrir o proximo irmão do h2

 console.log(title.nextElementSibling)

 //Mostra que p é o proximo sibling

 console.log(title.previousElementSibling)
