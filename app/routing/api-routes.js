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

        console.log(newFriendData);
        console.log(newFriendName);
        console.log(newFriendPhoto);
        console.log(newFriendAnswers);

        var difference = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);

            for (var j = 0; j < friends.length[i].answers[j]; j++) {
                // Math.abs()  -absolte value of x
            difference += Math.abs(parseInt(newFriendAnswers[j]) - parseInt(friends[i].answers[j]));

            //close j for loop

            if (difference < closestMatch.match_diff){
                closestMatch.name = friends[i].name;
                closestMatch.photo = friends[i].photo;
                closestMatch.match_diff = difference;
            } //close if
        }//close j for loop
    }//close i loop

        friends.push(newFriendData);
        console.log(friends);
        res.json(closestMatch)

    });

};

