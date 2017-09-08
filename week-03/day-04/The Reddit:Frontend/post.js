window.addEventListener('load',postInfo);
var submit = document.getElementById('submit');
submit.addEventListener('click',postInfo);

// the function of post information
function postInfo() {
  var url = document.getElementById('url').value.trim();
  var title = document.getElementById('title').value.trim();
  if (url.length && title.length) {
    var request = {
      'href' : url,
      'title' : title
    };
    fetch('https://time-radish.glitch.me'+'/posts',{
      method:'post',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(request)
    }).then(function(response) {
       relocation(); 
    })
  }
}

// relocate to the main page
function relocation() {
  setTimeout(window.location.href="./main.html",1000);
}