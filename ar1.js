const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    const [n, k] = userInput[0].split(' ').map(v => +v);
    const numbers = userInput[1].split(' ').map(v => +v);

    console.log(numbers.map((_, i) => Math.abs(numbers[i] - numbers[(i + 1) % n]) > k ? 1 : 0).join(' '));
});