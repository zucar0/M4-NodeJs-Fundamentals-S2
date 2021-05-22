const path=require('path');
//Importación del módulo fs
 const fs = require('fs');

 fs.writeFile(path.join(__dirname,'/ejemplo4.txt'),'Este es el texto 4', {encoding:'utf-8'},(err)=>{
     if(err) throw err;
     console.log('¡Archivo creado!');
 });


//Lectura del archivo
fs.readFile(path.join(__dirname,'/ejemplo4.txt'), {encoding:'utf-8'},(err, data)=>{
    if(err) return console.log (err);
    console.log('Leer archivo: ', data);
});

//Agregar información a un archivo ya creado
fs.appendFile(path.join(__dirname, '/ejemplo4.txt'), '\nSegunda línea', {encoding: 'utf-8'}, (err)=> {
    if(err) throw err;
    console.log('Archivo actualizado.')
})