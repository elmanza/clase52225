const estudiante = require("../services/estudianteService");

class Estudiante {
  async getAll(req, res, next){
    const response = await estudiante.getAll();
    res.json(response);
  }

  async create(req, res, next){
    let payload = req.body;
    const response = await estudiante.create(payload);
    res.json(response);
  }

  async update(req, res, next){
    let { id } = req.params;
    const response = await estudiante.update(id);
    res.json(response);
  }

  async delete(req, res, next){
    let { id } = req.params;
    const response = await estudiante.delete(id);
    res.json(response);
  }
}

module.exports = new Estudiante();