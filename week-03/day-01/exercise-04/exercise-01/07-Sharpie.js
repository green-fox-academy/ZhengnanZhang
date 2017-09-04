'use strict';
function Sharepie(color,width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.use = function() {
    this.inkAmount -= this.width;
  }
}
module.exports = Sharepie;