const estudianteModel = require("../../../models/estudiante");

class Estudiante {
  async getAll(){
    const response = await estudianteModel.find({});
    return response;
  }

  async create(payload){
    const newStudent = await estudianteModel.create(payload);
    return newStudent;
  }

  async update(id){
    // let { id } = req.params;
    // const response = await estudiante.update(id);
    // res.json(response);
  }

  async delete(id){
    // let { id } = req.params;
    // const response = await estudiante.delete(id);
    // res.json(response);
  }
}

module.exports = new Estudiante();