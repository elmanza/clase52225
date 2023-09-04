const fs = require("fs");

module.exports = class HandlerDocument {

  static async existFile(fileUrl){
    try {
      fs.accessSync(fileUrl);
      return true;
    } catch (error) {
      return false;
    }
  }

  static async getFile(fileUrl){
    try {
      let file = [];
      const existFile = await HandlerDocument.existFile(fileUrl);
      if(existFile){
        let fileRead = await fs.promises.readFile(fileUrl, 'utf8');
        file = JSON.parse(fileRead);
      }
      return file;
    } catch (error) {
      console.log(error);
    }
  }

  static async writeFile(fileUrl, obj){
    try {
      const existFile = await HandlerDocument.existFile(fileUrl);
      if(existFile){
        let text = JSON.stringify(obj, null, 2);
        return await fs.promises.writeFile(fileUrl, text);
      }
      return [];
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  
}


