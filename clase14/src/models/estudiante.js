const {Schema, model} = require("mongoose");

const collectionName = "estudiantes";

const collectionSchema = new Schema({
  nombre: String,
  apellido: String,
  email: {
    unique: true,
    type: String
  }
});

const modelEntity = model("estudiantes", collectionSchema);

module.exports = modelEntity;