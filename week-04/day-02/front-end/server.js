var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
app.use('/assets',express.static('assets'));
app.get('/', function(req, res){
  res.sendFile(__dirname+'/index.html');
})
app.get('/doubling', function (req, res) {
  
  if(req.query.input === undefined) {
    res.send( {
      "error": "Please provide an input!"
    });
  }else {
  var input = parseInt(req.query.input,10);
  // var obj = {
  //   "received": input,
  //   "result": input*2
  // };
  res.send({
    "received": input,
    "result": input*2
  });
}
  });

app.get('/greeter',function(req,res) {
  if(req.query.name === undefined) {
    res.send({
      "error":"Please provide a name!"
    })}
    else {
  var name = req.query.name;
  var title = req.query.title;
  res.send({
    "welcome_message":"Oh, hi there"+name+', my dear '+title+"!"
  })
}  
  }
)
app.get('/appenda/:appendable',function(req,res) {
    
      res.send(req.params.appendable+'s');
    
});
app.post('/arrays',jsonParser,function(req,res) {
  var what = req.body.what;
  var numbers = req.body.numbers;
  var result;
  if (what === undefined || numbers === undefined) {
    res.send({
      "error":"Please provide what to do with the numbers!"
    })
  }
  if (what === "sum") {
    var sum = 0;
    numbers.forEach(function(element) {
      sum += element;
    })
    result = sum;
  }
  if (what === "multiply") {
    var multi = 1;
    numbers.forEach(function(element) {
      multi *= element;
    })
    result = multi;
  }
  var numberNew;
  if (what === "double") {
    numberNew = numbers.map(function(element) {
      return element*2;
    })
    result = numberNew;
  }
  var obj = {
    "result":result
  }
  res.send(obj);
})
app.post('/dountil/:what',jsonParser,function(req,res) {
  var number = req.body.until;
  var operator = req.params.what;
  if (number===undefined) {
    res.send({
      "error":"Please provide a number!"
    })
  }
  else if (operator ==='sum') {
    var sum = 0;
    for (var i =0;i<number+1;i++) {
      sum += i;
    } 
    
  }
  else if (operator === 'factor') {
    var factor = 1;
    for (var i =1;i<number+1;i++ ) {
      factor *= i;
    }
    res.send({
      "result":factor
    });
  }
})

console.log('listening port:8080 now');
app.listen(8080);