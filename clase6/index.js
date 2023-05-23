const moment = require("moment");
const fechaHoy = moment();

  const fechaNacimiento = moment('1994-01-25');
  if(fechaNacimiento.isValid()){
    const totalDias = fechaHoy.diff(fechaNacimiento, 'days');
    console.log(`El total de días es ${totalDias}`);
  }