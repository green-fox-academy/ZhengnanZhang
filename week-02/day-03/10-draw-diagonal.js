'use strict';

var lineCount = 6;
console.log("%".repeat(lineCount));
for (var i = 0; i < lineCount-2;i++) {
    console.log("%"+" ".repeat(i)+"%"+" ".repeat(lineCount-3-i)+"%");
}
console.log("%".repeat(lineCount));

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is