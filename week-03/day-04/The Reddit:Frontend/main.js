window.addEventListener('load',init);
var url = 'https://time-radish.glitch.me/posts';
function init() {
  fetch(url).then(function(response) {
      // console.log(response.json());
     return response.json()
  }).then(function(data) {
    loadPage(data.posts);
  }) 
}

// generate the time 
function formatTime(seconds) {
  var theSecond = parseInt(seconds);
  var theMinute = 0;
  var theHour = 0;
  if (theSecond > 60) {
    theMinute = parseInt(theSecond / 60);
    theSecond = parseInt(theSecond % 60);
    if (theMinute > 60) {
      theHour = parseInt(theMinute / 60);
      theMinute = parseInt(theMinute % 60);
    }
  }
  var result = "" + parseInt(theSecond) + " seconds ";
  if (theMinute > 0) {
    result = "" + parseInt(theMinute) + " minutes " + result;
  }
  if (theHour > 0) {
    result = "" + parseInt(theHour) + " hours " + result;
  }
  return result;
}

//change the vote number using put
function changeVoteNum(id,state) {
  var state = "/"+state;
  fetch('https://time-radish.glitch.me'+'/posts/'+id+state,{
    method:'put',
    headers:{
      'Accept':'application/json',
    }
  }).then(function(response) {
  })
}

//delete posts
function deleteElement(id) {
  fetch('https://time-radish.glitch.me'+'/posts/'+id,{
    method:"delete",
    headers:{
      'Accept':'application/json',
    }
  }).then(function(response) {
    window.location.reload();
  })
}

//load the page
function loadPage (data) {
  var content = document.getElementById("content");
  for(let i = 0;i<data.length;i++) {
    console.log(data);
    sessionStorage.setItem(data[i].id,`${data[i].href} title:${data[i].title}`);
    var message_container = document.createElement('div');
    message_container.setAttribute('class','message_container');

//set the index
    var index = document.createElement('span');
    index.setAttribute('class','index');
    index.innerText =`${data[i].id}`;

// set the vote_container div    
    var vote_container = document.createElement('div');
    vote_container.setAttribute('class','vote_container');

// upvote img
    var upvote = document.createElement("img");
    upvote.src = "./img/upvote.png";
    upvote.setAttribute('class','upvote');

// change the vote number in my homepage
    upvote.addEventListener('click',function(event) {
      console.log(event);
      if (event.target.src === "file:///Users/yananzhang/Desktop/Zhengnan_Zhang_EPAM_JSA/week-03/day-04/The%20Reddit:Frontend/img/upvote.png") {
      event.target.src = "./img/upvoted.png";
      var number = event.path[1].children[1].innerText;
      event.path[1].children[1].innerText = parseInt(number)+1;
      }
      else {
        event.target.src = "./img/upvote.png";
        var number = event.path[1].children[1].innerText;
        event.path[1].children[1].innerText = parseInt(number)-1;
      }
    });

// change the vote number at the remote
    upvote.addEventListener('click',function(){changeVoteNum(`${data[i].id}`,"upvote")});

// vote number
    var vote_num = document.createElement('span');
    vote_num.setAttribute('class','vote_num');
    vote_num.innerText =`${data[i].score}`;

// downvote img
    var downvote = document.createElement("img");
    downvote.src = "./img/downvote.png";
    downvote.setAttribute('class','downvote');
    downvote.addEventListener('click',function(event) {
      if (event.target.src === "file:///Users/yananzhang/Desktop/Zhengnan_Zhang_EPAM_JSA/week-03/day-04/The%20Reddit:Frontend/img/downvote.png") {
      event.target.src = "./img/downvoted.png";
      var number = event.path[1].children[1].innerText;
      event.path[1].children[1].innerText = parseInt(number)-1;
      }
      else {
        event.target.src = "./img/downvote.png";
        var number = event.path[1].children[1].innerText;
        event.path[1].children[1].innerText = parseInt(number)+1;
      }
    });

// change the vote number at the remote
    downvote.addEventListener('click',function(){changeVoteNum(`${data[i].id}`,"downvote")});
    vote_container.appendChild(upvote);
    vote_container.appendChild(vote_num);
    vote_container.appendChild(downvote);  
    var title_container = document.createElement('div');
    title_container.setAttribute('class','title_container');

// the title
    var title = document.createElement('span');
    title.setAttribute('class','title');
    title.innerText = `${data[i].title}`;

// generate the submitted time
    var past_time = document.createElement('span');
    past_time.setAttribute('class','past_time');
    var submitTimeTxt = new Date().getTime() - data[i].timestamp;
    submitTimeTxt = formatTime(submitTimeTxt);
    past_time.innerText = `submitted ${submitTimeTxt} ago by ${data[i].owner||'anonymous'}`;

// modify <a> tag
    var modify = document.createElement('a');
    modify.setAttribute('class','modify');
    modify.setAttribute('href',`./modify.html?${data[i].id}`);
    modify.innerText="modify";
// remove <a> tag    
    var remove = document.createElement('a');
    remove.setAttribute('class','remove');
    remove.setAttribute('style','cursor:pointer');

// remove.setAttribute('href','');
    remove.addEventListener('click',function(){deleteElement(`${data[i].id}`)});
    remove.innerText='remove';

// title_container append all elements
    title_container.appendChild(title);
    title_container.appendChild(past_time);
    title_container.appendChild(modify);
    title_container.appendChild(remove);
// message_contianer append all elements
    message_container.appendChild(index);
    message_container.appendChild(vote_container);
    message_container.appendChild(title_container);
    content.appendChild(message_container);
  }
}