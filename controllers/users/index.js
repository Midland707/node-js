const { controllerWrapper } = require("../../decorators");

const registerUser = require("./registerUser");
const loginUser = require("./loginUser")

module.exports = {
  registerUser: controllerWrapper(registerUser),
  loginUser: controllerWrapper(loginUser),
};
