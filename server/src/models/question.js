const mongoose = require("mongoose");

var questionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    idAuthor: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      default: "draft",
      enum: ["draft", "published", "pending", "reject", "archieved"],
    },
    views: {
      type: Number,
      default: 0,
    },
    images: { type: String },
    comments: [
      {
        postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
        comment: { type: String },
        replies: [
          {
            postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
            comment: { type: String },
          },
        ],
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Question", questionSchema);
