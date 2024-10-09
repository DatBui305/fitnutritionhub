const router = require("express").Router();
const controller = require("../controllers/excercise");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

// Excercise Routes
router.post("/:pid", controller.createExcercise);
router.put


module.exports = router;
