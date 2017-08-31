 var img = document.querySelector('img');


// img.setAttribute('src',"./img/aaa.jpg");
img.src = './img/aaa.jpg';
var a = document.querySelector("a");
a.href = "https://github.com/greenfox-academy/shenzhen-frontend-syllabus/tree/master/teaching-materials/javascript-datastructures-and-dom";
var b = document.getElementsByTagName("button");
b[1].disabled = true;
b[1].innerText = "Don't click me!";