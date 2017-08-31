var h1 = document.getElementsByTagName("h1");
alert(h1[0].innerText);

var par = document.getElementsByTagName("p");
console.log(par[0].innerText);

alert(par[1].innerText);

h1[0].innerText = "New content";

par[2].innerText = par[0].innerText;