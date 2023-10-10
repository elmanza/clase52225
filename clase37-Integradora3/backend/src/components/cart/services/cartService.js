const cartModel = require("../../../models/mongoose/cart");
const productService = require("../../product/services/productService");
const colorsService = require("../../colors/services/colorsService");
const { CART_STATUSES } = require("../../../utils/constants");
class Cart {
  static active;
  static ordered;
  static instacia;

  constructor(){
    if(Cart.instacia) return Cart.instacia;
    Cart.instacia = this;
    this.setStaticValues();
  }

  async setStaticValues() {
    const STATUS = await CART_STATUSES();
    Cart.active = STATUS.active;
    Cart.ordered = STATUS.ordered;
  }

  async getByUserId(user_id = null, getPopulate = false, returnArray = false) {
    let response = {};
    if (user_id) {
      response = getPopulate 
                  ? await cartModel.findOne({ user_id, status_id: Cart.active }).populate('products')
                  : await cartModel.findOne({ user_id, status_id: Cart.active });
      if(getPopulate && response?.products){
        let products = await Promise.all( response?.products.map(async item =>{
          const product = await productService.getProductForCart(item.product_id, {title:1, images:1, is_premium: 1, price:1});
          const color = await colorsService.get(item.color_id, {__v:0});
          return {
            product,
            color,
            _id: item._id,
            product_id: item.color_id,
            color_id: item.color_id,
            size: item.size,
            quantity: item.quantity,
          }
        }) );
        let cartDTO = {
          "status_id": response.status_id,
          "createdAt": response.createdAt,
          "_id": response._id,
          "user_id": response.user_id,
          products
        }

        response = cartDTO;
      }
    }
    return response ? returnArray ? [response] : response : [];
  }

  async create(user_id, payload) {
    let cart = await this.getByUserId(user_id);
    if (cart?.user_id) {
      cart.products.push(payload);
      await this.update(user_id, { products: cart.products });
    } else {
      cart = await cartModel.create({
        user_id,
        products: [payload],
        status_id: Cart.active,
        createdAt: Date.now()
      });
    }
    return cart;
  }

  async getCartSession(cart = []) {
    if (cart.length){
      cart[0].products = await Promise.all( cart[0]?.products.map(async item =>{
        const product = await productService.getProductForCart(item.product_id, {title:1, images:1, is_premium: 1, price:1});
        const color = await colorsService.get(item.color_id, {__v:0});
        return {
          product,
          color,
          ...item
        }
      }))
    } 
    return cart;
  }

  async toOrder(user_id) {
    return await cartModel.updateOne(
      { user_id, status_id: Cart.active }, 
      { status_id: Cart.ordered }, 
      { new: true }
    );
  }

  async updateCart(user_id, product_cart_id, payload) {
    let cart = await this.getByUserId(user_id);
    if (cart?.user_id) {
      cart.products = cart.products.map(product => {
        if(product._id.toString() === product_cart_id){
          product = {
            ...product,
            ...payload
          }
        }
        return product;
      });
      await this.update(user_id, { products: cart.products });
    }
    return cart;
  }

  async update(user_id, payload) {
    return await cartModel.updateOne({ user_id }, { ...payload }, { new: true });
  }

  async delete(user_id, product_cart_id) {
    let cart = await this.getByUserId(user_id);
    if (cart?.user_id) {
      cart.products = cart.products.filter(product => product._id.toString() !== product_cart_id);
      await this.update(user_id, { products: cart.products });
    }
    return cart;
  }

  async emptyCart(user_id) {
    let cart = await this.getByUserId(user_id);
    if (cart?.user_id) {
      cart.products = [];
      await this.update(user_id, { products: [] });
    }
    return cart;
  }

  async transferCartFromSessions(user_id, sessionCart){
    console.log("@@@@@@@@@@@@@@@@@@ transferCartFromSessions --> ", sessionCart)
    if (sessionCart.length){
      return await Promise.all( sessionCart.map(async item =>{
        return this.create(user_id, item)
      }))
    } 
    return [];
  }
}

module.exports = new Cart();