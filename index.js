const contacts = require("./contacts");

const testFunc = async () => {
  //   const test = await contacts.listContacts();
  //   const test = await contacts.getContactById("drsAJ4SHPYqZeG-83QTVW");
  const test = await contacts.removeContact("drsAJ4SHPYqZeG-83QTVW");
  console.log("Test drive = ", test);
};

testFunc();
