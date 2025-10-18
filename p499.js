const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    const n = Number(userInput[0]);

    const numbers = userInput[1].split(' ').map(number => Number(number));
    const marks = userInput[2].split(' ').map(mark => Number(mark));

    // create a hashMap with the provided roll number and marks as such
    const hashMap = {};

    for (let i = 0; i < n; i++) {
        hashMap[numbers[i]] = marks[i];
    }

    const orders = numbers.slice();

    // sort the roll numbers
    // using bubble sort
    // iterate the array for n-1 iterations
    for (let i = 1; i <= n - 1; i++) {
        // take a pair of numbers always starting from the first number(index: 0)
        for (let j = 0; j < n - 1; j++) {
            // pair: j index and j+1 index
            // check if the pair needs a swap or not
            if (numbers[j] > numbers[j + 1]) {
                // we need a swap
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;

                // deduct the marks for those students -- with rollnumbers
                hashMap[numbers[j]]--;
                hashMap[numbers[j + 1]]--;
            }
        }
    }

    console.log(orders.map(order => hashMap[order]).join(' '));
});