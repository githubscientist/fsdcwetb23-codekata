const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    // console.log(userInput[0].split('').join('\n'));
    // userInput[0].split('').forEach(ch => console.log(ch));
    for (let char of userInput[0]) {
        console.log(char);
    }
});