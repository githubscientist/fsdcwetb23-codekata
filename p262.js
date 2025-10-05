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
    // userInput = ["7 6", "1 2 3 4 5 6 7"]
    // read the inputs
    const [n, k] = userInput[0].split(' ').map(num => parseInt(num));
    const numbers = userInput[1].split(' ').map(num => parseInt(num));
    // using flag
    let foundPair = false;

    // brute force technique
    // generate all the possible pairs
    for (let i = 0; i < numbers.length - 1; i++) {
        // for every element at index i
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === k) {
                console.log('yes');
                foundPair = true;
                break;
            }
        }
        if (foundPair) break;
    }

    if (!foundPair) console.log('no');
});