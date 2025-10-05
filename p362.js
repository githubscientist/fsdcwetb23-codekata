// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

function isUnique(s) {
    return new Set(s.split('')).size === s.length;
}

inp.on("close", () => {
    let s = userInput[0];
    let maxLength = 0;

    // generate all the possible substrings
    for (let i = 0; i < s.length + 1; i++) {
        for (let j = i; j < s.length + 1; j++) {
            if (isUnique(s.substring(i, j))) {
                maxLength = Math.max(s.substring(i, j).length, maxLength);
            }
        }
    }

    console.log(maxLength);
});