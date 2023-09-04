const bcrypt = require('bcrypt');

const password = '12345Hola!';

bcrypt.hash(password, 5, (err,hash) => {
    console.log(hash);

    //Compara si si se asigno correctamente el hash
    //Comparando la contraseña original con el hash
    bcrypt.compare(password, hash, (err, res) => {
        //console.log(err);
        console.log(res);
        
    })

    //Cuando falla
    bcrypt.compare('password', hash, (err, res) => {
        //console.log(err);
        console.log(res);
        
    })
})