var asteroidsList = document.querySelector("ul.asteroids");
var re = document.querySelector('li');
asteroidsList.removeChild(re);
var planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]
for (var i = 0; i<planetData.length;i++) {
  if (planetData[i].asteroid === true) {
    var as = document.createElement('li');
    as.textContent = planetData[i].content;
    as.classList.add(planetData[i].category);
    asteroidsList.appendChild(as);
  }
}