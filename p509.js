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

    // initialize the count of swaps
    let swaps = 0;

    // sort the numbers as using selection sort technique
    for (let ci = 0; ci < n - 1; ci++) {
        // for every current index, we need to find the minimum index from ci to n-1
        let minimumValue = Math.min(...numbers.slice(ci,));
        let mi = numbers.slice(ci,).indexOf(minimumValue);

        if (ci != mi && mi != -1) {
            // we need a swap, js way
            [numbers[ci], numbers[mi]] = [numbers[mi], numbers[ci]];

            // keep track of the swap count
            swaps++;
        }
    }

    console.log(swaps);
});