fetch('https://jsonplaceholder.typicode.com/users') // retorna uma promisse
    .then(response => response.json())
    .then(user => console.log(user))
    .catch( error => console.log(error))