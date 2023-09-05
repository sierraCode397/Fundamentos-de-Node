console.time('todo')
let suma = 0;

console.time('bucle')

for (let i = 0; i < 1000000; i++) {
    suma += 1;    
}
console.timeEnd('bucle')

//-----------------------------

let suma2 = 0;

console.time('bucle2')

for (let j = 0; j < 100000000; j++) {
    suma2 += 1;    
}
console.timeEnd('bucle2')

console.timeEnd('todo')

console.time('Asincrono')
console.log('Empieza el asincrono')
asincrona()
    .then (() =>{
        console.timeEnd('Asincrono')
    });

//------------------------------

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Termina el proceso asincrono")
            resolve()
        });
    })
}