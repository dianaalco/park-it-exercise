'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  forename: {
    type: String,
    Required: 'Name of user'
  },
  surname: {
    type: String,
    Required: 'Surname of user'
  },
  email: {
    type: String,
    Required: 'User email'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Users', UserSchema);
