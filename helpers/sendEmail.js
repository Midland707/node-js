const Mailjet = require("node-mailjet");
require("dotenv").config();
const { MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE, MJ_SENDER_EMAIL } = process.env;

const mailjet = new Mailjet({
  apiKey: MJ_APIKEY_PUBLIC,
  apiSecret: MJ_APIKEY_PRIVATE,
});

const sendEmail = async (data) => {
  console.log(mailjet.apiKey);
  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: MJ_SENDER_EMAIL,
          Name: "Mailjet Pilot",
        },
        To: [
          {
            Email: data.to,
            // Name: "passenger 1",
          },
        ],
        Subject: data.subject,
        // TextPart:
        //   "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
        HTMLPart: data.html,
      },
    ],
  });

  return true;
};

module.exports = sendEmail;
