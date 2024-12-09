import mongoose from 'mongoose';

const UserDataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

const UserData = mongoose.model('UserData', UserDataSchema);

export default UserData;
