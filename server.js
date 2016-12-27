// ============================================================
// DEPENDENCIES
// Series of npm packages used to improve server functionality
// ============================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// ===============================================================
// EXPRESS CONFIG
// Seting up basic server properties
// ===============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// ===============================================================
// Standard code for bodyParser
// ===============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static(path.join(__dirname, '/public')));


// ===============================================================
// Router
//The below points our server to a series of "route" files
//The route files give the server a map of how to respons when users visit or request data from different URLs.
// ===============================================================

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// ===============================================================
// Listener: starting the server
// ===============================================================

app.listen(PORT, function(){
      console.log("App listening on port: " + PORT)
});