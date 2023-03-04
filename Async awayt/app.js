const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return users = await response.json()
}

console.log(getUsers())

