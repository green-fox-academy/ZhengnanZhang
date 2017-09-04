const test = require('tape');
const Sharepie = require('./Sharpie.js');
test('count letter in string',function(t) {
  var sharepie1 = new Sharepie('red',7.8);
  t.equal('red',sharepie1.color);
  t.end();
});