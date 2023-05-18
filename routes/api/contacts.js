const express = require("express");
const router = express.Router();

const contactsController = require("../../controllers/contacts-controller");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", contactsController.getListContacts);

router.get("/:id", isValidId, contactsController.getContactById);

router.post(
  "/",
  validateBody(schemas.addSchema),
  contactsController.addContact
);

router.delete("/:id", isValidId, contactsController.removeContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  contactsController.editContact
);

module.exports = router;
