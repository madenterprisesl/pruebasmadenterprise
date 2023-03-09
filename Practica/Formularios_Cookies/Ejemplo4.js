//-- Para poder acceder a los módulos de HTTP Y FS.
const http = require('http');
const fs = require('fs');
//-- Puerto donde se trabaja.
const PUERTO = 3000;

//-- Declaración de ctes.
//-- Cargar pagina web del formulario.
const FORMULARIO = fs.readFileSync('intro.html','utf-8');

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

  //-- Leer la Cookie recibida y mostrarla en la consola
  const cookie = req.headers.cookie;

  if (cookie) {
    console.log("Cookie: " + cookie);
  }
  else {
    console.log("Petición sin cookie");
  }

  //-- Determinar el contenido del mensaje de respuesta
  let content_type = "text/html";
  let content = FORMULARIO;

  //-- Enviar la respuesta
  res.setHeader('Content-Type', content_type);
  res.write(content);
  res.end()

});

server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);