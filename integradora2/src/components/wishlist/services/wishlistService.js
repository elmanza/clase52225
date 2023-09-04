const Boom = require("@hapi/boom");
const wishlistModel = require("../../../models/mongoose/wishlist");
const productService = require("../../product/services/productService");

class Wishlist {
  async get(id = null) {
    return id ? await wishlistModel.findById(id) : await wishlistModel.find({});
  }

  async getByUserId(user_id = null, getPopulate = false, returnArray = false) {
    let response = {};
    if (user_id) {
      response = getPopulate 
                  ? await wishlistModel.findOne({ user_id }) //.populate('products')
                  : await wishlistModel.findOne({ user_id });
    }
    return response ? returnArray ? [response] : response : [];
  }

  async getWishlistSession(wishlist = []) {
    if (wishlist.length){
      console.log(wishlist);
      return await Promise.all(wishlist.map(async product_id =>{
        return await productService.get(product_id);
      }));
    } 
    return wishlist;
  }

  async create(user_id, product_id) {
    let wishlist = await this.getByUserId(user_id);
    if (wishlist?.user_id) {
      if(wishlist.products.filter(id => id.toString() === product_id).length){
        throw Boom.conflict('Este producto ya se encuentra en la lista');
      } else {
        wishlist.products.push(product_id);
        await this.update(user_id, { products: wishlist.products });
      }
    } else {
      wishlist = await wishlistModel.create({
        user_id,
        products: [product_id],
        createdAt: Date.now()
      });
    }
    return wishlist;
  }

  async update(user_id, payload) {
    return await wishlistModel.updateOne({ user_id }, { ...payload }, { new: true });
  }

  async delete(user_id, product_id) {
    let wishlist = await this.getByUserId(user_id);
    if (wishlist?.user_id) {
      wishlist.products = wishlist.products.filter(id => id.toString() !== product_id);
      await this.update(user_id, { products: wishlist.products });
    }
    return wishlist;
  }

  async emptyWishlist(user_id) {
    let wishlist = await this.getByUserId(user_id);
    if (wishlist?.user_id) {
      wishlist.products = [];
      await this.update(user_id, { products: [] });
    }
    return wishlist;
  }

  async transferWishlistFromSessions(user_id, sessionWishlist){
    if (sessionWishlist.length){
      let wishlist = await this.getByUserId(user_id);
      if (wishlist?.user_id) {
        let productIds = sessionWishlist.filter(id => !wishlist.products.includes(id.toString()));
        if(productIds.length){
          productIds.forEach(product_id => {
            wishlist.products.push(product_id);
          });
          await this.update(user_id, { products: wishlist.products });
        }
      }
    } 
    return [];
  }
  
}

module.exports = new Wishlist();