const getTodos = callBack =>{ 
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        const isRequestOK = request.readyState === 4 && request.status === 200
        const isRequestNotOK = request.readyState === 4 

        if(isRequestOK) {
        const data = JSON.parse(request.responseText)
            callBack(null, data)
            return
        }

        if(isRequestNotOK){
            callBack('Não foi possivel acessar a api', null)
        }
    })

request.open('GET', './todos.')
request.send()
}


getTodos((error, data) => {
    console.log('Call Back executado')
    if (error) {
        console.log(error)
        return
    }
    console.log(data)
    
})