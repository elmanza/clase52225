const fs = require("fs");
const crypto = require('crypto');
class ManagerUsuarios {
  constructor(){
    this.file = "Usuarios.json";
    this.secretKey = "secret";
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
      const claveCifrada = await this.encriptarPassword(obj.password);
      file.push({...obj, password: claveCifrada});
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

  async encriptarPassword(password){
    try {
      const textoCifrado = crypto.createHmac('sha256', "secret")
                            .update(password)
                            .digest('hex');
      console.log({textoCifrado});
      return textoCifrado;
    } catch (error) {
      console.log(error);
    }
  }

  async validarUsuario({username, password}) {
    try {
      let file = await this.readFile(this.file);
      let existUser = file.filter(user => user.username === username);
      if (existUser.length){
        let passwordCifrado = await this.encriptarPassword(password);
        if(existUser[0].password === passwordCifrado) console.log("Usuario válido")
        else console.log("Contraseña inválida");
      }else{
        console.log("El usuario no existe");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

(async () =>{
  try {
    let usuario = new ManagerUsuarios();
    // await usuario.crearUsuario({
    //   nombre: "Julian",
    //   apellido: "Ippolito",
    //   username: "juli",
    //   password: "12345"
    // })
    await usuario.validarUsuario({username: "juli", password: "123456789"})
  } catch (error) {
    console.log(error);
  }
})();


// const hash = crypto.createHmac('sha256', "secret")
//                     .update("12345")
//                     .digest('hex');

//                     console.log({hash})
