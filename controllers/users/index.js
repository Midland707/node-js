const { controllerWrapper } = require("../../decorators");

const registerUser = require("./registerUser");

module.exports = {
  registerUser: controllerWrapper(registerUser),
};
