var models = require('../models');
var bluebird = require('bluebird');
var utils = require('../utils');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('-[ CONTROLLER ]-> GET to MESSAGES table');
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('-[ CONTROLLER ]-> POST to MESSAGES table');
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('-[ CONTROLLER ]-> GET to USERS table');
      models.users.get(req, res);
    },
    post: function (req, res) {
      console.log('-[ CONTROLLER ]-> POST to USERS table');
      models.users.post( req.body.username );
    }
  }
};

