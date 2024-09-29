const router = require("express").Router();
const controller = require("../controllers/question");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

// Post Routes
router.get("/:qid", controller.getQuestion);
router.get("/", controller.getQuestions);
router.post("/", verifyAccessToken, controller.createQuestion);
//delete = xoa
//put = update
//post =tao
//get = lay data

router.put("/like/:qid", verifyAccessToken, controller.likeQuestion);
router.put("/dislike/:qid", verifyAccessToken, controller.dislikeQuestion);

// Comment Routes
router.put("/comment/:qid", verifyAccessToken, controller.commentQuestion);
//Reply
router.put(
  "/comment/:qid/reply/:cid",verifyAccessToken,
  controller.repliesQuestion
);
module.exports = router;
