const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {

    //  const img = fs.readFileSync('./big.img.jpg')  
    //  res.end(img);
    
    
  fs.readFile('./big.img.jpg', (err, data) => {
      
    if (err) throw err;
    res.end(data);
  });


  
});

server.listen(8000, ()=>console.log('listining on 8000...'));
