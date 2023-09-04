const { Schema, model } = require("mongoose");

const collectionName = "invoice_type";

const collectionSchema = new Schema({
  name: {
    type: String,
    enum: ['CUSTOMER', 'COMPANY'],
    default: 'CUSTOMER',
    unique: true
  },
  description: String
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;