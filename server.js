const path=require('path');
//Importación del módulo fs
 const fs = require('fs');

 fs.writeFile(path.join(__dirname,'/ejemplo2.txt'),'Este es el texto dos', {encoding:'utf-8'},(err)=>{
     if(err) throw err;
     console.log('¡Archivo creado!');
 });

 fs.writeFile(path.join(__dirname,'/ejemplo2.pdf'),'Este es el texto dos', {encoding:'utf-8'},(err)=>{
    if(err) throw err;
    console.log('¡Archivo creado!');
});

