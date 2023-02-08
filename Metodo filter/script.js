// const randomNumber = [36, 99, 37, 63];

// const numberGreaterThan37 = randomNumber.filter((item, index, array) => item > 37);

// console.log(numberGreaterThan37)

const users = [
    {name: 'Ada Lovelace', premium: true},
    {name: 'Grace Hopper', premium: false},
    {name: 'Alan Turing', premium: true},
    {name: 'Linus Torvalds', premium: false},
    {name: 'Margaret Hamilton', premium: true},
]

const premiumUsers = users.filter(user => user.premium )

console.log(premiumUsers)