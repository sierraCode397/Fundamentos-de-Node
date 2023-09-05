function asincrona(callback) {
    setTimeout(() => {
        try{
            let a = 3 + z;
            callback(null, a);
        }catch (e){
            callback(e, null); //O tambien callback(e);
        }
    }, 1000);
}

    asincrona((err, dato) =>{
    if(err) {
        console.log('Error: ' + err);
        //throw err; //Para campturar errores de funciones asincronas no va funcionar
        return false;
    }

    console.log("Todo a ido bien, data es "+ dato);
    })

