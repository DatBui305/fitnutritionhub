const router = require("express").Router();
const controller = require("../controllers/post");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

// Post Routes
router.post("/", verifyAccessToken, controller.createPost);
router.get("/", controller.getPosts);
router.get("/:pid", controller.getPost);

router.put("/like/:pid", verifyAccessToken, controller.likePost);
router.put("/dislike/:pid", verifyAccessToken, controller.dislikePost);

// Comment Routes
router.put("/comment/:pid", verifyAccessToken, controller.commentPost);
router.put("/comment/:pid/:cid", verifyAccessToken, controller.updateComment);
router.delete(
  "/comment/:pid/:cid",
  verifyAccessToken,
  controller.deleteComment
);

// Reply Routes
router.put(
  "/comment/:pid/reply/:cid",
  verifyAccessToken,
  controller.repliesPost
);
router.put(
  "/comment/:pid/reply/:cid/rep/:rid",
  verifyAccessToken,
  controller.updateReply
);
router.delete(
  "/comment/:pid/reply/:cid/rep/:rid",
  verifyAccessToken,
  controller.deleteReplies
);
router.get("/", controller.search);

module.exports = router;

// post: create
// put: update
// get: view
// delete: delete
