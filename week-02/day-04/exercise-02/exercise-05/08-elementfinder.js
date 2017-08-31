'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

var numbers = [1,2,3,4,6,6,8];
function check(numbers) {
  var str = "";
  numbers.forEach (function(e) {
  if (e === 7) {
    str = "Hoorray";
  }
  })
  return (str === "") ? "Nooooo" : "Hoorray"};
console.log(check(numbers));