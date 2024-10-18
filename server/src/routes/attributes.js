const router = require("express").Router();
const controller = require("../controllers/attributes");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", verifyAccessToken, controller.createAttributes);

module.exports = router;

// post: create
// put: update
// delete: xoa
// get: lay du lieu
