// load the things we need
var express = require('express');
var app = express();
const storage = require('node-sessionstorage')

var body_parser = require('body-parser');


// set the body parser
app.use(body_parser.urlencoded({extended:false}));
// set the view engine to ejs
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    var people = []
    res.render("pages/index",{
      people: people
    });
});





app.listen(8080);
console.log('8080 is the magic port');
