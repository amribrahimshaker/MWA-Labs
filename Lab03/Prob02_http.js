const fs = require('fs');
const myserver = require('http');

myserver.createServer((req,res)=>{
    
    const src = fs.createReadStream('./big.img.jpg');
    src.pipe(res);


}).listen(8888, ()=>console.log('listining on 8888...'))