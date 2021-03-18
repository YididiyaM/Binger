const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
