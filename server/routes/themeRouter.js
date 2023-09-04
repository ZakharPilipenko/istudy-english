const Router = require("express");
const router = new Router();
const themeController = require("../controllers/themeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), themeController.create);
router.get("/", themeController.getAll);

module.exports = router;
