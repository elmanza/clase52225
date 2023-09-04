const { Router } = require("express");
const rolesController = require("./controller/rolesController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/role', router);
    router.get('/', rolesController.getAll);
    router.post('/', rolesController.create);
}