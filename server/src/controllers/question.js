const Question = require("../models/question");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");

const createQuestion = asyncHandler(async (req, res) => {
  const { title, content, tags } = req.body;
  const { _id } = req.user;
  console.log(title, content, _id);
  if (!_id || !title || !content) throw new Error("missing input");
  const slug = slugify(req.body.title);
  const response = await Question.create({
    title,
    content,
    slug,
    tags,
    idAuthor: _id,
  });

  if (response) {
    // Update the user to add the post ID to the posts array
    await User.findByIdAndUpdate(
      _id,
      { $push: { questions: response._id } },
      { new: true }
    );
  }
  return res.json({
    success: response ? true : false,
    createQuestion: response ? response : "cannot create new post",
  });
});

const updateQuestion = asyncHandler(async (req, res) => {
  const { qid } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("missing input");
  const response = await Question.findByIdAndUpdate(qid, req.body, {
    new: true,
  });
  return res.json({
    success: response ? true : false,
    updateQuestion: response ? response : "cannot update new Post",
  });
});

const getQuestions = asyncHandler(async (req, res) => {
  const response = await Question.find();
  return res.json({
    success: response ? true : false,
    questions: response ? response : "cannot get Posts",
  });
});

const getQuestion = asyncHandler(async (req, res) => {
  const { qid } = req.params;
  const response = await Question.findByIdAndUpdate(
    qid,
    { $inc: { numberViews: 1 } },
    { new: true }
  );
  return res.json({
    success: response ? true : false,
    rs: response,
  });
});

const deleteQuestion = asyncHandler(async (req, res) => {
  const { qid } = req.params;
  const { _id } = req.user;
  const question = await Question.findById(qid);
  if (!question) throw new Error("Post not found");
  const response = await Question.findByIdAndDelete(qid);

  if (response) {
    // Update the user to remove the post ID from the posts array
    await User.findByIdAndUpdate(
      _id,
      { $pull: { questions: pid } },
      { new: true }
    );
  }
  return res.json({
    success: response ? true : false,
    deletedQuestion: response ? response : "cannot delete post",
  });
});

// const uploadImagePost = asyncHandler(async(req, res) => {
//   const {pid} = req.params
//   if (!req.file) throw new Error('Missing input')
//   const response = await Blog.findByIdAndUpdate(pid, {image: req.file.path}, {new: true})
//   return res.json({
//       status:response ? true : false,
//       updatedBlog: response ? response : 'cannot upload image for blog'
//   })
// })
const commentQuestion = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { qid } = req.params;
  const { comment } = req.body;
  if (!qid || !comment) throw new Error("Missing inputs");
  const question = await Question.findById(qid);
  if (!question) throw new Error("Question not found!");

  if (comment.trim().length === 0 || comment.length > 500) {
    return res
      .status(400)
      .json({ success: false, message: "Comment cannot be empty or too long" });
  }
  const response = await Question.findByIdAndUpdate(
    qid,
    { $push: { comments: { postedBy: _id, comment: comment } } },
    { new: true }
  );

  return res.json({
    success: response ? true : false,
    rs: response,
  });
});

const repliesQuestion = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { qid, cid } = req.params;
  const { comment } = req.body;

  if (!qid || !cid || !_id || !comment) throw new Error("Missing in put");

  const question = await Question.findById(pid);
  if (!question) throw new Error("Question not found");

  if (comment.trim().length === 0 || comment.length > 500) {
    return res
      .status(400)
      .json({ success: false, message: "Comment cannot be empty or too long" });
  }
  // Find the comment
  const commentIndex = question.comments.findIndex(
    (c) => c._id.toString() === cid
  );
  if (commentIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Comment not found" });
  }

  // Add the reply to the comment
  question.comments[commentIndex].replies.push({
    postedBy: _id,
    comment: comment,
  });

  // Save the post
  const updatedQuestion = await question.save();

  return res.status(200).json({
    success: true,
    message: "Reply added successfully",
    question: updateQuestion,
  });
});

const deleteComment = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { cid, qid } = req.params;

  if (!qid || !cid || !_id) throw new Error("Missing in put");

  const question = await Question.findById(pid);
  // Find the comment
  const commentIndex = question.comments.findIndex(
    (c) => c._id.toString() === cid
  );
  if (commentIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Comment not found" });
  }

  // Add the reply to the comment
  if (_id.toString() !== question.comments[commentIndex].postedBy.toString())
    throw new Error("You can not delete comment of another user");

  // Remove the comment
  question.comments.splice(commentIndex, 1);

  // Save the post
  const deletedQuestion = await question.save();
  return res.status(200).json({
    success: true,
    message: "Comment deleted successfully",
    question: deletedQuestion,
  });
});

