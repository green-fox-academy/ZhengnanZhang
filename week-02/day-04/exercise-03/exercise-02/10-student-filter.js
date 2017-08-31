'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function people(students) {
  students.forEach(function(element) {
    if (element.candies>4) {
    console.log(element.name);
    }
  });
}
people(students);
// create a function that takes a list of students and logs: 
//  - how many candies they have on average
function average(students) {
  var total = students.length;
  var sum = 0;
  students.forEach(function(element) {
    sum += element.candies;
    });
  return sum/total;
  };

console.log(average(students));