var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (req, res, callback) {
      console.log('-[ MODEL ]-> GET to MESSAGES table');

      var query = "SELECT messages.objectID, messages.roomname, messages.text, users.username, messages.createdAt FROM messages INNER JOIN users ON messages.username = users.objectId;"
      db.query(query, [], function(err, results){
        callback(err, results);
      });
    }, 
    // a function which can be used to insert a message into the database
    post: function (username, roomname, message, callback) {
      console.log('-[ MODEL ]-> POST to MESSAGES table');

      module.exports.users.get(username, function(err, results) {
        usernameId = results[0].objectId;
        var query = "INSERT into messages (username, text, roomname) VALUES (" + usernameId + ", '" + parseString(message) + "', '" + roomname + "');";
        db.query(query, [], callback);
      });

    } 
  },

  users: {
    // Ditto as above.
    get: function (username, callback) {
      console.log('-[ MODEL ]-> GET to USERS table');
      db.query("SELECT objectId from users WHERE username = '" + username + "';", [], callback);  
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