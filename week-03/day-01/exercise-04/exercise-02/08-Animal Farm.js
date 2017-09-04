'use strict';
function Animal() {
  this.hunger = 50;
  this.thirst = 50;

  this.eat = function() {
    this.hunger -= 1;
  }
  this.drink = function() {
    this.thirst -= 1;
  }
  this.play = function() {
    this.thirst += 1;
  }
}

function Farm(animals,slots) {
  this.list = animals;
  this.slot = slots;
  this.breed = function() {
    if (slots >=1) {
      this.slot -= 1;
      this.list.push(new Animal());
    }
    else {
      return false;
    }
  }
  this.slaughter = function() {
    var hun = 50;
    var index = 0;
    for (var i = 0; i < this.list.length ; i++) {
      if (this.list[i].hunger<hun) {
        index = i;
        hun = this.list[i].hunger;
      }
    }
    this.list.splice(index,1,'');
  }
}
var bear = new Animal();
var tiger = new Animal();
bear.eat();
var fa = new Farm([bear,tiger],4);
fa.breed();
fa.slaughter();
console.log(fa.list)
// module.exports = Animal;
