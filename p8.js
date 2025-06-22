const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    const N = +userInput[0];

    // we need N lines or rows
    for (let row = 1; row <= N; row++) {
        // for each row
        // row = 1, print 1 star => console.log - 1
        // row = 2, print 2 stars => console.log - 2
        // row = 3, print 3 stars => console.log - 3
        // row = 4, print 4 stars => console.log - 4
        // row = 5, print 5 stars => console.log - 5
        let line = [];

        // total number of executions of the loop => row
        for (let col = 1; col <= row; col++) {
            line.push('*');
        }
        console.log(line.join(' '));
    }
});