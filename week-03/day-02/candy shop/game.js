var create = document.getElementsByClassName('create-candies')[0];
var buy = document.getElementsByClassName('buy-lollypops')[0];
var rain = document.getElementsByClassName('candy-machine')[0];
var candies = document.getElementsByClassName('candies')[0];
var lollypops = document.getElementsByClassName('lollypops')[0];
var speed = document.getElementsByClassName('speed')[0];

var all_candies = 90 ;
var all_lollypops = 20;
var all_speed;

create.addEventListener('click',function() {
  all_candies += 1;
  candies.innerText = all_candies;
})


buy.addEventListener('click',function() {
  if (all_candies>=100) {
  candies.innerText = all_candies - 100;
  all_candies -= 100;
  all_lollypops += 1;
  lollypops.innerText = '🍭'.repeat(all_lollypops);
  }
})

function auto_creat() {
  all_candies += parseInt((all_lollypops/10).toFixed(0));
  candies.innerText = all_candies;
  
  
}


setInterval(auto_creat,1000);