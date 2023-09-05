const fs = require("fs");
const stream = require('stream');
const util = require('util')


//Stream de lectura
let data = '';
let readableStream = fs.createReadStream(__dirname + '/imput.txt'); //Entrada, tipo lectura. Van a venir datos


readableStream.setEncoding('UTF8');
readableStream.on('data', (chuck) => {
    data += chuck; //Va agregando la informacion que va llegando
    //console.log(chuck.toString());
});

readableStream.on('end', () => {
    console.log(` Data: ${data}`);
});

//----------------------------------

//Stream de escritura

process.stdout.write('Hola ');
process.stdout.write('que ');
process.stdout.write('tal ');

//----------------------------------

//Setream de transformacion o doble sentido

const Transform = stream.Transform; 

function Mayus() {
    Transform.call(this);//Se inicializa el llamado a la transformacion
}
//this indica que se hara dentro den metodo MAYUS
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb()
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);