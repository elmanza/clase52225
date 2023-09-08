const OutfitModel = require("../../../models/mongoose/outfit");

class Outfit {
  async get(id = null) {
    return id ? await OutfitModel.findById(id) : await OutfitModel.find({});
  }

  async create(payload) {
    return await OutfitModel.create(payload);
  }

  async update(_id, payload) {
    let outfit = await this.get(_id);
    outfit.description = payload?.description || outfit.description;
    if (payload?.name) {
      outfit.name = {
        ...outfit.name,
        ...payload.name
      };
    }
    if (payload?.products) {
      outfit.products = payload.products;
    }
    return await outfit.save();
  }

  async deleteProduct(outfit_id, product_id){
    let outfit = await this.get(outfit_id);
    let cont_order = 1;
    outfit.products = outfit.products.reduce((p, c)=>{
      if(c.product_id.toString() !== product_id) {
        p.push({
            product_id: c.product_id,
            order: cont_order
        });
        cont_order++
      }
      return p;
    }, []);
    return await outfit.save();
  }

  async delete(id = null){
    if(id) return await OutfitModel.findByIdAndDelete(id);
    return await OutfitModel.deleteMany({});
  }
}

module.exports = new Outfit();