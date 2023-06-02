const { Router } = require("express");
const userController = require("./usersController/usersController.js");

let mifunc = (req, res, next) =>{
  console.log("Equipo clase 52225!");
  next();
}

module.exports = app => {
  let router = new Router();
  app.use("/api/users", router);
  router.use(mifunc);
  router.get("/", userController.get);
  router.post("/", userController.create);
}