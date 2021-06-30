const mongoose = require("mongoose");
const clothSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});
const clothModel = mongoose.model("clothes", clothSchema);
module.exports = clothModel;
