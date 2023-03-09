const getUsers = async () => {
    try{
        const response = await fetch('../json/todos.json')

        if(!response.ok){
            throw new Error('Não foi possivel obter os dados')
        }
        
    }catch (error){
        console.log(error.message)
    }
}


const logUsers = async () => {
    const users = await getUsers()
    console.log(users)
}

logUsers().then(response => response.json()).then(gif => console.log(gif))

// try {
//     console.log(oi)
// } catch (error) {

//     if(error.name == 'ReferenceError' && error.message == 'oi is not defined' ){
//         const oi = 'Oi criada'
//         console.log(oi)
//     }

//     console.log(error.message, error.name)
// }
