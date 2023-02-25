const getTodos = () => { 
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', ()=>{

        if(request.readyState === 4 && request.status === 200){
            console.log('request ok')
            console.log(request.responseText)

            return
        }
        if(request.readyState === 4 && request.status !== 200){
            console.log('Deu ruim nos dados ')
            return
        }
        console.log('Ainda não carregou')
    })

    request.open('GET', './todos.json')
    request.send()
}

getTodos()

