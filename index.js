function RandomInt(maxValue) {
    const x = Math.random() * maxValue
    return Math.floor(x);
}

console.log(RandomInt(101))

function getUserGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue, 10)
}
getUserGuess()

globalThis.getUserGuess = getUserGuess;