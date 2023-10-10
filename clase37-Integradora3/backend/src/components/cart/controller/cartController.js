const cartServices = require("../services/cartService");
const { validateId } = require("../../../utils/arrays");
class Cart {

  async get(req, res, next) {
    try {
      const { cart_id } = req.params;
      const response = await cartServices.get(cart_id);
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async getAll(req, res, next) {
    try {
      const response = req.user ? await cartServices.get(req.user) : req.session.cart;
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async getCart(req, res, next) {
    try {
      let response = [];
      if (req?.user) {
        response = await cartServices.getByUserId(req?.user._id, true, true);
      } else {
        response = await cartServices.getCartSession(req.session.cart);
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const payload = req.body;
      let response = [];
      if (req?.user) {
        response = await cartServices.create(req.user._id, payload);
      } else {
        let cartProductDTO = {
          _id: req.session.cart.length ? validateId(req.session.cart[0].products) : 1,
          ...payload
        };

        if(req.session.cart.length){
          req.session.cart[0].products.push(cartProductDTO);
        } else {
          req.session.cart = [{
            _id: req.sessionID,
            createdAt: Date.now(),
            status_id: null,
            products: [cartProductDTO]
          }]
        }

        response = [ ...req.session.cart ];
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const { product_cart_id } = req.params;
      let response = [];
      if (req?.user) {
        response = await cartServices.updateCart(req.user._id, product_cart_id, req.body);
      } else {
        req.session.cart[0].products = req.session.cart[0].products.map(product => {
          if(product._id == product_cart_id){
            product = {
              ...product,
              ...req.body
            }
          }
          return product;
        });
        response = [ ...req.session.cart ];
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const { product_cart_id } = req.params;
      let response = [];
      if (req?.user) {
        response = await cartServices.delete(req.user._id, product_cart_id);
      } else {
        req.session.cart = req.session.cart.filter(product => product._id !== product_cart_id);
        response = [ ...req.session.cart ];
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async emptyCart(req, res, next) {
    try {
      let response = [];
      if (req?.user) {
        response = await cartServices.emptyCart(req.user._id);
      } else {
        req.session.cart = [];
        response = [ ...req.session.cart ];
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  
}

module.exports = new Cart();