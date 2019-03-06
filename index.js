//import express
let express = require('express')

//import body-parser
let bodyParser = require('body-parser');

//import mongoose
let mongoose = require('mongoose');

//import routes
let apiRoutes = require('./api-routes')

//init the app
let app = express();

//server setup port
var port  =  process.env.PORT || 8080;

//configure body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//send message for default url
app.get('/',(req,res) => {
    res.send('hello world! with express and Nodemon')
});

//use apiRoutes in app
app.use('/api',apiRoutes)

//connect to mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub')

var db = mongoose.connection;

//launch app to listen to a specified port
app.listen(port, function(){
    console.log('Running resthub on port ' + port);
});