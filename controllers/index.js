const {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  editContact,
  updateStatusContact,
} = require("./contacts");

const { getAllUsers } = require("./users");

module.exports = {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  editContact,
  updateStatusContact,
  getAllUsers,
};
