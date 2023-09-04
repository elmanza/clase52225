const { Schema, model } = require("mongoose");

const collectionName = "user_cc";

const collectionSchema = new Schema({
  name: String,
  description: String
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;