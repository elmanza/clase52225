let students = ["Messi", "Mbappe", "James", "Neymar"];

// console.log(addAge(students));

function addAge(jugadores = [], edad = 25){
  return jugadores.map(jugador =>{
    edad++;
    return {name: jugador, age: edad};
  });
}

let player = addAge(students);


let numero = 34;
let string2 = "asdasdasd";
// miPrimeraFuncionEnFlecha();
if(typeof numero === 'number'){

  // console.log("Hola estoy adentro de este scope [NUMBER]");
}

let mifunction = function(){
  console.log("Hola soy una funcion anonima clásica");
}

let miPrimeraFuncionEnFlecha = equipo => {
  console.log(`El equipo es ${equipo}`);
}

let elDoble2 = num =>  num * num;
let elDoble = num => { return num * num};

// console.log(`El doble de 5 es ${elDoble(5)}`);
// console.log(`El doble de 8 es ${elDoble(8)}`);
// console.log(`El doble de 9 es ${elDoble(9)}`);

let numeros = [2,3,4,5,6];
let dobles = numeros.map(elDoble);
// console.log(dobles);


function mostrarLista(lista = []){
  if(lista.length){
    lista.forEach(e => console.log(e));
  }else{
    console.log("Lista Vacia!");
  }
}


// mostrarLista();

const productos = [
  { id: 1, nombre: 'Producto 1', precio: 10.99, stock: 100 },
  { id: 2, nombre: 'Producto 2', precio: 20.99, stock: 50 },
  { id: 3, nombre: 'Producto 3', precio: 30.99, stock: 0 },
  { id: 4, nombre: 'Producto 4', precio: 40.99, stock: 20 },
  { id: 5, nombre: 'Producto 5', precio: 50.99, stock: 10 },
  { id: 6, nombre: 'Producto 6', precio: 60.99, stock: 5 },
  { id: 7, nombre: 'Producto 7', precio: 70.99, stock: 2 },
  { id: 8, nombre: 'Producto 8', precio: 80.99, stock: 30 },
  { id: 9, nombre: 'Producto 9', precio: 90.99, stock: 15 },
  { id: 10, nombre: 'Producto 10', precio: 100.99, stock: 8 },
  { id: 11, nombre: 'Producto 11', precio: 110.99, stock: 6 },
  { id: 12, nombre: 'Producto 12', precio: 120.99, stock: 3 }
  ];



const paginador = (data, page = 1, limit = 2) =>{
  let pos = (page - 1) * limit;
  return data.splice(pos, limit);
}
console.log(paginador(productos,3, 3));
