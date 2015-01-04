#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var app = express();
var ipaddress = '127.0.0.1';
var port      = 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
app.use('/rest/user', require('./rest/user'));
app.use(express.static(__dirname + '/static'));
*/

app.listen(port, ipaddress, function() {
  console.log((new Date()) + ' Server is listening on ' + ipaddress + ':' + port);
});
