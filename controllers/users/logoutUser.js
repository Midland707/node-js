const { User } = require("../../models");

const logoutUser = async (req, res) => {
  const { _id: id } = req.user;
  await User.findByIdAndUpdate(id, { token: "" });
  res.status(204);
};

module.exports = logoutUser;
