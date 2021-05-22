//Importación del módulo fs
const fs = require('fs');
const path=require('path');

//Reto 1
data = fs.readFileSync(path.join(__dirname, 'input.txt'), {encoding: 'utf-8'})
console.log('readFileSync: ', data)

let spaces = 0, lines =0;

for (i in data){
    if(data.charCodeAt(i)===10){
        lines++;
    }else if(data.charCodeAt(i)===32){
        spaces++;
    }
}

console.log('Caracteres: ', data.length);
console.log('Lineas: ', lines);
console.log('Espacios: ', spaces);