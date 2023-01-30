const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', ()=>{

    console.log('Texto foi copiado')
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', event =>{

    div.textContent = `X ${event.offsetX} | Y ${event.offsetY} `
    console.log(event.offsetX, event.offsetY)
})

document.addEventListener('wheel', event=>{
    console.log(event.pageX, event.pageY)
})