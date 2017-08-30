'use strict';

var lineCount = 7;
var line = (lineCount/2).toFixed(0);
 for (var i = 1; i<line;i++) {
     console.log(" ".repeat(line-i)+"*".repeat((i-1)*2+1)+" ".repeat(line-i))
 }
console.log("*".repeat(lineCount));
  for (var j = line-1;j>0;j--) {
     console.log(" ".repeat(line-j)+"*".repeat((j-1)*2+1)+" ".repeat(line-j))
  }
//  }
// }

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is