const { Router } = require("express");
const userController = require("./controller/userController");
const { isAuthenticated } = require("../../utils/middlewares/AuthMiddleware")
module.exports = (app) =>{
    const router = new Router();
    app.use('/user', router);
    router.get('/:user_id', userController.get);
    router.get('/', userController.getAll);
    router.get('/role/:rol_id', userController.getByRole);
    router.post('/', userController.create);
    router.put('/:user_id', userController.updateUser);
    router.put('/credentials/:user_id', isAuthenticated, userController.updatePassword);
    router.delete('/:user_id', userController.deleteUser);
}