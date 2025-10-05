// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

function isPairExists(numbers, n, k) {
    // two pointers technique
    let start = 0;
    let end = n - 1;

    while (start < end) {
        if (numbers[start] + numbers[end] === k) {
            return true;
        } else if (numbers[start] + numbers[end] < k) {
            start++;
        } else if (numbers[start] + numbers[end] > k) {
            end--;
        }
    }

    return false;
}

inp.on("close", () => {
    // userInput = ["7 6", "1 2 3 4 5 6 7"]
    // read the inputs
    const [n, k] = userInput[0].split(' ').map(num => parseInt(num));
    const numbers = userInput[1].split(' ').map(num => parseInt(num));

    if (isPairExists(numbers, n, k)) {
        console.log('yes');
    } else {
        console.log('no');
    }
});