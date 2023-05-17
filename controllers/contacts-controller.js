const { controllerWrapper } = require("../decorators");
const addContactSchema = require("../schemas/contacts-schemas");
const { HttpError } = require("../helpers");
const Contact = require("../models/contact");

const getListContacts = async (req, res, next) => {
  res.json(await Contact.find());
};

const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findOne({ _id: id });
  if (!result) throw HttpError(404);
  res.json(result);
};

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: id });
  if (!result) throw HttpError(404);
  res.json({ message: "contact deleted" });
};

const editContact = async (req, res, next) => {
  if (JSON.stringify(req.body) === "{}") throw HttpError(400, "missing fields");
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = {
  getListContacts: controllerWrapper(getListContacts),
  getContactById: controllerWrapper(getContactById),
  addContact: controllerWrapper(addContact),
  removeContact: controllerWrapper(removeContact),
  editContact: controllerWrapper(editContact),
};
