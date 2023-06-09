const { controllerWrapper } = require("../../decorators");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const currentUser = require("./currentUser");
const updateSubUser = require("./updateSubUser");
const updateAvatar = require("./updateAvatar");
const verificationUser = require("./verificationUser");
const resendEmailToUser = require("./resendEmailToUser");

module.exports = {
  registerUser: controllerWrapper(registerUser),
  loginUser: controllerWrapper(loginUser),
  logoutUser: controllerWrapper(logoutUser),
  currentUser: controllerWrapper(currentUser),
  updateSubUser: controllerWrapper(updateSubUser),
  updateAvatar: controllerWrapper(updateAvatar),
  verificationUser: controllerWrapper(verificationUser),
  resendEmailToUser: controllerWrapper(resendEmailToUser),
};
