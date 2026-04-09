function showMessage(message) {
     console.log(`Message: ${message}`);
}
let sm = showMessage;

sm("Hi there!!")
console.log(typeof sm)