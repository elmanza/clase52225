const fs = require("fs");

class ManagerUsuarios {
  constructor(){
    this.file = "Usuarios.json";
  }

  async existFile(){
    try {
      fs.accessSync(this.file);
      return true;
    } catch (error) {
      return false;
    }
  }

  async readFile(fileName){
    try {
      const file = await fs.promises.readFile(fileName, 'utf8');
      return JSON.parse(file);
    } catch (error) {
      console.log(error);
    }
  }

  async crearUsuario(obj){
    try {
      let file = [];
      const existFile = await this.existFile();
      if(existFile){
        file = await this.readFile(this.file);
      }
      file.push(obj);
      let text = JSON.stringify(file, null, 2);
      await fs.promises.writeFile(this.file, text);
    } catch (error) {
      console.log(error);
    }
  }

  async consultarUsuarios(){
    try {
      return await this.readFile(this.file);
    } catch (error) {
      console.log(error);
    }
  }
}



(async ()=>{
  try {
    let test = new ManagerUsuarios();
    await test.crearUsuario({
      nombre: "Gaston 4",
      apellido: "Pardo 4",
      edad: 20,
      curso: "13"
    });
    console.log(await test.consultarUsuarios());
  } catch (error) {
    console.log(error);
  }
})()