const tagsModel = require("../../../models/mongoose/tags");

class Tag {
  async get(id = null) {
    return id ? await tagsModel.findById(id) : await tagsModel.find({});
  }

  async getByCategory(category_id) {
    return await tagsModel.find({category_id});
  }

  async create(payload) {
    return await tagsModel.create(payload);
  }

  async update(_id, payload) {
    let tag = await this.get(_id);
    tag.description = payload?.description || tag.description;
    if (payload?.name) {
      for (const [key, value] of Object.entries(payload.name)) {
        tag.name.set(key, value);
      }
    }
    return await tag.save();
  }

  async delete(id = null){
    if(id) return await tagsModel.findByIdAndDelete(id);
    return await tagsModel.deleteMany({});
  }
}

module.exports = new Tag();