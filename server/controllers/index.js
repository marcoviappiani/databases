var models = require('../models');
var bluebird = require('bluebird');
// var utils = require('../utils');


module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('-[ CNTRL ]-> GET to MESSAGES table');
      models.messages.get(req, res, function(err, results){
        if (err) throw err;
        res.send(JSON.stringify(results));
      });
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('-[ CNTRL ]-> POST to MESSAGES table');

      var username = req.body.username;
      var roomname = req.body.roomname;
      var message = req.body.message;

      models.messages.post(username, roomname, message, function(err, results){
        if (err) throw err;
        res.send();
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('-[ CNTRL ]-> GET to USERS table');
      models.users.get(req, res, function(err, results){
        if (err) throw err;
        res.send(JSON.stringify(results));
      });
    },
    post: function (req, res, callback) {
      console.log('-[ CNTRL ]-> POST to USERS table');
      console.log('params:', req.params);

      models.users.post(req.body.username, callback);
    }
  }
};

