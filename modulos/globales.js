/* 
console.log(global);
console.log(setInterval);
console.log(clearInterval); 
console.log(process);
console.log(__dirname);
console.log(__filename);

require(); //accede a los modulos y con EXPORT obtienes los modulos

*/

global.miVariable = "el valor";
console.log(miVariable);  

let i = 0;
let intervalo = setInterval(() => {
    console.log("Hola");
    if (i === 3) {
        clearInterval(intervalo)
    }
    i++;
}, 1000);

setImmediate(function () {
    console.log("Hola por 2")
});
