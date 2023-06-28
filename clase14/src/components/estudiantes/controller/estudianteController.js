const estudiante = require("../services/estudianteService");

class Estudiante {
  async get(req, res, next){
    let { id = null } = req.params;
    let { page = 1, showme = 5 } = req.query;
    const response = await estudiante.getAll(id, {page, showme});
    res.json(response);
  }

  async create(req, res, next){
    let payload = req.body;
    const response = await estudiante.create(payload);
    res.json(response);
  }

  async update(req, res, next){
    let { id } = req.params;
    let payload = req.body;
    const response = await estudiante.update(id, payload);
    res.json(response);
  }

  async delete(req, res, next){
    let { id } = req.params;
    const response = await estudiante.delete(id);
    res.json(response);
  }
}

module.exports = new Estudiante();