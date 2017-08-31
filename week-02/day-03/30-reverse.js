'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`
//Solution 1
var aj = [3, 4, 5, 6, 7];
// console.log(aj.reverse());

//Solution 2
var temp1 = [];
for (var i = aj.length - 1; i >= 0; i--) {
	temp1[aj.length - 1 - i] = aj[i];
}
console.log(temp1);


// //Solution 3
// var temp = [];
// var len = aj.length;
// for (var i = 0; i<len;i++) {
//     temp.push(aj.shift);
// }
// console.log(temp);
