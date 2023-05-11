

class Calculadora {
  constructor(){
  
  }

  suma(a, b){
    return new Promise((resolve, reject)=>{
      if( a === 0 || b === 0) reject('Operación innecesaria');
      const resultado = a+b;
      if(resultado <= 0) reject('Solo valores positivos esta calculadora puede retornar');
      resolve(resultado);
    })
  }

  resta(a, b){
    return new Promise((resolve, reject)=>{
      if( a === 0 || b === 0) reject('Operación innecesaria');
      const resultado = a-b;
      if(resultado <= 0) reject('Solo valores positivos esta calculadora puede retornar');
      resolve(resultado);
    })
  }

  multiplicacion(a, b){
    return new Promise((resolve, reject)=>{
      if( a < 0 || b < 0) reject('Solo valores positivos esta calculadora puede retornar');
      resolve(a*b);
    })
  }

  division(a, b){
    return new Promise((resolve, reject)=>{
      if (b===0) reject(`No se puede dividir en cero`);
      resolve(a/b);
    })
  }
}



async function calculos(){
  try {
    const calculadora = new Calculadora();
    let suma = await calculadora.suma(2,10);

    let resta = await calculadora.resta(suma, 2);

    let multiplicacion = await calculadora.multiplicacion(suma, resta);

    let division = await calculadora.division(multiplicacion, 2);
    console.log(`El resultado de todas las operaciones conjuntas es ${division}`);
  } catch (error) {
    console.log(`[ERROR]-> ${error}`);
  }
}

calculos();