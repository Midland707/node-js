const fs = require("fs").promises;
const { nanoid } = require("nanoid");

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

const addContact = async (name, email, phone) => {
  const data = await listContacts();
  const alert = data.find((contact) => contact.name === name);
  if (alert) {
    console.log("Contact is already !");
    return null;
  }
  const contact = { id: nanoid(), name, email, phone };
  const contactsArr = [...data, contact];
  await fs.writeFile(contactsPath, JSON.stringify(contactsArr, null, 2));
  return contactsArr;
};

module.exports = { listContacts, getContactById, removeContact, addContact };
