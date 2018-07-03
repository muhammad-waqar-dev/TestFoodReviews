
var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var index = require('./routes/index');
var api = require('./modules/api/module');


var app = express();
const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(cors());
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index);
app.use('/api', api);


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testfoodreviews'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})


//extra work
//app.get('/',(req,res)=>res.send('hello World'));


app.listen(port , ()=> {
    console.log("Server Listening at port:"+port);
});

module.exports.db = connection;