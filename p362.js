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
    let s = userInput[0];
    let maxLength = 0;

    let start = 0;
    let end = -1;

    let set = new Set();

    while (end < s.length - 1) {
        // include the next character
        end++;

        // check if we can include the next character
        if (!set.has(s[end])) {
            // create an entry into the set
            set.add(s[end]);

            // update the maxLength
            maxLength = Math.max(maxLength, set.size);
        } else {
            // we cannot include the next character
            // iterate the start pointer until we can include the next character
            while (set.has(s[end])) {
                // remove the start character from the set
                set.delete(s[start]);

                // update the starting index
                start++;
            }

            end--;
        }
    }

    console.log(maxLength);
});