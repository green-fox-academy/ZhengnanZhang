'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial
function factorio(int) {
	var s = 1;
	for (var i = 1; i < int + 1; i++) {
		s *= i;
	}
	return s;
}
console.log(factorio(5));