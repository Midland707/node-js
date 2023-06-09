const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const verificationUser = async (req, res) => {
  const { verificationToken } = req.params;
  const result = await User.findOne({ verificationToken });
  if (!result) throw HttpError(404, "User not found");
  const { _id } = result;
  await User.findOneAndUpdate(
    { _id },
    { ...req.body, verificationToken: null, verify: true },
    {
      new: true,
    }
  );
  res.json({
    message: "Verification successful",
  });
};

module.exports = verificationUser;
