function otraFuncion() {
    return seRompe();
}

function seRompe() {
    return 3 + z;
}

function funcionAsincronaRota(cb) {
    setTimeout(() => {
        try{
             return 3 + z;
        }catch(err){
            console.error("Fallo lo asincrono")
            cb(err)
        }
       
    }, );
}

try{
   // otraFuncion();
    funcionAsincronaRota((err) =>{
        console.error(err.message)
    })
}catch(err){
    console.error("Vaya, se a roto...")
    console.error(err.message)
    console.log("Pero no pasa nada, lo he capturado")
}

console.log("Esto esta al final")