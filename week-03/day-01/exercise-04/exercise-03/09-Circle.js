'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'
'use strict';
function Circle(radius) {
  this.radius = radius;
  this.area;
  this.getCircumference = function() {
    this.circumference = 2 * Math.PI * this.radius;
  }
  this.getArea = function() {
    this.area = Math.PI*this.radius*this.radius;
  }
  this.toString = function() {
    return 'Radius: ' + this.radius + ', Circumference: ' + this.circumference+', Area: '+this.area;
  }
}
var de = new Circle(4);
de.getCircumference();
de.getArea();
console.log(de.radius);
console.log(de.circumference);
console.log(de.area);
console.log(de.toString());

