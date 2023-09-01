function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log("Hola, "+ nombre)
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log("Adios ", nombre)
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso...");
hola("Isaac", function (nombre) {
    console.log("Primer proceso terminado...")
    adios(nombre, function () {
        console.log("Terminando proceso...");
    } );
});

/* hola("Isaac", function () {});
adios("Isaac", function () {} ); */
