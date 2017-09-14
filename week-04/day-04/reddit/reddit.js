'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var id = 75;
var jsonParser = bodyParser.json();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/reddit';

app.use(express.static('public'));


MongoClient.connect(url, function (err, db) {
  var collection = db.collection('students');
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  };
  console.log('Connection established to ' + url);
  // collection.insertMany(initialInfo, function(err, result) {
  //   console.log("Inserted students into the document collection");
  // });
  db.close();
});

app.get('/hello', function(req, res){
  res.send('hello world');
});

//lists all the posts


app.get('/posts',function(req,res){
  var obj = {
    posts:[]
  };
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    };
    collection.find({}, {_id:0}).toArray(function(err, docs) {
      console.dir(docs);
      obj.posts = docs;
      res.send(JSON.stringify(obj));
    });
    db.close();
  });
});

//function of post new 
app.post('/posts',jsonParser,function(req,res) {
  var title = req.body.title;
  var href = req.body.href;
  var tempID = 0;
  if (title === undefined || href === undefined) {
    res.send({
      "error":"Please provide what to do with the numbers!"
    });
  };
 
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    };
     
     collection.find({},{id:1}).sort({id:-1}).toArray(function(err,docs) {
      tempID = parseInt(docs[0]["id"]) +1;
     
     var obj = {
      "id":tempID,
      "title":title,
      "href":href,
      "timestamp":new Date().getTime(),
      "score":0
    };
    collection.insert(obj, function(err, result) {
      console.log("Inserted students into the document collection");
      res.send(JSON.stringify(obj));
      db.close();
      });
  });
   });
});


app.put('/posts/:id/upvote',jsonParser,function(req,res) {
  var tempId = parseInt(req.params.id);
  MongoClient.connect(url,function(err,db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);      
    };
    collection.find({id:tempId}).toArray(function(err,docs) {
      var updataScore = ++docs[0]["score"];
      collection.update({id:tempId},{$set:{score:updataScore}})
      res.send(JSON.stringify(docs[0]));
      db.close();
    })
    
  })
});

app.put('/posts/:id/downvote',jsonParser,function(req,res) {
  var tempId = parseInt(req.params.id);
  MongoClient.connect(url,function(err,db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);      
    };
    collection.find({id:tempId}).toArray(function(err,docs) {
      var downdataScore = --docs[0]["score"];
      collection.update({id:tempId},{$set:{score:downdataScore}})
      res.send(JSON.stringify(docs[0]));
      db.close();
    })
  })
});

app.put('/posts/:id',jsonParser,function(req,res) {
  var changeId = parseInt(req.params.id);
  var modifyTitle = req.body.title;
  var modifyHref = req.body.href;
  var tempID = 0;
  if (modifyTitle === undefined || modifyHref === undefined) {
    res.send({
      "error":"Please provide what to do with the numbers!"
    });
  };
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('students');
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    };
    collection.update({id:changeId},{$set:{'title':modifyTitle,'href':modifyHref}});
    console.log("Update students into the document collection");
    collection.find({id:changeId}).toArray(function(err,docs){
    res.send(JSON.stringify(docs[0]));
    db.close();
    })
      });
  });

  

  app.delete('/posts/:id',jsonParser,function(req,res) {
    var deleteId = parseInt(req.params.id);
    
    MongoClient.connect(url, function (err, db) {
      var collection = db.collection('students');
      if (err) {
        console.log('Unable to connect to the MongoDB server. Error:', err);
      };
      
      collection.find({id:deleteId}).toArray(function(err,docs){
        collection.deleteOne({id:deleteId},function(err,result) {
          res.send(JSON.stringify(docs[0]));
          db.close();
        });
      })
        });
    });


app.listen(8080);