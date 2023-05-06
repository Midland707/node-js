const contacts = require("./contacts");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      return console.table(await contacts.listContacts());

    case "get":
      return console.table(await contacts.getContactById(id));

    case "add":
      return console.table(await contacts.addContact(name, email, phone));

    case "remove":
      return console.table(await contacts.removeContact(id));

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
