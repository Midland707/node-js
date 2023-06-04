const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const Jimp = require("jimp");

const updateAvatar = async (req, res) => {
  const { _id, avatarURL, email } = req.user;
  const avatarName = email.split("@")[0] + "Avatar" + ".jpg";

  console.log("avatarName = ", avatarName);
  Jimp.read(req.file.path, (err, avatar) => {
    if (err) throw err;
    avatar.resize(250, 250).quality(80).write(req.file.path); // save
  });

  //   const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
  //   if (!result) throw HttpError(404);
  //   res.json(result);

  res.json({
    avatarURL: avatarURL,
  });
};

module.exports = updateAvatar;
