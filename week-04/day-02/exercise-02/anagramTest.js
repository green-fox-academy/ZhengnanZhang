const test = require('tape');
const ifAnagram = require('./anagram.js');
test('not have strings',function(t) {
  t.equal(false,ifAnagram('',''));
  t.end();
});
test('not have first string',function(t) {
  t.equal(false,ifAnagram('','abc'));
  t.end();
});
test('not have second string',function(t) {
  t.equal(false,ifAnagram('abc',''));
  t.end();
});
test('abc abc false',function(t) {
  t.equal(false,ifAnagram('abc','abc'));
  t.end();
});
test('abc bca',function(t) {
  t.equal(true,ifAnagram('abc','bca'));
  t.end();
});
test('abc cab',function(t) {
  t.equal(true,ifAnagram('abc','cab'));
  t.end();
});
test('aba abc',function(t) {
  t.equal(false,ifAnagram('aba','abc'));
  t.end();
});
test('three aaa false',function(t) {
  t.equal(false,ifAnagram('aaa','aaa'));
  t.end();
});
test('only a',function(t) {
  t.equal(false,ifAnagram('a','a'));
  t.end();
});
test('aabc baca',function(t) {
  t.equal(true,ifAnagram('aabc','baca'));
  t.end();
});
test('special signal false',function(t) {
  t.equal(false,ifAnagram('.\#*','\#a*'));
  t.end();
});
test('special signal true',function(t) {
  t.equal(true,ifAnagram('.\#*','\#.*'));
  t.end();
});
test('contian empty',function(t) {
  t.equal(true,ifAnagram(' **','* *'));
  t.end();
});







