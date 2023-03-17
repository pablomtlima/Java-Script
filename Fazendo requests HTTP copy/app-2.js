const getTodos = url => new Promise( ( resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () =>{

        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText) 
            resolve(data)
        }
        if(request.readyState === 4 ){
            reject('Deu ruim')
        }
    })
    request.open('GET', url)
    request.send()
})

getTodos('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokemon => {
        console.log(pokemon)
        return getTodos('https://pokeapi.co/api/v2/pokemon/pikachu')
    }).then(pokemon  => {
        console.log(pokemon)
        return getTodos('https://pokeapi.co/api/v2/pokemon/raichu')
    }).then(pokemon => console.log(pokemon))
    .catch(error => console.log(error))
















// const getTodos = (url, callback) => new Promise ( (resolve, reject) =>{    
//     const request = new XMLHttpRequest()
    
//     request.addEventListener('readystatechange', ()=>{
    
//         if(request.readyState === 4 && request.status === 200){
//             const data = JSON.parse(request.responseText)
//             resolve(data)
//         }
//         if(request.readyState === 4 && request.status !== 200){
//             reject('Deu ruim nos dados')
//         }
//     })
//     request.open('GET', url)
//     request.send()
// }) 


