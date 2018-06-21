var express = require('express');
var bodyparser = require('body-parser');
//var cors = require('cors');
var path = require('path');
var mysql = require('mysql')


var app = express();
const port = 3000;

//app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));




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

app.listen(port , ()=> {
    console.log("Server Listening at port:"+port);
});