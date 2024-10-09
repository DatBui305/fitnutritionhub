const router = require("express").Router();
const controller = require("../controllers/recipe");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

// Excercise Routes
router.post("/:rid", controller.createRecipe);
router.put("/");
module.exports = router;
