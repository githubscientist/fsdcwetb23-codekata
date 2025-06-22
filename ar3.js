const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let n = +userInput[0];
    let numbers = userInput[1].split(' ');

    // hashing technique
    let counts = {};

    numbers.forEach(number => counts[number] = 0);

    numbers.forEach(number => counts[number]++);

    console.log(Object.entries(counts).filter(sub => sub[1] > 1).map(sub => sub[0]).join(' '));
});