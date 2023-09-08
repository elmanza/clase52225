const { Router } = require("express");
const tagsController = require("./controller/tagsController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/tags', router);
    router.get('/', tagsController.getAll);
    router.get('/:tags_id', tagsController.get);
    router.get('/:category_id/list', tagsController.getByCategory);
    router.post('/', tagsController.create);
    router.put('/:tags_id', tagsController.update);
    router.delete('/:tags_id', tagsController.delete);
}