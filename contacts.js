const fs = require("fs").promises;

const path = require("path");
const contactsPath = path.resolve("db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId) || null;
  return contact;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const contact = data.find((contact) => contact.id === contactId) || null;
  if (!contact) return contact;
  const resultArr = data.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(resultArr, null, 2));
  return contact;
};

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = { listContacts, getContactById, removeContact };
