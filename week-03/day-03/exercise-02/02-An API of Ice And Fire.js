var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var responseHeader = xhr.getResponseHeader("link");
    var arr = responseHeader.match(/https:\/\/\w+(.\w+)+/g);
    var characters = JSON.parse(xhr.responseText);
    console.log(characters);
    nextHef = arr[0];
    firstHef = arr[1];
    lastHef = arr[2];
    if(arr.length === 4) {
      lastHef = arr[3];
    }
    var characters_container = document.getElementsByClassName("character_container")[0];
    for (let i = 0;i< 10;i++) {
      var character = document.createElement("p");
      character.innerText = characters[i].aliases[0];
      characters_container.appendChild(character);
    }
    
  }
}
var next = document.getElementsByClassName("next")[0];

next.addEventListener("click",function() {
  var characters_container = document.getElementsByClassName("character_container")[0];
  characters_container.innerHTML = "";
  xhr.open("GET",nextHef);
  xhr.send();
});

xhr.open("GET", "https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10", true);
xhr.send();