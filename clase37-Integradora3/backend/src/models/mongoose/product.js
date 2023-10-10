const { Schema, model } = require("mongoose");

const collectionName = "products";

const sizeSchema = new Schema({
  stock: Number,
  sold: Number,
  isActive: Boolean,
  countStock: Boolean
}, { _id: false }); // No se generará un _id para los subdocumentos de tamaño


const collectionSchema = new Schema({
  title: String,
  description: String,
  colors: [{
    type: Schema.Types.ObjectId,
    ref: 'colors'
  }],
  images: [String],
  sizes: {
    type: Map,
    of: sizeSchema
  },
  composition: String,
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'categories'
  },
  made_in: {
    type: Schema.Types.ObjectId,
    ref: 'countries'
  },
  price: {
    type: Map,
    of: Schema.Types.Decimal128
  },
  model_info: String,
  is_active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    Default: Date.now()
  },
  updatedAt: {
    type: Date,
    Default: null
  },
  deletedAt: {
    type: Date,
    Default: null
  }
});

function applyPopulate(doc) {
  return doc.populate("colors")
            .populate("category_id")
}

collectionSchema.pre('find', function(){ applyPopulate(this); })

// Método estático personalizado
collectionSchema.statics.findByIdWithPopulate = async function(id) {
  return applyPopulate(this.findById(id))
};

const modelEntity = model(collectionName, collectionSchema);

module.exports = modelEntity;