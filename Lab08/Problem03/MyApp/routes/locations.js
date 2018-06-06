var express = require('express');
var router = express.Router();

var grades = require('../model/grade');
var MongoClient = require('mongodb').MongoClient;

/* GET users listing. */
router.get('/', function(req, res, next) {

  var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  var dbo = client.db("mwaDB");
  // dbo.collection("homework8").findOne({}, {fields:{_id: 0}}, function(err, data) {
  // dbo.collection("homework8").find({}, function(err, data) {
  dbo.collection("homework8").find({}).project({_id: 0}).toArray( function(err, data) {
        if (err) throw err;
        
        console.log("data from DB: " + JSON.stringify(data));
      
        // res.end(JSON.stringify(data));
        res.json(data);
  });
});

  

  // res.json(grades);

  // res.write(JSON.stringify([1,2,3]));
  // res.write(JSON.stringify(grades));
  // res.end();
  // res.send('respond with a resource');
});



// http://localhost:3000/locations/HyVee
router.get('/:name', function (req, res, next) {

  console.log('get by name req.params: ', req.params);

  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var dbo = client.db("mwaDB");
   
    const query = {"name": req.params.name}

    dbo.collection("homework8").findOne(query, function(err, data) {
          if (err) throw err;
          
          console.log("data from DB: " + JSON.stringify(data));
        
          // res.end(JSON.stringify(data));
          res.json(data);
    });


  });
  
});



// Handling post request
router.delete('/', function (req, res, next) {

  console.log('Delete req.body: ', req.body);


  const name = req.body.name;
  // const category = req.body.category;
  // const lat = req.body.latitude;
  // const long = req.body.longitude;

  const doc = {'name': name};

  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var dbo = client.db("mwaDB");
    // dbo.collection("homework8").findOne({}, {fields:{_id: 0}}, function(err, data) {
    // dbo.collection("homework8").find({}, function(err, data) {
      dbo.collection("homework8").remove(doc, function (err, removed) {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send(JSON.stringify({'success': 'false', 'message': 'Unable to delete location!'}));
        else res.send(JSON.stringify({'success': 'true', 'message': 'Location deleted successfully!'}));
    });


  });

});


//http://localhost:3000/locations/
router.post('/',(req, res, next) => {

  console.log('POST req.body: ', req.body);

  const name = req.body.name;
  const category = req.body.category;
  const long = req.body.location[0];
  const lat = req.body.location[1];

  const doc = {
      'name': name,
      'category': category,
      'location': [parseFloat(long), parseFloat(lat)]
  };
  console.log('doc: ', doc);

  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var dbo = client.db("mwaDB");
    
    dbo.collection("homework8").insert(doc, function (err, docInserted) {
        
        if (err) res.send(err);
        else res.send('inserted successfully!');
    });
  });
 
});

//http://localhost:3000/locations/
router.put('/',(req, res, next) => {

  console.log('PUT req.body: ', req.body);

  const name = req.body.name;
  
  const long = req.body.location[0];
  const lat = req.body.location[1];

  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var dbo = client.db("mwaDB");
   
    const query = {"name": name}

    dbo.collection("homework8").findOne(query, function(err, data) {
          if (err) throw err;
          
          console.log("data from DB: " + JSON.stringify(data));

          data.location[0] = long;
          data.location[1] = lat;
          dbo.collection("homework8").update(query,data,function(err, numUpdated){
              if (err) 
                res.send('Unable to update');
              else 
                res.send('Location updated successfully! ' + numUpdated);
          });
        
          // res.end(JSON.stringify(data));
          // res.json(data);
      });
    });


  // const doc = {
  //     'name': name,
  //     'category': category,
  //     'location': [parseFloat(long), parseFloat(lat)]
  // };
  // console.log('doc: ', doc);

  
 
});

//http://localhost:3000/locations/search
router.post('/search', function (req, res, next) {
  const name = req.body.name;
  const category = req.body.category;
  const longitude = parseFloat(req.body.location[0]);
  const latitude = parseFloat(req.body.location[1]);


  console.log('post /search req.body: ', req.body);

  var url = "mongodb://localhost:27017/";

  MongoClient.connect(url, function(err, client) {
    if (err) throw err;
    var dbo = client.db("mwaDB");
    // dbo.collection("homework8").findOne({}, {fields:{_id: 0}}, function(err, data) {
    // dbo.collection("homework8").find({}, function(err, data) {
    dbo.collection("homework8").createIndex({'location': '2d'});

    dbo.collection("homework8").find({'location' : {$near: [longitude,latitude]}  })
        .limit(3)
        .toArray(function (err, dataArray) {

            console.log("dataArray: " + dataArray);
            res.setHeader('Content-Type', 'application/json');
            res.send(dataArray);
        });

  });



});

module.exports = router;
