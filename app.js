var express = require('express');
var roman = require('./lib/roman_numeral');
var to_i = require('./lib/to_i');

var app = express();

app.set('port', process.env.PORT || 3435);


app.use(express.bodyParser());
app.get('/', function(res, req){
    var n = to_i(res.param('n'));
    req.send(200, { number : n, numeral : roman(n) });
});

app.listen(app.get('port'));
console.log('listening on port %d', app.get('port'));
