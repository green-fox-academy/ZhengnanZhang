'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
var elements = 7;
for (var i = 0; i < elements; i++) {
	var line = new Array(elements).fill(0);
	line[elements - 1 - i] = 1;
	console.log(line);
}