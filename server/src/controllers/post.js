const Post = require("../models/post");
const asyncHandler = require("express-async-handler");

const createPost = asyncHandler(async (req, res) => {
  const { title, content, state } = req.body;
  console.log(title, content);
  if (!title || !content) throw new Error("missing input");
  const response = await Post.create({ title, content });
  return res.json({
    success: response ? true : false,
    createPost: response ? response : "cannot create new post",
  });
});

const updatePost = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  if (Object.keys(req.body).length === 0) throw new Error("missing input");
  const response = await Post.findByIdAndUpdate(pid, req.body, { new: true });
  return res.json({
    success: response ? true : false,
    updatePost: response ? response : "cannot update new Post",
  });
});

const getPosts = asyncHandler(async (req, res) => {
  const response = await Post.find();
  return res.json({
    success: response ? true : false,
    posts: response ? response : "cannot get Posts",
  });
});

/**
 *
 * khi nguoi dung lai mot bai blog thi phai
 * 1. check xem nguoi do co dislike hay khong => bo diskike
 * 2. chekc truoc do co like hay ko => bo like
 *
 */
const likePost = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { pid } = req.params;
  if (!pid) throw new Error("Missing inputs");
  const post = await Post.findById(pid);
  const alreadyDisliked = post?.dislikes?.find((el) => el.toString() === _id);
  if (alreadyDisliked) {
    const response = await Post.findByIdAndUpdate(
      pid,
      { $pull: { dislikes: _id } },
      { new: true }
    );
    return res.json({
      success: response ? true : false,
      rs: response,
    });
  }
  const isLiked = post?.likes?.find((el) => el.toString() === _id);
  if (isLiked) {
    const response = await Post.findByIdAndUpdate(
      pid,
      { $pull: { likes: _id } },
      { new: true }
    );
    return res.json({
      success: response ? true : false,
      rs: response,
    });
  } else {
    const response = await Post.findByIdAndUpdate(
      pid,
      { $push: { likes: _id } },
      { new: true }
    );
    return res.json({
      success: response ? true : false,
      rs: response,
    });
  }
});

const dislikePost = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { pid } = req.params;
  if (!pid) throw new Error("Missing inputs");
  const post = await Post.findById(pid);
  const alreadyLiked = post?.likes?.find((el) => el.toString() === _id);
  if (alreadyLiked) {
    const response = await Post.findByIdAndUpdate(
      pid,
      { $pull: { likes: _id } },
      { new: true }
    );
    return res.json({
      success: response ? true : false,
      rs: response,
    });
  }
  const isDisliked = post?.dislikes?.find((el) => el.toString() === _id);
  if (isDisliked) {
    const response = await Post.findByIdAndUpdate(
      pid,
      { $pull: { dislikes: _id } },
      { new: true }
    );
    return res.json({
      success: response ? true : false,
      rs: response,
    });
  } else {
    const response = await Post.findByIdAndUpdate(
      pid,
      { $push: { dislikes: _id } },
      { new: true }
    );
    return res.json({
      success: response ? true : false,
      rs: response,
    });
  }
});

// const excludedFields = '-firstname -lastname'
const getPost = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  const post = await Post.findByIdAndUpdate(
    pid,
    { $inc: { numberViews: 1 } },
    { new: true }
  )
    .populate("likes", "firstname lastname")
    .populate("dislikes", "firstname lastname");
  return res.json({
    success: post ? true : false,
    rs: post,
  });
});

const deletePost = asyncHandler(async (req, res) => {
  const { pid } = req.params;
  const post = await Post.findByIdAndDelete(pid);
  return res.json({
    success: post ? true : false,
    deletedPost: post || "something went wrong",
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

module.exports = {
  createPost,
  updatePost,
  getPost,
  likePost,
  dislikePost,
  getPosts,
};
