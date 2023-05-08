const express = require("express");
const contacts = require("../contacts");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(await contacts.listContacts());
});

module.exports = router;
