try {
    console.log(oi)
} catch (error) {
    
    if(error.name == 'ReferenceError' && error.message == 'oi is not defined' ){
        const oi = 'Oi criada'
        console.log(oi)
    }

    console.log(error.message, error.name)
}
