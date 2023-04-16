  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'
  import { getFirestore, collection, addDoc, serverTimestamp, doc, deleteDoc, onSnapshot} from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'

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

  const unsubscribe =  onSnapshot(collectionGames, querySnapshot => {
    console.log('CallBack do onSnapShot executado')
    if(!querySnapshot.metadata.hasPendingWrites){
      const games = querySnapshot.docs.reduce((acc, doc, index) => { 
        const {title, developedBy, createdAt} = doc.data()
      acc += `<li data-id="${doc.id}" class="my-4">
        <h5>${title}</h5>
  
        <ul>
          <li>Desenvolvido por ${developedBy} </li>
          ${createdAt 
            ? `<li>Adicionado no banco em ${createdAt.toDate()}</li>` : ''}

        </ul> 
        <button data-remove="${doc.id}" class="btn btn-danger btn-sm">Remover</button>
      </li>`
      return acc
    }, '')
    console.log(games)
    gamesList.innerHTML = games
    console.log('Manipulação de DOM executada')
    }

})

  formAddGame.addEventListener('submit', e =>{
    e.preventDefault()

    addDoc(collectionGames, {
      title: e.target.title.value,
      developedBy: e.target.developer.value,
      createdAt: serverTimestamp()
    })
    .then(doc => console.log('Documento criado com o ID', doc.id))
    .catch(console.log)
  })

  gamesList.addEventListener('click', e => {
    const idRemoveButton = e.target.dataset.remove
    if(idRemoveButton) {
      deleteDoc(doc(db, 'games', idRemoveButton))
        .then(() => console.log('Game removido'))
        .catch(console.log)
    }
  })

  unsubscribeButton.addEventListener('click', unsubscribe)