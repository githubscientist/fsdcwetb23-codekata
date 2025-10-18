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
    let n = Number(userInput[0]);
    let numbers = userInput[1].split(' ').map(number => Number(number));

    // find the frequencies of each value
    let frequencies = {};

    // iterate the numbers array and for each number create an entry into frequencies table
    numbers.forEach(number => frequencies[number] = 0);

    // repeat the same step but this time, let's track the frequencies of individual elements
    numbers.forEach(number => frequencies[number]++);

    // frequncies2d = [[1, 3], [1, 3], [3, 2], [1, 3], [2, 1], [3, 2], [4, 1]];
    let frequencies2d = numbers.map(number => [number, frequencies[number]]);

    // [[1, 3], [1, 3], [1, 3], [2, 1], [3, 2], [3, 2], [4, 1]]
    // [[2, 1], [4, 1], [3, 2], [3, 2], [1, 3], [1, 3], [1, 3]]
    // sort by values then sort by frequencies
    frequencies2d
        .sort((a, b) => a[0] - b[0])
        .sort((a, b) => a[1] - b[1])

    console.log(frequencies2d.map(sub => sub[0]).join(' '));
});