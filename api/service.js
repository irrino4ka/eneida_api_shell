

var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;


var eneida = require('./routes/eneida');

app.use('/api/eneida', eneida);

app.listen(port);

console.log('Service started on: ' + port);
