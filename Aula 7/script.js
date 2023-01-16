// o operador lógico not (1)

let isUserLoggedIn = false

if (!isUserLoggedIn){
    console.log('Você precisa fazer login para continuar')
}
console.log(!true)
console.log(!false)


// Break e continue
const scores = [50, 25, 0, 30, 100, 20, 10]

for (let i=0; i<scores.length; i++){
    if (scores[i] === 0 ){
        continue
    }

    console.log(`Sua pontuação: ${scores[i]}`)
    if(scores[i] === 100){
    console.log('Parabens, você atingia a Pontuação maxima')
    break
    }   
}

// switch statement
const grade = 'A'

switch (grade) {
    case 'A' :
        console.log('Você tirou um A')
        break
    case 'B':
        console.log('Você tirou um B')
        break
    case 'C':
        console.log('Você tirou um C')
        break
    case 'D':
        console.log('Você tirou um D')
        break
    case 'E':
        console.log('Você tirou um E')
        break
    default:
        console.log('Nota invalida')
}
