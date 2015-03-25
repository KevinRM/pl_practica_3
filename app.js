var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var tokens = require('./public/tokens.js')
//var _ = require('underscore');
//var $ = require('jquery');

app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {     
    response.render('index', { title: 'JavaScript parser' });
});

app.get('/parse', function (request, response) {

    console.log(request.query);
    console.log(tokens.tokenizar(request.query.input));
    response.send({ "answer": (tokens.tokenizar(request.query.input)) });
});


app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
   
});