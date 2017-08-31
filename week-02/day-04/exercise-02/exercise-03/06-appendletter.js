'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];
far.forEach (function(e,index,array) {
  array[index] = e + 'e';
  });
console.log(far);