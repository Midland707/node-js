const {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  editContact,
  updateStatusContact,
} = require("./contacts");

const { registerUser } = require("./users");

module.exports = {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  editContact,
  updateStatusContact,
  registerUser,
};
