let user = "Coder";
let pass = "12345";

function login({username, password}){
  if(!password) return 'No has enviado el password';
  if(!username) return 'No has enviado el username';
  if(username !== user || password !== pass) return 'Credenciales incorrectas';
  return "Has iniciado sesión";
}

function testLogin(){
  let testSuccess = 0;
  // Test 1 : No se envió password
  if(login({username: "Coder"}) === "No has enviado el password") testSuccess++;

  // Test 2 : No se envió Username
  if(login({password: "12345"}) === "No has enviado el username") testSuccess++;

  // Test 3 : Username y Password incorrectos
  if(login({username: "Coder", password: "1234532423"}) === "Credenciales incorrectas") testSuccess++;

  // Test 4 : Inicio se sessión satisfactoriamente
  if(login({username: "Coder", password: "12345"}) === "Has iniciado sesión") testSuccess++;
  return testSuccess;
}

// testLogin();
console.log(`Pruebas pasadas: ${testLogin()}`);