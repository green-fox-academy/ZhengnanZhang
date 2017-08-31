var par = document.getElementsByTagName("p");
var content = "";
for (var i = 0; i<par.length;i++) {
  par[i].innerText += content;
  content = par[i].innerText;
};