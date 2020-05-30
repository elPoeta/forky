const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  alias: {
    type: String,
    unique: true,
    minlength: 3,
    maxlength: 25,
    lowercase: true,
    required: [true, 'Please add a nick name']
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  bio: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },
  social: {
    linkedin: {
      type: String
    },
    twitter: {
      type: String
    },
    youtube: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Profile", ProfileSchema);