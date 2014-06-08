
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// all environments
app.set('port', process.env.PORT || 3000);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'app')));

io.set('log level', 1);
io.sockets.on('connection', require('./routes/socket'));

server.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
