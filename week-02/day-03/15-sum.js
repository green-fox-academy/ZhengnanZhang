'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum(int) {
    var sum = 0;
    for (var i = 0; i < int+1; i++) {
        sum +=i;
    }
    // return sum;
    return sum;
}
console.log(sum(5));