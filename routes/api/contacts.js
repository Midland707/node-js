const express = require("express");
const contacts = require("../../models/contacts");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await contacts.listContacts());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
