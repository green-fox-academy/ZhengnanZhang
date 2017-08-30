
'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var a = 12.3;
var b = 13.2;
var c = 21.3;
var surface = 2*(a*b+a*c+c*b);
var vol = a*b*c;
console.log("Surface Area:" + surface);
console.log("Volume:" + vol);