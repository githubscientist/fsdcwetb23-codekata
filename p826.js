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
    console.log(
        userInput[0]
            .split('->')
            .reduce((p, c) => {
                if (!p.includes(c)) {
                    return [...p, c];
                } else {
                    return p;
                }
            }, [])
            .join('->')
    );
});