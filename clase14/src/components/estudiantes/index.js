const { Router } = require("express");
const estudiante = require("./controller/estudianteController");
module.exports = app => {
  let router = new Router();
  app.use("/api/estudiantes", router);
  router.get("/", estudiante.getAll);
  router.post("/", estudiante.create);
  router.put("/:id", estudiante.update);
  router.delete("/:id", estudiante.delete);
}