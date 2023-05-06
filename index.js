const contacts = require("./contacts");

const contact = {
  name: "Kennedy Lane",
  email: "mattis.Cras@nonenimMauris.net",
  phone: "(542) 451-7038",
};

const testFunc = async () => {
  //   const test = await contacts.listContacts();
  //   const test = await contacts.getContactById("drsAJ4SHPYqZeG-83QTVW");
  //   const test = await contacts.removeContact("drsAJ4SHPYqZeG-83QTVW");
  const test = await contacts.addContact(
    contact.name,
    contact.email,
    contact.phone
  );
  console.log("Test drive = ", test);
};

testFunc();
