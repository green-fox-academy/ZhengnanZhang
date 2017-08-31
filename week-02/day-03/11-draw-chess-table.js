// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
var height = 8;
for (var i = 0; i < height; i++) {
	if (i % 2 === 0) {
		console.log(" % % % %");
	} else {
		console.log("  % % % %");
	}
}