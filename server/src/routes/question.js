const router = require("express").Router();
const controller = require("../controllers/question");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

// Post Routes
router.post("/", verifyAccessToken, controller.createQuestion);
router.get("/", controller.getQuestions);
router.get("/:pid", controller.getQuestion);

module.exports = router;
