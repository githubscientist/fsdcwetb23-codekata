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
    let N = +userInput[0];
    let value = 1;

    for (let row = 1; row <= N; row++) {
        let line = [];

        for (let col = 1; col <= row; col++) {
            line.push(value++);
        }

        console.log(line.join(' '));
    }
});