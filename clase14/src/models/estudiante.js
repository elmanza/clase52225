const {Schema, model} = require("mongoose");

const collectionName = "estudiantes";

const collectionSchema = new Schema({
  nombre: String,
  apellido: String,
  email: {
    unique: true,
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    Default: Date.now()
  },
  address: {
    street: String,
    city: String,
    country: String
  }
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;