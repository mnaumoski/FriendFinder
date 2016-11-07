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

    app.get('/api/friendsList', function(req, res) {
        res.json(friends);
    });


    // =============================================
    // API POST Requests
    // Below code handles when a user submits the survey (JSON)
    // this JSON is pushed to the appropriate JS array
    //When the survey is submitted the data is sent to the server... and the server saves it to the friendsList Array

    app.post('/api/friend', function(req, res) {
        
        var closestMatch ={
            name: "",
            photo: '',
            match_diff: 0
        }

        var newFriendData = req.body;
        var newFriendName = newFriendData.name;
        var newFriendPhoto = newFriendData.photo;
        var newFriendAnswers = newFriendData.answers;

        console.log(newFriendName + newFriendAnswers);

        var difference = 0;

        for (var i = 0; i < friends.length; i++) {

            for (var j = 0; j < fr; j++) {
                // Math.abs()  -absolte value of x
            difference += Math.abs(parseInt(newFriendData.answers[j]) - parseInt(friends[j]));

            }
            if (difference , closestMatch)
        }
        friends.push(req.body);
        var 

    });

};
