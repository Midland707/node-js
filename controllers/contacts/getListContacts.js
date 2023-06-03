const { Contact } = require("../../models");

const getListContacts = async (req, res) => {
  const { _id: owner } = req.user;
  res.json(await Contact.find({ owner }).populate("owner", "email"));
};

module.exports = getListContacts;
