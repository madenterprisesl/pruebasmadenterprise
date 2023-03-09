//-- Crear una variable con la estructura definida en un fichero JSON.
const fs = require('fs');

//-- Nombre del fichero JSON a leer.
const FICHERO_JSON = "misProductos.json";

//-- Segundo fichero JSON a leer.
const FICHERO_JSON2 = "misProductos2.json";

//-- Leer el fichero JSON.
const tienda_json = fs.readFileSync(FICHERO_JSON);

//-- Crear la estructura tienda a partir de la cadena en json.
const tienda = JSON.parse(tienda_json);

//-- Mostrar informacion sobre la tienda.
console.log("Productos en la tienda: " + tienda.length + " productos.");

//-- Recorrer el array de productos.
tienda.forEach( (element, index)=> {
    console.log("Producto " + (index+1) + ": " + element["nombre"]);
});

//-- Convertir la variable a cadena JSON.
let myJSON = JSON.stringify(tienda);

//-- Guardarla en el fichero destino.
fs.writeFileSync(FICHERO_JSON2, myJSON);

//-- Mostrar el resultado.
console.log("Información guardada en fichero: " + FICHERO_JSON2);