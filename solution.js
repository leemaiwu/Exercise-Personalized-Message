const greet = (name, owner) => {
    if (name === owner) {
        return `Hello boss`
    }
    return `Hello guest`
}

console.log(greet('Laura', 'Laura')) // Hello boss
console.log(greet('Laura', 'Jack')) // Hello guest


// Alternate Solution

const greeting = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

console.log(greeting('Laura', 'Laura')) // Hello boss
console.log(greeting('Laura', 'Jack')) // Hello guest