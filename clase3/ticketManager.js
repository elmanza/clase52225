
class TicketManager {
  #precioBaseGanancia;
  constructor(){
    this.eventos = [];
    this.usuarios = [];
  }

  validateId(arr){
    if(arr.length){
      let idMayor = arr.reduce((p,c)=> {
        return c.id > p ? c.id : p;
      }, 0);
      return idMayor + 1;
    }
    return 1;
  }

  validateExist(arr, id){
    return arr.filter(obj => obj.id === id);
  }

  getEventos(){
    return this.eventos;
  }

  agregarEvento(obj){
    let fechaAhora = new Date().toLocaleDateString();
    let { nombre, lugar, precio, capacidad = 50, fecha = fechaAhora } = obj;
    this.eventos.push({
      id: this.validateId(this.eventos),
      nombre,
      lugar,
      precio,
      capacidad,
      fecha,
      participantes: []
    })
  }

  agregarUsuario(obj){
    this.usuarios.push({
      id: this.validateId(this.usuarios),
      ...obj
    })
  }

  agregarUsuarioEvento(idEvento, idUsuario){
    if(this.validateExist(this.eventos, idEvento).length && this.validateExist(this.usuarios, idUsuario).length){
      this.eventos = this.eventos.map(evento =>{
        if(evento.id === idEvento){
          evento.participantes.push(idUsuario);
          return evento;
        }
        return evento;
      });
    }else{
      console.log("Lo sentimos el usuario o el evento no existen en nuestra base de datos");
    }
  }

  ponerEventoEnGira(obj){
    let { id, lugar, fecha } = obj;
    let evento = this.eventos.filter(evento => evento.id === id);
    this.eventos.push({
      ...evento[0],
      id: this.validateId(this.eventos),
      lugar,
      fecha
    })
  }
}


let ticket = new TicketManager();
ticket.agregarEvento({
  nombre : "The Weeknd",
  lugar : "El parque",
  precio : 5,
});

ticket.agregarEvento({
  nombre : "Pearl jam",
  lugar : "El parque del Triangulo",
  precio : 5,
});

ticket.agregarUsuario({
  nombre: "Francisco Elder",
  edad: 25
});

ticket.agregarUsuarioEvento(1, 1);

console.log(ticket.eventos);

ticket.ponerEventoEnGira({
  id: 2,
  lugar: "Estadio",
  fecha: '15/5/2023'
})

console.log(ticket.eventos);