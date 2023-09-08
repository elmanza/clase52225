const { Router } = require("express");
const userccController = require("./controller/userccController");
module.exports = (app) =>{
    const router = new Router();
    app.use('/usercc', router);
    router.get('/', userccController.getAll);
    router.get('/:usercc_id', userccController.get);
    router.get('/user/:user_id', userccController.getCardListByUser);
    router.get('/company/:company_id', userccController.getCardListByCompany);
    router.post('/', userccController.create);
    router.put('/:usercc_id', userccController.update);
    router.delete('/:usercc_id', userccController.delete);
}