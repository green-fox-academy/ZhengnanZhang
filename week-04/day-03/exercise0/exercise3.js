
'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  var collection = db.collection('students');
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  collection.find({}).toArray(function(err, docs) {
    console.dir(docs);
  });

 
    
  db.close();
    
    
  });
