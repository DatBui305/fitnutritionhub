const router = require("express").Router();
const controller = require("../controllers/question");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

// Question Routes
router.post("/", verifyAccessToken, controller.createQuestion);
router.get("/", controller.getQuestions);
router.get("/:qid", controller.getQuestion);

router.put("/comment/:qid", verifyAccessToken, controller.commentQuestion);
router.put("/like/:qid", verifyAccessToken, controller.likeQuestion);

router.put(
  "/comment/:qid/like/:cid",
  verifyAccessToken,
  controller.likeCommentQuestion
);

module.exports = router;
