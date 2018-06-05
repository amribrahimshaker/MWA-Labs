var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');

const decipher = crypto.createDecipher('aes256', 'asaadsaad');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  var dbo = client.db("mwaDB");
  // dbo.collection("homework7").findOne({}, {_id: 0}, function(err, data) {
  dbo.collection("homework7").findOne({}, {fields:{_id: 0}}, function(err, data) {
        if (err) throw err;
        
        console.log("data from DB: " + JSON.stringify(data));
        client.close();

        let decrypted = '';
        decipher.on('readable', () => {
            const data = decipher.read();
            console.log("readable decipher data: " + data);
            if (data) {
                decrypted += data.toString('utf8');
            }
        });
        decipher.on('end', () => {
          console.log("end decipher: " + decrypted);
            res.send(decrypted);
        });
        console.log("write data to decipher: " + data.message);
        decipher.write(data.message, 'hex');
        decipher.end();


        // res.send(data);
  });
});

  
});

module.exports = router;
