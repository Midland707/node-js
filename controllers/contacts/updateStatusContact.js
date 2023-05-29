const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = updateStatusContact;