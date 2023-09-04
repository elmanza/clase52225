const { Router } = require("express");
const categoryController = require("./controller/categoryController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/category', router);
    router.get('/', categoryController.getAll);
    router.get('/:category_id', categoryController.get);
    router.post('/', categoryController.create);
    router.delete('/:category_id', categoryController.delete);
}