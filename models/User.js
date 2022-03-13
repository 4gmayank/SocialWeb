/** @format */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// gravatar... atachah profile Image to email. You may have one without relizing.
// Always accessible in user model

module.exports = User = mongoose.model('user', UserSchema);
// for clean response we use express validator
