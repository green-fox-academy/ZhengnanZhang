'use strict';
var xhr = new XMLHttpRequest();
//define the API key at the top
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    var slideIndex = 1;
    var pic = JSON.parse(xhr.responseText);
    console.log(pic);
    display(pic);
  }
}


function display(pic) {
  //do not use ID
  var picture = document.getElementById("thumbnail");
  var pic1 = document.getElementById("pic");

  for (let i = 0; i < pic.data.length; i++) {
    var image = document.createElement("img");
    image.src = pic.data[i].images.downsized_still.url;
    image.setAttribute('data-original-url', '');
    image.setAttribute('data-still-url', '');
    image.addEventListener("click", function (event) {
      if (pic1.src === pic.data[i].images.original.url) {
        pic1.src = pic.data[i].images.downsized_still.url;
      } else {
        pic1.src = pic.data[i].images.original.url;
      }
    })


    image.addEventListener("mouseover", function (event) {
      event.target.src = pic.data[i].images.original.url;
    });
    image.addEventListener("mouseout", function (event) {
      event.target.src = pic.data[i].images.downsized_still.url;
    });
    picture.appendChild(image);
  }
}
xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=6cd6ac2260df4c28af1ba8bbdff84c77", true);
xhr.send();