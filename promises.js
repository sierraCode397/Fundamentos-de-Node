function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Hola, "+ nombre)
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Adios ", nombre)
            resolve();
        }, 1000);
    })

}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("BLa Bla Bla...")
            resolve(nombre);
            reject("Hay un error");
        }, 1000);
    })
}

console.log("Iniciando el proceso...");
hola("Isaac")
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log("Terminado el proceso...");
    })
    .catch(error => {
        console.error("Ah habido un error");
        console.error(error);
    })