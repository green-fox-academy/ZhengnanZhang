function updateVideoInfo(videoInfos, videoId, callback) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return callback(undefined);
    }
    let videosDB = db.collection('videos');

    videosDB.update({'_id': ObjectId(videoId)}, {'$set': videoInfos}, (err, result) => {
      if (err) {
        console.log(err);
        return callback('Upadate Failed');
      }
      db.close();
      return callback('success');
    });
  });
}

function insertVideoToDatabase(userInfo, videoInfos, token, callback) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log(err.name + ':' + err.message);
      return callback(undefined);
    }
    let videosDB = db.collection('videos');
    let uploadVideoInfos = {
      'videoUrl': videoInfos.videoUrl,
      'videoDetails': {
        'title': videoInfos.videoTitle,
        'views': 0,
        'LikeStatus': [],
        'publishDate': Date.now(),
        'time': '5:00',
        'preview': videoInfos.preview,
      },
      'uploader': {
        'name': userInfo.username,
        'userId': userInfo._id,
        'avatar': userInfo.avatar,
        'subscribers': userInfo.subscribers,
      },
      'commentInfos': [],
    };

    videosDB.insertOne(uploadVideoInfos, (err, result) => {
      if (err) {
        return callback(undefined);
      }
      return callback(result.ops[0]._id.toString());
    });
  });
}
