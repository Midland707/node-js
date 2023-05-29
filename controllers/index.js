const { controllerWrapper } = require("../decorators");
const getListContacts = require("./contacts/getListContacts");

module.exports = {
  getListContacts: controllerWrapper(getListContacts),
  getContactById: controllerWrapper(getContactById),
  addContact: controllerWrapper(addContact),
  removeContact: controllerWrapper(removeContact),
  editContact: controllerWrapper(editContact),
  updateStatusContact: controllerWrapper(updateStatusContact),
};
