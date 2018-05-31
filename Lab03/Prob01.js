/*
var dns = require('dns');
var w4 = dns.resolve4('www.mum.edu', function (err,addresses){
    console.log(addresses);
})
*/
var dns = require('dns');
var w4 = dns.resolve4('www.mum.edu',  (err,addresses) => {
  if (err) throw err;
  console.log(addresses);
})