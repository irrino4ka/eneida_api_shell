var fs = require('fs');
var Eneida = JSON.parse(fs.readFileSync('./api/models/eneida.json', 'utf8'));

exports.list_all = function(req, res) {
    res.send(Eneida);
};

exports.read = function(req, res) {
    res.send(Eneida);
};