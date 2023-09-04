const { Router } = require("express");
const wishlistController = require("./controller/wishlistController");
const { getAuthenticatedUser } = require("../../utils/middlewares/AuthMiddleware");
module.exports = (app) =>{
    const router = new Router();
    app.use('/wishlist', router);
    router.use(getAuthenticatedUser(true));
    router.get('/', wishlistController.getWishlist);
    router.get('/:wishlist_id', wishlistController.get);
    router.post('/', wishlistController.create);
    router.delete('/', wishlistController.delete);
    router.delete('/empty', wishlistController.emptyWishlist);
}