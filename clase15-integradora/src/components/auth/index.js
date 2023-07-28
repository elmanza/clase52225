// Tadeo Almiron
const { Router } = require("express");
const authController = require("./controller/authController");
const { isAuth, isNotAuth, getAuthJwt } = require("./middlewares/auth");
module.exports = app =>{
  const router = new Router();
  app.use("/auth", router);
  router.get("/session", authController.session);
  router.get("/login", isNotAuth, authController.loginView);
  router.get("/login/gh", authController.loginView);
  router.get("/login/github", authController.loginView);
  router.get("/register", authController.registerView);
  router.get("/recovery", authController.recoveryView);
  router.get("/dashboard", getAuthJwt, authController.dashboardView);
  router.post("/login",  authController.login);
  router.post("/register", authController.register);
  router.post("/recovery", authController.recovery);
  router.get("/cookies", authController.getCookies);
}