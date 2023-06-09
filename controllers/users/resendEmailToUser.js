const { HttpError } = require("../../helpers");
const { User } = require("../../models");
const { sendToEmail } = require("../../middlewares");

const resendEmailToUser = async (req, res) => {
  const { email } = req.body;
  if (!email) throw HttpError(400, "missing required field email");
  const result = await User.findOne({ email });
  if (result.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  await sendToEmail(email);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendEmailToUser;
