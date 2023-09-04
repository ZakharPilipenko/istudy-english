const Router = require("express");
const router = new Router();
const cardRouter = require("./cardRouter");
const userRouter = require("./userRouter");
const levelRouter = require("./levelRouter");
const typeRouter = require("./typeRouter");
const themeRouter = require("./themeRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/level", levelRouter);
router.use("/card", cardRouter);
router.use("/theme", themeRouter);

module.exports = router;
