const test = require('tape');
const countLetterInString = require('./06-count-letters.js');
test('count letter in string',function(t) {
  t.equal(0,countLetterInString([1,2,3],'a'));
  t.end();
});