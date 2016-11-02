// ===============================================================
// LOAD DATA
// HERE we are linkinr routes to our data.
// These data hold the information on friends.
// ===============================================================

var friends = require('../data/friends.js');

// ===============================================================
// ROUTING
// ===============================================================

module.exports = function(app) {
    // API GET Requests
    // This code handles when users visit a page.
    //In each of the cases when the user visits the link, they are shown a JSON.

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });
    // API POST Requests
    // Below code handles when a user submits the survey (JSON)
    // this JSON is pushed to the appropriate JS array
    //When the survey is submitted the data is sent to the server... and the server saves it to the friendsList Array

    app.post('/api/friends', function(req, res) {
        friends.push(req.body);
        // res.json(true);
    });


};
