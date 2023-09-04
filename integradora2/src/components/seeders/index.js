const { Router } = require("express");
const seederController = require("./controller/seedersController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/seeders', router);
    router.get('/init', seederController.init);
    router.delete('/init', seederController.downInit);
    router.get('/products', seederController.insertProducts);
    router.delete('/products', seederController.downProducts);    
}