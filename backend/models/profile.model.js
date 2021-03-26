const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  user: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
