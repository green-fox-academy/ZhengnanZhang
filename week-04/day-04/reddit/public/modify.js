var id = window.location.search;    //Return: example  ?48
id = id.substring(1);
var h2 = document.getElementsByClassName('number')[0];
h2.innerText += " #"+id;
var data = sessionStorage.getItem(id);

// get info of url and title from the sessionStorage
var url = data.split("title:")[0];
var title = data.split("title:")[1];

//fill in the content in url and title
var url_content = document.getElementById('url');
var title_content = document.getElementById('title');
url_content.value = url;
title_content.innerText = title;
var submit = document.getElementById('submit');
submit.addEventListener('click',modifyInfo);

//achieve modify function
function modifyInfo() {
  var url = document.getElementById('url').value.trim();
  var title = document.getElementById('title').value.trim();
  if (url.length && title.length) {
    var request = {
      'href' : url,
      'title' : title
    };
    fetch('http://localhost:8080'+'/posts/'+id,{
      method:'put',
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
