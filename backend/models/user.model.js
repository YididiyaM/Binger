const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
  },
});

module.exports = mongoose.model("User", user);
