var models = require('../models');
var bluebird = require('bluebird');
// var utils = require('../utils');


module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res, callback) {
      console.log('-[ CONTROLLER ]-> GET to MESSAGES table');
      models.messages.get(req, res, callback);
    }, 
    // a function which handles posting a message to the database
    post: function (req, res, callback) {
      console.log('-[ CONTROLLER ]-> POST to MESSAGES table');

      var username = req.body.username;
      var roomname = req.body.roomname;
      var message = req.body.message;

      models.messages.post(username, roomname, message, callback);
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('-[ CONTROLLER ]-> GET to USERS table');
      models.users.get(req, res);
    },
    post: function (req, res, callback) {
      console.log('-[ CONTROLLER ]-> POST to USERS table');
      console.log('params:', req.params);

      models.users.post(req.body.username, callback);
    }
  }
};

