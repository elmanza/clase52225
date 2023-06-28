const estudianteModel = require("../../../models/estudiante");

class Estudiante {
  async getAll(id, pagination){
    let showme = Number(pagination.showme);
    let page = pagination.page;
    let response = id
    ? await estudianteModel.findById(id)
    : await estudianteModel.find({}).skip((page - 1) * showme).limit(Number(showme));
    return response;
  }

  async create(payload){
    try {
      return await estudianteModel.create(payload); 
    } catch (error) {
      console.log(error);
      return {status: "failed"}
    }
    
  /* 
    const newStudent = new estudianteModel(payload);
    await newStudent.save();
    return newStudent;
  */
  }

  async update(id, estudiante){
    try {
      return await estudianteModel.findByIdAndUpdate(id, estudiante, { new: true });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id){
    return await estudianteModel.findByIdAndDelete(id);
  }
}

module.exports = new Estudiante();