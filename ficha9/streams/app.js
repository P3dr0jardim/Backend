var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var flash = require('connect-flash');
var app = express();

app.use(cookieParser()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }})); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port);   
});