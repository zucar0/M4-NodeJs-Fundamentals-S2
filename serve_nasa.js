const https = require('https');
const fs = require('fs');
const path = require('path');

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
        })
    }).on('error', (err) => {
        console.log('Error ', err);
    })
}

getApi();