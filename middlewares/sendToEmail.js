const { PROJECT_URL, PORT } = process.env;
const { sendEmail } = require("../helpers");
const { nanoid } = require("nanoid");

const sendToEmail = async (email) => {
  const verificationToken = nanoid();
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${PROJECT_URL}${PORT}/users/verify/${verificationToken}">Click to verify email</a>`,
  };
  await sendEmail(verifyEmail);
  return verificationToken;
};

module.exports = sendToEmail;
