// Supongamos que tienes un array de objetos que representan diferentes tareas que debes realizar en un proyecto:
const tareas = [
  { id: 1, descripcion: 'Hacer investigación', completada: false },
  { id: 2, descripcion: 'Crear plan de proyecto', completada: false },
  { id: 3, descripcion: 'Desarrollar código', completada: false },
  { id: 4, descripcion: 'Realizar pruebas', completada: false },
  { id: 5, descripcion: 'Desplegar aplicación', completada: false },  
  { id: 6, descripcion: 'Realizar pruebas', completada: false }
];

// 1) Necesitamos obtener un nuevo array con solamente las descripciones de las tareas que aún no han sido completadas, y en mayúsculas. Representar en consola

// console.log("Respueta ejecicio 1:");
// const tareasPendientes = tareas
//   .filter(tarea => tarea.completada === false)
//   .map(tarea => tarea.descripcion.toUpperCase())
//   .forEach(descripcion => console.log(descripcion));
// console.log("---------------------------------------- \n \n");


// 2) Existen tareas pendientes?
console.log("Respueta ejecicio 2:");
let allItsDone = tareas.every(tarea => tarea.completada === true);

// console.log(`Todas las tareas estan hechas? ${allItsDone}  \n `);

// 3) Cuantas tareas hay completadas?
let numeros = [14,8,72,2,90,16];
let total = numeros.reduce((total, numeroActual) =>{
  return total + numeroActual;
});
// console.log(`La sumatoria es igual a ${total}`);
const tareasCompletadasCount = tareas.reduce((total, e) => e.completada === true ? total + 1 : total,0);
// console.log(`Tareas completadas: ${tareasCompletadasCount}`);

// 4) Existe alguna tarea con el nombre 'Realizar pruebas'?
let search = 'Realizar pruebas';
let animales = ["perro", "gato", "Aguila", "cerdo", "canario"];
let respuesta4 = tareas.find(tarea => tarea.descripcion.toLowerCase() === search.toLowerCase());
let respuesta4a = tareas.filter(tarea => tarea.descripcion.includes(search));
// console.log(animales.includes("Aguila"));


const productos = [
  { id: 1, nombre: 'iPhone 12', precio: 999 },
  { id: 2, nombre: 'Samsung Galaxy S21', precio: 899 },
  { id: 3, nombre: 'Google Pixel 5', precio: 699 }
];

// 5) Existe un producto llamado 'iPhone 12'?
let word = 'iPhone 13';

let respuesta = productos.some(producto => producto.nombre.includes(word)) ? 'Si existe el producto' : 'Lo sentimos, no manejamos ese producto';

console.log(respuesta);