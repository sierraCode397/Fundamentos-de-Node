console.log("Algo");
console.info("Algo soy informacion");
console.error("Hola falle");
console.warn("Peligrooo");

var tabla = [
    {
        a: 1,
        b: "Z"
    },
    {
        a: 2,
        b: "Otra"
    }
]
console.table(tabla);


console.group("Conversacion");
console.log("Hola");
console.group("-");
console.log("Bla Bla Bla");
console.groupEnd("-");
console.log("Adios");
console.groupEnd("Conversacion");

function uno() {
    console.group("funcion 1");
    console.log("Esto es una prueba de la funcion 1");
    console.log("Y esto igual");
    dos();
    console.groupEnd("funcion 1");
}

function dos() {
    console.group("Funcion2");
    console.log("Esta es la funcion 2");
    console.groupEnd("funcion 2");
}

console.log("Empezamos");
uno();

console.count("Veces");
console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");
console.count("Veces");
console.count("Veces");