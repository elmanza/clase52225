const { Schema, model } = require("mongoose");

const collectionName = "user";

const collectionSchema = new Schema({
  nombre: String,
  apellido: String,
  email: {
    unique: true,
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String
  },
  edad: {
    type: Date
  },
  isActive: {
    type: Boolean,
    default: true
  },
  photo: String,
  token: String
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;