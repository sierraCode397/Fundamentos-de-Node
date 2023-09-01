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

async function main(params) {
    let nombre =  await hola("Isaac");

    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

console.log("Empezamos proceso")
main();
console.log("Terminamos proceso")