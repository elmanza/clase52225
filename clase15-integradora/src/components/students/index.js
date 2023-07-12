const { Router } = require("express");
const studentController = require("./controller/studentController");

module.exports = app => {
  const router = new Router();
  app.use("/students", router);
  // router.get("/", studentController.getStudent);
  // router.get("/:id", studentController.getStudent);
  router.get("/", studentController.home);
  router.get("/aggregation", studentController.aggregation);
  router.get("/bulkcreate/:cant", studentController.bulkCreate);
  // router.post("/", studentController.create);
  // router.put("/:id", studentController.update);
  // router.delete("/:id", studentController.delete);
}