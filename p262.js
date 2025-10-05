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
    // hashing technique
    let hashTable = {};

    /*
        hashTable = {
            4: true,
            5: true,
            12: true,
            2: true,
        }
    */

    // iterate the numbers array
    for (let i = 0; i < n; i++) {
        // for every element, find the difference
        let diff = k - numbers[i]; // 11 - 7 = 4

        // check if the element diff exists in hash table
        if (hashTable[diff]) {
            return true;
        }

        // create an entry to the hash table
        hashTable[numbers[i]] = true;
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