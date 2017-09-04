function Rocket(type, fuel, launchNum) {
  this.type = type;
  this.fuel = fuel;
  if (launchNum === undefined) {
    this.launchNum = 0;
  } else {
    this.launchNum = launchNum;
  }
  this.launch = function () {
    if (this.type === "falcon1") {
      this.fuel -= 1;
    } else {
      this.fuel -= 9;
    }
    this.launchNum += 1;
  };
  this.refill = function () {
    if (this.type === "falcon1") {
      var rest = 5 - this.fuel;
      this.fuel = 5;

    } else {
      var rest = 20 - this.fuel;
      this.fuel = 20;

    }
    return rest;
  }
  this.getStats = function () {
    return `name: ${this.type}, fuel: ${this.fuel}, launches: ${this.launchNum}`;
  }
}
function SpaceX(fuel) {
  this.fuel = fuel;
  this.rockets = [];
  this.launches = 0;
  this.addRocket = function (rocket) {
    this.rockets.push(rocket);
    this.launches += rocket.launchNum;
  };
  this.refill_all = function () {
    var that = this;
    this.rockets.forEach(function (element) {
      that.fuel -= element.refill();
    })
  };
  this.launch_all = function () {
    var that = this;
    this.rockets.forEach(function (element) {
      element.launch();
      that.launches += 1;
    })
  };
  this.buy_fuel = function (amount) {
    this.fuel += amount;
  };
  this.getStats = function () {

    return `rocket: ${this.rockets.length}, fuel: ${this.fuel}, launches: ${this.launches}`;
  }

}
var falcon1 = new Rocket('falcon1')
var returned_falcon9 = new Rocket('falcon9', 11, 1)

falcon1.refill() // 5
falcon1.launch()

console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1
var space_x = new SpaceX(100)
var falcon1 = new Rocket('falcon1', 0, 0)
var falcon9 = new Rocket('falcon9', 0, 0)
var returned_falcon9 = new Rocket('falcon9', 11, 1)

console.log(returned_falcon9.getStats()) // name: falcon9, fuel: 11, launches: 1

space_x.addRocket(falcon1)
space_x.addRocket(falcon9)
space_x.addRocket(returned_falcon9)

console.log(space_x.getStats()) // rockets: 3, fuel: 100, launches: 1
space_x.refill_all()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 1
space_x.launch_all()
console.log(space_x.getStats()) // rockets: 3, fuel: 66, launches: 4
space_x.buy_fuel(50)
console.log(space_x.getStats()) // rockets: 3, fuel: 116, launches: 4