var button = document.getElementsByTagName('button')[0];
var text = document.getElementsByTagName('span')[0];
function show() {

var count = 0;
button.addEventListener('click',clickThreeTimes);
function clickThreeTimes() {
  count += 1;
  if (count === 3) {
    text.style.display = 'block';
  }
}
}
setTimeout(show,5*1000);