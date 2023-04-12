  import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'
  import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'

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
  
  getDocs(collection(db, 'games'))
    .then(querySnapshot => {
      const gamesLis = querySnapshot.docs.reduce((acc, doc) => { 
        const {title, developedBy, createdAt} = doc.data()
        console.log(createdAt.toDate())
      acc += `<li class="my-4">
        <h5>${title}</h5>

        <ul>
          <li>Desenvolvido por ${developedBy} </li>
          <li>Adicionado no banco em ${createdAt.toDate()} </li>
        </ul> 
      </li>`
      return acc
    },'')

    const gamesList = document.querySelector('[data-js="games-list"]')
    gamesList.innerHTML = gamesLis

  })
  .catch(console.log())