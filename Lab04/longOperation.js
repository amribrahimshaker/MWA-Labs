const fs = require("fs");
var path = require('path');

 
process.on('message', (msg) => {
    console.log(`message received in longOperation.js : ${msg}`); 

    fs.readFile(path.join(__dirname, "/" +msg), 'utf8', (err, data) => {
      
        if (err) throw err;
        console.log(data);
        process.send(data); 
      });


 }); 
 