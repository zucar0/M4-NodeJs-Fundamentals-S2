// console.log(__di rname);
//Importar el módulo de http (Ya viene instalado con los módulos de node)
const http = require('http');
//Se crea el servidor que recibe una función
let server = http.createServer(function(req, res){
    res.end('¡Hola, mundo!')
})
//Servidor que dentro lleva una funcion
server.listen(3000, function(){
    console.log("Servidor corriendo en", 3000); 
})