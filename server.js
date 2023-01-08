// load the things we need
var express = require('express');
var app = express();
const fs = require('fs');





const { writeFile } = require('fs/promises');
var cookieParser = require('cookie-parser');

var body_parser = require('body-parser');



// set the cookie parser
app.use(cookieParser());
// set the body parser
app.use(body_parser.urlencoded({extended:false}));
// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var people = req.cookies;
    console.log("Cookies:",req.cookies);
   

    res.render("pages/index",{
      people: people
    });
});



// añadir personas
app.post('/add', function(req, res) {
    console.log("hey añado");
    res.cookie(req.body.nombre , req.body.valor);
    res.redirect('/');
});

app.listen(8080);
console.log('8080 is the magic port');
