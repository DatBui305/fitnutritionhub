const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require("crypto");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordChangedAt: {
      type: String,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: String,
    },
    dob: {
      type: Date,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
    },
    address: String,
    isBlocked: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
    avatar: {
      type: String,
      default:
        "https://st.quantrimang.com/photos/image/2021/02/04/Hinh-nen-Quoc-Ky-VN-6.jpg",
    },
    followers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    followings: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    certificates: [
      {
        type: String,
      },
    ],
    questions: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Question",
      },
    ],
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Post",
      },
    ],
    listfavorite: [
      {
        item: {
          type: mongoose.Types.ObjectId, // 'item' là một tham chiếu tới một document khác trong MongoDB, sử dụng ObjectId.
          required: true, // 'item' là bắt buộc phải có.
          refPath: "listfavorite.itemType", // 'refPath' là một tham chiếu động. Nó sẽ tham chiếu tới document trong một collection khác, dựa trên giá trị của 'itemType'.
        },
        itemType: {
          type: String, // 'itemType' là một chuỗi.
          required: true, // 'itemType' là bắt buộc phải có.
          enum: ["Post", "Question"], // 'itemType' chỉ có thể là 'Post' hoặc 'Question', giới hạn bởi enum.
        },
      },
    ],
    isBlocked: {
      type: Boolean,
      default: false,
    },
    // questions
    // listfavorite
    // posts
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods = {
  isCorrectPassword: async function (password) {
    return await bcrypt.compare(password, this.password);
  },
  createPasswordChangedToken: function () {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    this.passwordResetExpires = Date.now() + 15 * 60 * 1000;
    return resetToken;
  },
};

//Export the model
module.exports = mongoose.model("User", userSchema);
