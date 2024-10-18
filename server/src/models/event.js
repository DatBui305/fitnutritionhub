const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var eventSchema = new mongoose.Schema(
  {
    userCreate: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    timeStart: {
      type: Date,
    },
    timeEnd: {
      type: Date,
    },
    description: {
      type: String,
    },
    title: {
      type: String,
    },
    participants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Event", eventSchema);
