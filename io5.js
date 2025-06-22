const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    // console.log(userInput[0], userInput[1], userInput[2]);

    // console.log(userInput.join(' '));

    let result = '';

    for (let index = 0; index < userInput.length; index++) {
        if (index != userInput.length - 1) {
            result = result + userInput[index] + ' ';
        } else {
            result = result + userInput[index];
        }
    }

    console.log(result);

});