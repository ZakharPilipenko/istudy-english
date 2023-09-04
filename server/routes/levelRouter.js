const Router = require("express");
const router = new Router();
const levelController = require("../controllers/levelController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), levelController.create);
router.get("/", levelController.getAll);

module.exports = router;
