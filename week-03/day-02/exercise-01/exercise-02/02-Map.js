'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.
function count(word) {
  var sum = 0;
  var temp = word.split("");
  temp.forEach(function(e) {
    if (e === 'e'){
      sum += 1;
    }
  })
  return sum;
}
var ar = fruits.map(function(element) {
  return count(element);
})
console.log(ar);