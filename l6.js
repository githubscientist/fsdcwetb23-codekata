const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    console.log(userInput[0].split('').map(value => parseInt(value)).filter(val => val % 2 === 0).sort().join(' '));
    console.log(userInput[0].split('').map(value => parseInt(value)).filter(val => val % 2 !== 0).sort().join(' '));
});