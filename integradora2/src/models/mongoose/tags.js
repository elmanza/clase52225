const { Schema, model } = require("mongoose");

const collectionName = "tags";

const collectionSchema = new Schema({
  name: {
    type: Map,
    of: String
  },
  code: String,
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'categories'

  }
});

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;