const { Contact } = require("../../models");

const getListContacts = async (req, res) => {
  const { _id: owner } = req.user;
  res.json(await Contact.find({ owner }));
};

module.exports = getListContacts;
