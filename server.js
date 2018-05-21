const http = require('http');
const fs = require('fs');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,'build')));

console.log('server is running');

var httpServer = http.createServer(app);

httpServer.listen(8080);


















