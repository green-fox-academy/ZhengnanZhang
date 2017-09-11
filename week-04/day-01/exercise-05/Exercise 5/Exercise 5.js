var boder = document.getElementsByClassName("boder")[0];
var hover = document.getElementsByClassName("hover")[0];
boder.addEventListener("mouseover", function(event) {
  event.target.style.transform = 'rotate(-0deg)';
  event.target.style.transitionDuration="2s";
  
  hover.style.color = 'red';
})
boder.addEventListener("mouseout", function(event) {
  event.target.style.transform = 'rotate(-45deg)';
  event.target.style.transitionDuration="2s";
  
  hover.style.color = 'black';
  
})

