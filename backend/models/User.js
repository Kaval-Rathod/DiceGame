const mongoose = require('mongoose');

const UserDataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  score: {
    type: Number,
    required: true
  }
});

const UserData = mongoose.model('UserData', UserDataSchema);

module.exports = UserData;
