
var user = require("../../../models/signups");
var sequelize = require('sequelize');
var constants = require("../../../config/constants");
var requestHelper = require("../../../helpers/request");
var responseHelper = require("../../../helpers/response");
var db = require('../../../index');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var main = {
    title: "Hello World",
    statusCode: constants.HTTP.CODES.SUCCESS
}

function validateSignup(body) {
    if (body.UserName != null && body.Email != null && body.Password != null && body.CountryName !=null && body.CityName !=null && body.PhoneNumber !=null && body.UserType !=null ) {
        return true;
    }   ///*** Add Email regex here as well */

    return false;
}

//extra work
main.me = function(req, res) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });    
    jwt.verify(token, "mySecret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // console.log(decoded.id);
     var sql = "SELECT * FROM signups WHERE id=?";
     let userId = [decoded.id];
     db.db.query(sql , [userId],(err , user) => {
         if (err) throw err;
         res.status(200).send(user);
         //console.log("User is",user);
     });
    });
  }

main.home = function (req, res, next) {
    // console.log(db);   
    db.db.query('SELECT * FROM signups', null, (err, result)=> {
        if (err) throw err;
        res.send(JSON.stringify({"status": 200, "response": result}));
    });       
}

main.signup = function (req, res, next) {
   const user = req.body;
    //console.log(user);
     var hash = bcrypt.hashSync(req.body.Password, 8);
    var sql ="INSERT INTO signups (UserName,Email,Password,CountryName,CityName,PhoneNumber,UserType,userAvatar) VALUES ?";
    let userr = [
        [req.body.UserName, req.body.Email, hash,req.body.CountryName,req.body.CityName,req.body.PhoneNumber,req.body.UserType,req.file.path]
    ];
    db.db.query(sql, [userr], function (err, user) {
    if (err) throw err;
    // console.log(user);
    // create a token
    // var token = jwt.sign({ id: user.insertId }, "mySecret", {
    //     expiresIn: 86400 // expires in 24 hours
    //   });
    res.send({ status:200,auth: true }); ///
//res.send(user)
  });
}

main.login = function (req, res, next) {

    var sql_query = "SELECT * FROM signups WHERE Email=?";
    let emId = [req.body.Email];
    db.db.query(sql_query ,[emId] , (err , result)=> {
        if (err) return res.status(500).send('Error on the server.');
        if (!result) return res.status(404).send('No user found.');
         console.log(req.body.password);
         console.log(result);
        //result.toString();
        var passwordIsValid = bcrypt.compareSync(req.body.Password, result[0].Password);
        // console.log(passwordIsValid);
        // console.log(result[0].id);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        var token = jwt.sign({ id : result[0].id},"mySecret",{
            expiresIn: 86400
        });
        res.send({ status:200, auth: true, token: token });
    });
  }

main.logout = function(req , res ){
    res.status(200).send({ auth: false , token: null});
}
module.exports = main;