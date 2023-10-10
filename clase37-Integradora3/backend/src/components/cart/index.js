const { Router } = require("express");
const cartController = require("./controller/cartController");
const { getAuthenticatedUser } = require("../../utils/middlewares/AuthMiddleware");
module.exports = (app) =>{
    const router = new Router();
    app.use('/cart', router);
    router.get('/:cart_id', cartController.get);
    router.use(getAuthenticatedUser(true));
    router.get('/', cartController.getCart);
    router.post('/', cartController.create);
    router.put('/:product_cart_id', cartController.update);
    router.delete('/empty', cartController.emptyCart);
    router.delete('/:product_cart_id', cartController.delete);
}