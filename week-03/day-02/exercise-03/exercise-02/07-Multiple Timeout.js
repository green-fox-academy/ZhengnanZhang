'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds
console.log("apple");
setTimeout( function(){console.log("pear")},1*1000);
setTimeout( function(){console.log("melon")},2*1000);
setTimeout( function(){console.log("grapes")},3*1000);
