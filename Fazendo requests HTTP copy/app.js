const getTodos = url => new Promise ( (resolve, reject) =>{    
    const request = new XMLHttpRequest()
    
    request.addEventListener('readystatechange', ()=>{
    
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            resolve(data)
        }
        if(request.readyState === 4 && request.status !== 200){
            reject('Deu ruim nos dados')
        }
    })
    request.open('GET', url)
    request.send()
}) 

console.log(1)

getTodos('https://pokeapi.co/api/v2/pokemon/ditto')
.then(pokemon => console.log(pokemon))
.catch(error => console.log(error))

console.log(1)

getTodos('https://pokeapi.co/api/v2/pokemon/pikachu')
.then(pokemon => console.log(pokemon))
.catch(error => console.log(error))

console.log(1)

getTodos('https://pokeapi.co/api/v2/pokemon/bulbasaur')
.then(pokemon => console.log(pokemon))
.catch(error => console.log(error))


console.log(1)

// getTodos('./json/todos.json',(error, data) => {
//     console.log(data)
//     getTodos('./json/todos-02.json', (error,data) => {
//         console.log(data)
//         getTodos('./json/todos-03.json',(error,data)=>{
//             console.log(data)
//         })
//     })
// })

