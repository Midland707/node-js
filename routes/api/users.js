const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
const { validateBody } = require("../../middlewares");
const { schemasUser } = require("../../models");

router.post(
  "/register",
  validateBody(schemasUser.regLogSchema),
  usersController.registerUser
);
router.post(
  "/login",
  validateBody(schemasUser.regLogSchema),
  usersController.loginUser
);
// router.post("/logout", usersController.logoutUser);
// router.post("/current", usersController.currentUser);

module.exports = router;
