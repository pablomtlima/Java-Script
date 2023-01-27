const article = document.querySelector('article')

console.log(article.children) //retorno um HTML collection e relembrando que HTMLcollection não é compativél com forEatch()
console.log(Array.from(article.children)) //converte o Htmlcollection para um array
// A função Array.from não é destrutiva ou seja, ela não modifica o origianal

 Array.from(article.children).forEach(element =>{
    element.classList.add('article-element')
 })

 const title = document.querySelector('h2')

//  console.log(title.parentElement.parentElement)

console.log()