const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

contactSchema.post("save", mongooseError);

const addSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Contact = model("contacts", contactSchema);

module.exports = { Contact, schemas };
