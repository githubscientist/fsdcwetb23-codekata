// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

function findMax(divisors) {
    // returns the maximum value
    // let maxValue = divisors[0];
    // for (let i = 1; i < divisors.length; i++) {
    //     if (divisors[i] > maxValue) {
    //         maxValue = divisors[i];
    //     }
    // }
    return divisors.reduce((p, c) => p > c ? p : c, divisors[0]);
}

inp.on("close", () => {
    let [a, b] = userInput[0].split(' ').map(num => Number(num));
    let small = a < b ? a : b;
    let divisors = [];

    // find HCF or GCD of a & b
    for (let divisor = small; divisor >= 1; divisor--) {
        if (a % divisor === 0 && b % divisor === 0) {
            divisors.push(divisor);
        }
    }

    console.log(findMax(divisors));
});