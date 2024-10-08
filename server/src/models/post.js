const mongoose = require("mongoose");

var postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    idAuthor: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
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
    images: [
      {
        type: String,
      },
    ],
    comments: [
      {
        postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
        comment: { type: String },
        dateCreate: { type: Date, default: Date.now },
        replies: [
          {
            postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
            comment: { type: String },
            dateCreate: { type: Date, default: Date.now },
          },
        ],
      },
    ],
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
    recipes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Recipe",
      },
    ],
    excercises: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Excercise",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Post", postSchema);
