const {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  editContact,
  updateStatusContact,
} = require("./contacts");

const { registerUser, loginUser, currentUser } = require("./users");

module.exports = {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  editContact,
  updateStatusContact,
  registerUser,
  loginUser,
  currentUser,
};
