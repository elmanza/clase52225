class Contador {

  static contadorGlobal = 0;

  constructor(name){
    this.name = name;
    this.contador = 0;
  }

  getResponsable(){ return `El responsable es ${this.name}`; }

  contar(){
    this.contador++;
    Contador.contadorGlobal++;
  }

  getCuentaLocal(){
    return this.contador;
  }

  getCuentaGlobal(){
    return Contador.contadorGlobal;
  }
}

let nico = new Contador("Nico");
let estefano = new Contador("Estefano");
nico.contar();
nico.contar();
nico.contar();
nico.contar();
console.log(nico.getResponsable());
console.log(nico.getCuentaLocal());
estefano.contar();
estefano.contar();
console.log(estefano.getResponsable());
console.log(estefano.getCuentaLocal());
console.log(nico.getCuentaGlobal());