const deleteReplies = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { qid, cid, rid } = req.params;
  if (!qid || !cid || !_id || !rid) throw new Error("Missing in put");

  const question = await Question.findById(pid);
  if (!question) throw new Error("Question not found");
  // Find the comment
  const commentIndex = question.comments.findIndex(
    (c) => c._id.toString() === cid
  );
  if (commentIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Comment not found" });
  }
  const replyIndex = question.comments[commentIndex].replies.findIndex(
    (c) => c._id.toString() === rid
  );
  if (replyIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Replies not found" });
  }

  // Add the reply to the comment
  if (
    _id.toString() !==
    question.comments[commentIndex].replies[replyIndex].postedBy.toString()
  )
    throw new Error("You can not delete comment of another user");

  // Remove the comment
  question.comments[commentIndex].replies.splice(replyIndex, 1);

  // Save the post
  const deletedQuestion = await post.save();
  return res.status(200).json({
    success: true,
    message: "Comment deleted successfully",
    question: deletedQuestion,
  });
});

const updateComment = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { qid, cid } = req.params;
  const { comment } = req.body;
  if (!qid || !cid || !comment || !_id) throw new Error("Missing input");
  if (comment.trim().length === 0 || comment.length > 500) {
    return res
      .status(400)
      .json({ success: false, message: "Comment cannot be empty or too long" });
  }
  const question = await Question.findById(qid);
  if (!question) throw new Error("Post not found");
  // Find the comment
  const commentIndex = question.comments.findIndex(
    (c) => c._id.toString() === cid
  );
  if (commentIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Comment not found" });
  }

  // Check if the user is the owner of the comment
  if (_id.toString() !== question.comments[commentIndex].postedBy.toString()) {
    return res.status(403).json({
      success: false,
      message: "You cannot update another user's comment",
    });
  }

  // Update the comment
  question.comments[commentIndex].comment = comment;

  // Save the post
  const updatedQuestion = await question.save();

  return res.status(200).json({
    success: true,
    message: "Comment updated successfully",
    question: updateQuestion,
  });
});

const updateReply = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { qid, cid, rid } = req.params;
  const { comment } = req.body;

  // Validate inputs
  if (!qid || !cid || !rid || !_id || !comment)
    return res.status(400).json({ success: false, message: "Missing input" });

  if (comment.trim().length === 0 || comment.length > 500)
    throw new Error("Comment cannot be empty or too long");

  // Find the post by id
  const question = await Question.findById(pid);
  if (!question) throw new Error("Post not found");

  // Find the comment within the post
  const commentIndex = question.comments.findIndex(
    (c) => c._id.toString() === cid
  );
  if (commentIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: "Comment not found" });
  }

  const commentObj = question.comments[commentIndex];

  // Find the reply within the comment
  const replyIndex = commentObj.replies.findIndex(
    (r) => r._id.toString() === rid
  );
  if (replyIndex === -1) {
    return res.status(404).json({ success: false, message: "Reply not found" });
  }

  const replyObj = commentObj.replies[replyIndex];

  // Check if the user is the owner of the reply
  if (_id.toString() !== replyObj.postedBy.toString()) {
    return res.status(403).json({
      success: false,
      message: "You cannot update another user's reply",
    });
  }

  // Update the reply
  replyObj.comment = comment;

  // Save the updated post
  const updatedQuestion = await post.save();

  return res.status(200).json({
    success: true,
    message: "Reply updated successfully",
    question: updatedQuestion,
  });
});

const addQuestionInFavorites = asyncHandler(async (req, res) => {
  const { qid } = req.params;
  const { _id } = req.user;
  if (!_id || !qid) throw new Error("missing input");
  // Tạo đối tượng mới để thêm vào listfavorite
  const newFavorite = {
    item: qid, // item là qid (ID của caau hoi)
    itemType: "Question", // Xác định loại là 'Question'
  };

  // Tìm user theo _id và đẩy mục yêu thích mới vào mảng listfavorite
  const response = await User.findByIdAndUpdate(
    _id,
    { $push: { listfavorite: newFavorite } }, // Sử dụng $push để thêm mục yêu thích
    { new: true } // Trả về document mới sau khi cập nhật
  );

  return res.json({
    success: response ? true : false,
    createQuestion: response ? response : "cannot add to favorites",
  });
});

//check create post
//check delete post
//check addpostInFavorite
module.exports = {
  createQuestion,
  updateQuestion,
  getQuestion,
  getQuestions,
  deleteQuestion,
  commentQuestion,
  repliesQuestion,
  deleteComment,
  deleteReplies,
  updateComment,
  updateReply,
  addQuestionInFavorites,
};
