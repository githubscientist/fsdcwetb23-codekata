const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    // const [m, n] = userInput[0].split(' ').map(v => +v);
    const nums1 = userInput[1].split(' ').map(v => +v).sort((a, b) => a - b);
    const nums2 = userInput[2].split(' ').map(v => +v).sort((a, b) => b - a);

    console.log([...nums1, ...nums2].join(' '));
});