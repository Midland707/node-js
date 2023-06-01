const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");

router.post("/register", usersController.registerUser);
// router.post("/login", usersController.loginUser);
// router.post("/logout", usersController.logoutUser);
// router.post("/current", usersController.currentUser);

module.exports = router;
