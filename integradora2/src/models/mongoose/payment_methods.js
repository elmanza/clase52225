const { Schema, model } = require("mongoose");

const collectionName = "payment_methods";

const collectionSchema = new Schema({
  type: String,
  name: String,
  description: String,
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;