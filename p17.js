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

    for (let row = 1; row <= N; row++) {
        let line = [];

        for (let col = 1; col <= N; col++) {
            if (row === col || row === N - col + 1) {
                line.push('M');
            } else if (row === 1 || row === N || col === 1 || col === N) {
                line.push('F');
            } else {
                line.push('C');
            }
        }

        console.log(line.join(' '));
    }
});