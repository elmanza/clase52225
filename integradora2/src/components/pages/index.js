const { Router } = require("express");
const pagesController = require("./controller/pagesController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/pages', router);
    router.get('/home/mainslider', pagesController.getAll);
    router.get('/home/teleprompter', pagesController.get);
}