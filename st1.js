// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let charCounts = {};

    for (let char of userInput[0]) {
        charCounts[char] = 0;
    }

    console.log(Object.keys(charCounts).length === 3 ? 'Wonder' : '-1');
});