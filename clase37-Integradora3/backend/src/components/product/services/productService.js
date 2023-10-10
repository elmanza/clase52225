const productModel = require("../../../models/mongoose/product");
const colorService = require("../../colors/services/colorsService");
class Product {
  async get(id = null) {
    return id ? await productModel.findByIdWithPopulate(id) : await productModel.find({});
  }

  async getProductForCart(_id, projection){
    return await productModel.findOne({_id}, projection)
  }

  async create(files, payload) {
    const { colors, ...product } = payload;
    const productDTO = {
      ...product,
      colors:[],
      images: [],
      createdAt: Date.now(),
      updatedAt: null,
      deletedAt: null
    }
    for(const _color of Object.entries(colors)){
      const funcExec = typeof _color[1] === "object" ? 'create' : 'get';
      const colorObject = await colorService[funcExec](_color[1]);
      productDTO.colors.push(colorObject._id);
      productDTO.images.push({
        color_id: colorObject._id,
        urls: files.reduce((prev, file)=> file.fieldname === _color[0] ? [...prev, file.originalname] : prev, [])
      });
    }
    const newProduct = await productModel.create(productDTO);
    return newProduct;
  }

  async update(_id, payload) {
    return await productModel.updateOne({ _id }, { ...payload }, { new: true });
  }


  async delete(id = null){
    if(id) return await productModel.findByIdAndDelete(id);
    return await productModel.deleteMany({});
  }
}

module.exports = new Product();