'use strict';
// Reverse the string!
//Solution 1
var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(reversed));
//Solution 2
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString(reversed));