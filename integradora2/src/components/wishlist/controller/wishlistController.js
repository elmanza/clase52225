const wishlistServices = require("../services/wishlistService");

class Wishlist {

  async get(req, res, next) {
    try {
      const { wishlist_id } = req.params;
      const response = await wishlistServices.get(wishlist_id);
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async getAll(req, res, next) {
    try {
      const response = req.user ? await wishlistServices.get(req.user) : req.session.wishlist;
      res.json(response);
    } catch (error) {
      next(error)
    };
  }

  async getWishlist(req, res, next) {
    try {
      let response = [];
      if (req?.user) {
        response = await wishlistServices.getByUserId(req?.user._id, true, true);
      } else {
        response = await wishlistServices.getWishlistSession(req.session.wishlist);
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const { product_id } = req.body;
      let response = [];
      if (req?.user) {
        response = await wishlistServices.create(req.user._id, product_id);
      } else {
        if (!req.session.wishlist.includes(product_id)) {
          req.session.wishlist.push(product_id);
        }
        response = [ ...req.session.wishlist ];
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }
  
  async delete(req, res, next) {
    try {
      const { product_id } = req.body;
      let response = [];
      if (req?.user) {
        response = await wishlistServices.delete(req.user._id, product_id);
      } else {
        req.session.wishlist = req.session.wishlist.filter(id => id !== product_id);
        response = [ ...req.session.wishlist ];
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }

  async emptyWishlist(req, res, next) {
    try {
      let response = [];
      if (req?.user) {
        response = await wishlistServices.emptyWishlist(req.user._id);
      } else {
        req.session.wishlist = [];
        response = [ ...req.session.wishlist ];
      }
      res.json(response);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new Wishlist();