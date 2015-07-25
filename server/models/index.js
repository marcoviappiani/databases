var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('-[ MODEL ]-> GET to MESSAGES table');
      db.query("SELECT * from messages", [], function(err, results){
        console.log(results);
      });   
    }, // a function which produces all the messages
    post: function () {
      console.log('-[ MODEL ]-> POST to MESSAGES table');
      db.query("INSERT into messages (username, text, roomname) VALUES (13, 'hello', 10)", [], function(err, results){
        console.log(results);
      });   
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('-[ MODEL ]-> GET to USERS table');
      db.query("SELECT * from users", [], function(err, results){
        console.log(results);
      });      
    },
    post: function (username, callback) {
      console.log('-[ MODEL ]-> POST to USERS table');
      db.query("INSERT into users (username) VALUES ('" + username + "')", [], callback);
    }
  }
};

