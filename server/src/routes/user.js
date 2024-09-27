const router = require("express").Router();
const controller = require("../controllers/user");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/current", verifyAccessToken, controller.getCurrent);
router.get("/:uid", controller.getUser);

router.post("/refreshtoken", controller.refreshAccessToken);
router.get("/logout", controller.logout);

module.exports = router;

//CRUD | Create - Read - Update - Delete | Post - Get - Put - Delete

// create (post) + put - body // bao mat
// get + delete - query // ? & de bi lo
