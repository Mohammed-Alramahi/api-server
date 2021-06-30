const mongoose = require("mongoose");
const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});
const foodModel = mongoose.model("food", foodSchema);
module.exports = foodModel;
