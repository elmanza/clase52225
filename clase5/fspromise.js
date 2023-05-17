const fs = require("fs");

async function manejadorArchivos(fileName){
  try {
    const info = {
      contenidoString: "",
      constenidoObjeto: {},
      size: 0
    }

    if(!fs.existsSync(fileName)) throw new Error("Tu archivo no existe!");
    const packageInfo = await fs.promises.readFile(fileName, 'utf-8');
    info.contenidoString = packageInfo;
    info.constenidoObjeto = JSON.parse(packageInfo);
    info.size = (await fs.promises.stat(fileName)).size;
    console.log(info);
  } catch (error) {
    console.log(`[ERROR] --> ${error}`);
  }
}

manejadorArchivos('package.json');