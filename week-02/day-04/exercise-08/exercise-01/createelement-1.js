var asteroidList = document.querySelector('ul.asteroids');
var newAsteroid = document.createElement("li");
newAsteroid.textContent = "The Green Fox";
asteroidList.appendChild(newAsteroid);

var newAsteroid1 = document.createElement("li");
newAsteroid1.textContent = "The Lamplighter";
asteroidList.appendChild(newAsteroid1);
var container = document.querySelector('.container');
var heading = document.createElement("h1");
heading.textContent = "I can add elements to the DOM!"
container.appendChild(heading);
var img = document.createElement("img");
img.src = "./img/aaa.jpg";
container.appendChild(img);