const { controllerWrapper } = require("../../decorators");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser");

const currentUser = require("./currentUser");

module.exports = {
  registerUser: controllerWrapper(registerUser),
  loginUser: controllerWrapper(loginUser),
  currentUser: controllerWrapper(currentUser),
};
