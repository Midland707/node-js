const { Contact } = require("../../models");

const getListContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  res.json(
    await Contact.find({ owner })
      .populate("owner", "email")
      .limit(limit * 1)
      .skip((page - 1) * limit)
  );
};

module.exports = getListContacts;
