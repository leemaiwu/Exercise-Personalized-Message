const greet = (name, owner) => {
    if (name === owner) {
        return `Hello boss`
    }
    return `Hello guest`
}

console.log(greet('Laura', 'Laura')) // Hello boss
console.log(greet('Laura', 'Jack')) // Hello guest