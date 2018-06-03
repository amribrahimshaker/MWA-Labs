var express = require('express');
var fetch = require('node-fetch');
const {Observable, from} = require('rxjs');

var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.get('/', function (req, res, next) {

  const dataPromise = fetch('http://jsonplaceholder.typicode.com/users/');
  dataPromise
      .then(response => response.json())
      .then(data => {
        res.send(data);
      })
      .catch(err => res.end(err));

});


router.get('/', function (req, res, next) {

    const dataPromise = fetch('http://jsonplaceholder.typicode.com/users/');
    const jsonObservable = from(dataPromise);
    jsonObservable.subscribe(promiseResponse => {
        
      const dataObservable = from(promiseResponse.json());
      dataObservable.subscribe(data => {
         // console.log(data);
         res.send(data);
      }, err => {
        res.end(err);
      });

    }, err => {
        res.end(err);
    });

    // const data = [{id : 1},{id : 2}];
    // from(data).subscribe(obj => console.log(obj));
});


router.get('/', async function (req, res, next) {
    
    try{
        const dataPromise = await fetch('http://jsonplaceholder.typicode.com/users/');
        const data =  await dataPromise.json();

        // console.log(data);
        res.send(data);
    }catch(err){
        res.end(err);
    }
});

module.exports = router;
