// let numbers = [3, 7, 2, 1, 6, 4, 5];
// let chars = ['a', 'Z', 'z', '@', '$', '5', 'A'];
// let fruits = ['orange', 'blackberry', 'banana', 'mango', 'apricot', 'apple', 'avacado'];
let numbers2d = [[3, 4], [1, 5], [7, 2], [4, 1], [5, 3]];

function compareFn(a, b) {
    // return a negative value if the first arg is less than second arg
    if (a < b) {
        return 1;
    } else if (a === b) {
        // return zero if they are equal
        return 0;
    } else {
        // return a positive value if the first arg is greater than second arg
        return -1;
    }
}

// a = [3, 4]
// b = [1, 5]
numbers2d.sort((a, b) => a[1] - b[1]);

console.log(numbers2d);

// sort method can be used to sort the values
// sort method -- in-place method: the positions of the values in the original array will be affected.
// fruits.sort(compareFn);
// fruits.sort((a, b) => b - a);

// console.log(fruits);

