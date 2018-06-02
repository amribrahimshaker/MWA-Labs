const http = require("http");
const url = require("url");
const { fork } = require('child_process'); 

const server = http.createServer(); 
server.on('request', (req, res) => { 

    // http://localhost:8000/?url=file.txt
    const myURL = url.parse(req.url,true);
    const filePath = myURL.query.url;

    console.log("filePath: " + filePath);


    const childProcess = fork('longOperation.js'); 
    childProcess.send(filePath); 
    childProcess.on('message', data => { 
        console.log(`Data received: ${data}`);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(`${data}`); 
        res.end();

        // res.write(`${data}`); 
    //    res.end();
         
    }); 
    console.log("DONE !!");
});

server.listen("8000",() => console.log("Listen to 8000..."));