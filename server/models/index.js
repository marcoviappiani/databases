var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (req, res, callback) {
      console.log('-[ MODEL ]-> GET to MESSAGES table');
      db.query("SELECT * from messages", [], callback); // FIX THIS
    }, 
    // a function which can be used to insert a message into the database
    post: function (username, roomname, message, callback) {
      console.log('-[ MODEL ]-> POST to MESSAGES table');

      var usernameId;
      db.query("SELECT id from users WHERE username = '" + username + "';", [], function(err, results){
        usernameId = results[0].id;

        var query = "INSERT into messages (username, text, roomname) VALUES (" + usernameId + ", '" + parseString(message) + "', '" + roomname + "');";
        db.query(query, [], callback);
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('-[ MODEL ]-> GET to USERS table');
      db.query("SELECT * from users", [], function(err, results){
        console.log("Get users results:", results);
      });      
    },
    post: function (username, callback) {
      console.log('-[ MODEL ]-> POST to USERS table');
      db.query("INSERT into users (username) VALUES ('" + username + "');", [], callback);
    }
  }
};

var parseString = function(string) {
  return string.split("'").join("''");
};