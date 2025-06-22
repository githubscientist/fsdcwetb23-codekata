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

    for (let row = 1, stars = 1; row <= N; row++, stars += 2) {
        let line = [];

        // 4 3 2 1 0 - 'b'
        // N - row number of times run a loop
        for (let b = 1; b <= N - row; b++) {
            line.push('b');
        }

        // stars - 1 3 5 7 9
        for (let star = 1; star <= stars; star++) {
            line.push('*');
        }

        for (let b = 1; b <= N - row; b++) {
            line.push('b');
        }

        console.log(line.join(''));
    }
});