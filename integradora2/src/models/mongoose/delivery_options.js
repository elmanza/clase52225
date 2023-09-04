const { Schema, model } = require("mongoose");

const collectionName = "delivery_options";

const collectionSchema = new Schema({
  name: {
    type: String,
    enum: ['STANDARD', 'EXPRESS', 'SAME_DAY'],
    default: 'PENDING',
    unique: true
  },
  description: String,
  charge: Number,
  type: {
    type: String,
    enum: ['PORCENTAGE', 'SUM'],
    default: 'PENDING',
    unique: true
  }
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;