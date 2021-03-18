const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 4,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
