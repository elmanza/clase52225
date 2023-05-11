const sumar = (a,b)=> a + b;
const restar = (a,b)=> a - b;
const multiplicar = (a,b)=> a * b;
const dividir = (a,b)=> a / b;

const realizarOp = (a,b,cb) => {
  console.log(`La operacion que no se cual, es igual a = ${cb(a,b)}`);
}


// realizarOp(2,3,sumar);
// realizarOp(3,3,restar);
// realizarOp(3,3,multiplicar);
// realizarOp(3,3,dividir);


const dividirPromesa = (diviendo, divisor) =>{
  return new Promise((resolve, reject)=>{
    if (divisor===0) reject(`No se puede dividir en cero`);
    resolve(diviendo/divisor);
  })
}

// dividirPromesa(3,0).then(result => console.log(result)).catch(e=>{ console.log(e)});

const funcionAsync = async () =>{
  try {
    const resultado = await dividirPromesa(3,0);
    console.log(resultado);
  } catch (error) {
    console.log(`[Error]: ${error}`);
  }
}

funcionAsync();