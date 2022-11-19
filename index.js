let name = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
let messages = [];
// writeCards(): returns an array of thank you messages for each name provided to the function
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// countDown(): invokes console.log once for each number, counting down from the number provided to zero:
// logs each number when counting down, starting from the number provided:
function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}
countDown(4);
