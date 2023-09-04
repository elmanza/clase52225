const { Router } = require("express");
const searchController = require("./controller/searchController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/search', router);
    router.get('/:word', searchController.get);
}