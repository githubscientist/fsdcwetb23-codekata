// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

// Expected Output: 12 4 2 7 45 22 9 8 1 11
inp.on("close", () => {
    // handle the input
    let n = Number(userInput[0]);

    let numbers = userInput[1].split(' ').map(number => Number(number));
    let [i1, i2] = userInput[2].split(' ').map(number => Number(number));

    // print the joined array in a space separated format
    console.log(numbers.slice(0, i1).concat(numbers.slice(i1, i2 + 1).sort((a, b) => b - a), numbers.slice(i2 + 1,)).join(' '));
});