const fs = require("fs");

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString())
        console.log(err)
    })
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, (err) =>{
        if (err){
            console.error(`Error al escribir en ${ruta}:`, err);
        }else{
            console.log("Se ha escrito correctamente")
        }
    })
}

function borrar(ruta, callback) {
    fs.unlink(ruta, callback)
}

//escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log)
//leer(__dirname + "/archivo.txt", console.log)
//borrar(__dirname + "/archivo1.txt", console.log)

//Actualizacion de Node para ejecutar File System usando "Promesas"}

/* 
const fs = require("fs").promises;

const readFiles = async () => {
    const file = await fs.readFile("./archivo.txt", {encoding: "utf-8"});
    console.log(file);
}

readFiles() 
*/