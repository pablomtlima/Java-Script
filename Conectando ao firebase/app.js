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
const collectionGames = collection(db, 'game')

const formAddGame = document.querySelector('[data-js="add-game-form"]')
const gamesList = document.querySelector('[data-js="games-list"]')
const unsubscribeButton = document.querySelector('[data-js="unsub"]')

const formatDate = createdAt => new Intl
    .DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
    .format(createdAt.toDate())

const renderGamesList = querySnapshot => {
    if (!querySnapshot.metadata.hasPendingWrites) {
        gamesList.innerHTML = querySnapshot.docs.reduce((acc, doc ) => {
            const [id, { title, developedBy, createdAt }] = [doc.id, doc.data()]

            return `${acc}<li data-id="${id}" class="my-4">
                <h5>${title}</h5>
        
                <ul>
                <li>Desenvolvido por ${developedBy} </li>
                ${createdAt
                    ? `<li>Adicionado no banco em ${formatDate(createdAt)}</li>` : ''}

                </ul> 
                <button data-remove="${id}" class="btn btn-danger btn-sm">Remover</button>
            </li>`
        }, '')
    }
}

const addGame = e => {
    e.preventDefault()

    addDoc(collectionGames, {
        title: e.target.title.value,
        developedBy: e.target.developer.value,
        createdAt: serverTimestamp()
    })
        .then(doc => {
            console.log('Documento criado com o ID', doc.id)
            e.target.reset()
            e.target.title.focus()
        })
        .catch(console.log)

}

const deletGame = e => {
    const idRemoveButton = e.target.dataset.remove
    if (idRemoveButton) {
        deleteDoc(doc(db, 'games', idRemoveButton))
            .then(() => console.log('Game removido'))
            .catch(console.log)
    }
}

const handleSnapshotError = e => console.log(e)

const unsubscribe = onSnapshot(collectionGames, renderGamesList, handleSnapshotError)
formAddGame.addEventListener('submit', addGame)
gamesList.addEventListener('click', deletGame)
unsubscribeButton.addEventListener('click', unsubscribe)