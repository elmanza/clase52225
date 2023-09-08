const CollectionModel = require("../../../models/mongoose/collection");

class Collection {
  async get(id = null) {
    return id ? await CollectionModel.findById(id) : await CollectionModel.find({});
  }

  async create(payload) {
    return await CollectionModel.create(payload);
  }

  async update(_id, payload) {
    return await CollectionModel.updateOne({ _id }, { ...payload }, { new: true });
  }

  async delete(id = null){
    if(id) return await CollectionModel.findByIdAndDelete(id);
    return await CollectionModel.deleteMany({});
  }
}

module.exports = new Collection();