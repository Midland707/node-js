const express = require("express");
const router = express.Router();

const contactsController = require("../../controllers/contacts-controller");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", contactsController.getListContacts);

router.get("/:id", contactsController.getContactById);

router.post(
  "/",
  validateBody(schemas.addSchema),
  contactsController.addContact
);

router.delete(
  "/:id",
  validateBody(schemas.addSchema),
  contactsController.removeContact
);

router.put(
  "/:id",
  validateBody(schemas.addSchema),
  contactsController.editContact
);

module.exports = router;
