import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'
import { getFirestore, collection, addDoc, serverTimestamp, doc, deleteDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'

const firebaseConfig = {
    apiKey: 'AIzaSyCho-kJz3S7VziTD6gtT11ulUpGiAU8Mic',
    authDomain: 'testing-firebase-793e3.firebaseapp.com',
    projectId: 'testing-firebase-793e3',
    storageBucket: 'testing-firebase-793e3.appspot.com',
    messagingSenderId: '959471524008',
    appId: '1:959471524008:web:ab9464de5e528393000a9d',
    measurementId: 'G-6Z8PQMTX6M'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const collectionGames = collection(db, 'games')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-list"]')
const unsubscribeButton = document.querySelector('[data-js="unsub"]')

const formatDate = createdAt => new Intl
    .DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
    .format(createdAt.toDate())


const sanitize = string => DOMPurify.sanitize(string)

const renderGame = docChange => {

        const [id, { title, developedBy, createdAt }] = [docChange.doc.id, docChange.doc.data()]

        const liGame = document.createElement('li')
        liGame.setAttribute('data-id', id)
        liGame.setAttribute('class', 'my-4')

        const h5 = document.createElement('h5')
        h5.textContent = sanitize(title)

        const ul = document.createElement('ul')

        const liDevelopedBy = document.createElement('li')
        liDevelopedBy.textContent = `Desenvolvido por ${sanitize(developedBy)}`

        if (createdAt) {
            const liDate = document.createElement('li')
            liDate.textContent = `Adicionado no banco em ${formatDate(createdAt)}`
            ul.append(liDate)
        }

        const button = document.createElement('button')
        button.textContent = 'Remover'
        button.setAttribute('data-remove', id)
        button.setAttribute('class', "btn btn-danger btn-sm")

        ul.append(liDevelopedBy)
        liGame.append(h5, ul, button)
        gamesList.append(liGame)
}

const renderGamesList = snapshot => {
    if (snapshot.metadata.hasPendingWrites) {
        return
    }

    snapshot.docChanges().forEach(docChange => {
        if (docChange.type === 'removed') {
            const liGame = document.querySelector(`[data-id="${docChange.doc.id}"]`)
            liGame.remove()
            return
        }
        renderGame(docChange)
    })
}


const to = promise => promise
    .then(result => [null, result])
    .catch(error => [error])

const addGame = async e => {
    e.preventDefault()

    const [error, doc] = await to(
        addDoc(collectionGames, {
            title: sanitize(e.target.title.value),
            developedBy: sanitize(e.target.developer.value),
            createdAt: serverTimestamp()
        }))

    if (error) {
        return console.log(error)
    }

    console.log('Documento criado com o ID', doc.id)
    e.target.reset()
    e.target.title.focus()

}

const deletGame = async e => {
    const idRemoveButton = e.target.dataset.remove

    if (!idRemoveButton) {
        return
    }

    const [error] = await to(deleteDoc(doc(db, 'games', idRemoveButton)))

    if (error) {
        console.log(error)
        return
    }

    console.log('Game removido')
}

const handleSnapshotError = e => console.log(e)

const unsubscribe = onSnapshot(collectionGames, renderGamesList, handleSnapshotError)
formAddGame.addEventListener('submit', addGame)
gamesList.addEventListener('click', deletGame)
unsubscribeButton.addEventListener('click', unsubscribe)