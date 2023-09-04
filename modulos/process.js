//const process = require('process');

process.on('beforeExit', () => {
    console.log("El proceso va terminar");
});

//process.on('');

process.on('exit', () => {
    console.log("El proceso acabo");
    setTimeout(() => {
        console.log("Esto no se va ver nunca");
    }, 1000);
});

setTimeout(() => {
    console.log("Esto SI se va ver")
}, 1000);

process.on('uncaughtException', (err, origen) => {
    console.error("Se nos olvido capturar un error y es: "+ err);
    setTimeout(() => {
        console.log("Esto viene de la excepciones de errores de codigo");
    }, 1000);

});

funcionQueNoExixte();

process.on('unhandleRejection', () => {
    console.log("El proceso acabo");
});