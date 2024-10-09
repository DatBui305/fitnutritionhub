const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var excerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  force: {
    type: String,
    required: true,
    enum: ["push", "pull", "hold"],
  },
  level: {
    type: String,
    required: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
  mechanic: {
    type: String,
    default: null,
  },
  equipment: {
    type: String,
    default: null,
  },
  primaryMuscles: {
    type: [String],
    required: true,
  },
  secondaryMuscles: {
    type: [String],
  },
  instructions: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["stretching", "strength", "cardio", "flexibility", "balance"],
  },
});

//Export the model
module.exports = mongoose.model("Excercise", excerciseSchema);
