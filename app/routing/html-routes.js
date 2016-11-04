// ===============================================
// Include 'path' to ge the correct path for html
// ===============================================

var path = require('path');

// ===============================================
// ROUTING

module.exports = function (app) {
  // HTML GET requests
  // When users visit a page - show HTML page of content

  app.get('/survey.html', function(req, res){
      res.sendFile(path.join(__dirname + '/../public/survey.html'))
  });

  app.get('/', function(req, res){
      res.sendFile(path.join(__dirname + '/../public/home.html'))
  });

  app.get('/friends', function(req, res){
        res.sendFile(path.join(__dirname + '/../data/friends.js'));
        // res.json()
  });

  

  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../public/home.html'))
  })
}