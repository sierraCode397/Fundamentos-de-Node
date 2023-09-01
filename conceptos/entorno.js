let nombre = process.env.NOMBRE || "Sin Nombre";
// Se declaran las variables de entorno
let web = process.env.WEB || "No tengo web"

console.log("Hola "+ nombre);
console.log("Mi web es "+ web);
