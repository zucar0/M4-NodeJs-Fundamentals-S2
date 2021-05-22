const https = require('https');
const fs = require('fs');
const path = require('path');

// function descargarImagen(url, localPath){
//     var fullUrl = url;
//     var file = fs.createWriteStream(localPath);
//     var request = https.get(url, function(response){
//         response.pipe(file);
//     });
// }

function descargarImagen(url, imageName){
    let file = fs.createWriteStream(path.join(__dirname, '', imageName + ".png"));
    https.get(url, function(response){
        response.pipe(file);
    });
}

function getApi(){
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (res) =>{
        let data ='';

        res.setEncoding('utf-8');

        res.on('data', (chunk)=>{
            data += chunk;
        })

        res.on('end', ()=>{
            let body = JSON.parse(data);
            console.log('Título ', body.title);
            console.log('\nExplicación ', body.explanation);
            console.log('\nUrl ', body.url );
            //Se manda llamada la función para descargar la imagen
            // descargarImagen(body.url, path.join(__dirname, body.title));
            descargarImagen(body.url,body.title);
        })

    }).on('error', (err) => {
        console.log('Error ', err);
    })
}

getApi();