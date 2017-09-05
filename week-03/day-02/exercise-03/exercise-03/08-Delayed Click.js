var button = document.getElementsByTagName('button')[0];
var text = document.getElementsByTagName('span')[0];
button.addEventListener('click',toggleText);
function toggleText() {
  if (text.style.display !== 'block') {
    setTimeout(function() {
      text.style.display = 'block';
    },2*1000)
  } else {
    setTimeout(function() {
      text.style.display = 'none';
    },2*1000)
  }
}