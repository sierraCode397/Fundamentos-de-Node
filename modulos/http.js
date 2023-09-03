const http = require("http");

http.createServer(router).listen(3000);

function router(req,res) {
    console.log("Nueva peticion");
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.writeHead(201, {'Content-Type': 'text/plain'})
            res.write('Hola, que tal?');
            res.write("Hola, ya se usar http de Node.js")
        
            res.end();
            break;
    
        default:
            res.write('Error 404: Nose lo que quieres');
            res.end();
            break;
    }


}

console.log("Escuchando http 3000")