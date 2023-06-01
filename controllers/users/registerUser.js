const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const result = await User.create(req.body);
  res.status(201).json(result);
};

module.exports = registerUser;
