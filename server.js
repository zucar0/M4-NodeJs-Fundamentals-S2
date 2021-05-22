const path=require('path');
//Importación del módulo fs
 const fs = require('fs');

//Sincrono

 fs.writeFileSync(path.join(__dirname,'/ej1.txt'),'Este es el texto 1', {encoding:'utf-8'});
 console.log('writeFileSync: ','¡Archivo creado!');
 
//Lectura del archivo
data=fs.readFileSync(path.join(__dirname,'/ej1.txt'), {encoding:'utf-8'});
console.log('readFileSync: ', data);

//Agregar información a un archivo ya creado
fs.appendFileSync(path.join(__dirname, '/ej1.txt'), '\nSegunda línea');
    console.log('appendFile: ','Archivo actualizado.');