const router = require("express").Router();
const controller = require("../controllers/post");
// const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", controller.createPost);
router.get("/", controller.getPosts);

module.exports = router;
