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
    const n = +userInput[0];
    const numbers = userInput[1].split(' ').map(num => parseInt(num));

    const result = [];

    numbers.forEach(number => {
        if (!result.includes(number)) {
            result.push(number);
        }
    });

    console.log(result.join(' '));
});