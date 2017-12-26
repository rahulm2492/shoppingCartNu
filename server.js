
var express=require('express');
var path = require('path');
var bcrypt = require('bcrypt-nodejs');
var pricing = require('./client/mock-data/price.json')
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var app=express();


var jwt = require('jsonwebtoken'); 
var config = require('./config'); // get our config file

var User   = require('./userModal'); 
// mongoose.connect(config.database); // connect to database
// app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname,  'dist')));
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(8080, '127.0.0.1',function(){
console.log('Listening on port %d', server_port);
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}



app.post('/authenticate', function(req, res) {
  
    // find the user
    User.findOne({
      email: req.body.email
    }, function(err, user) {
  
      if (err) throw err;
      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
     
        // check if password matches
        if (!bcrypt.compareSync( req.body.password, user.password)) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
  
          // if user is found and password is right
          // create auser token
         
          
         // user._id = user._id.toString();
         console.log(user.toObject({getters:true,virtuals:true}));
          var token = jwt.sign(user.toJSON(), app.get('superSecret'), {
            expiresIn: 60*60 // expires in 24 hours
          });
          console.log(token);
          res.cookie(token);
          
                  return res.redirect('/set');
          // // return the information including token as JSON
          // res.json({
          //   success: true,
          //   message: 'Enjoy your token!',
          //   token: token
          // });
        }   
  
      }
  
    });
  });
  



app.get('/set', (req, res, next) => {
  console.log(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");


  var userData = { 
    email: 'mail@',
    username: 'rahultest',
    password: 'pwd',
    passwordConf: 'pwd',
  };

  // save the sample user
  User.create(userData, function (err, user) {
    if (err) {
      return next(err)
    } else {
      return res.json();
    }
  });
  res.sendFile(path.resolve(__dirname, 'client', 'mock-data', 'price.json'));



});
app.get('/price/:id', (req, res) => {
 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //var price={'Classic':pricing.Classic,'Standout':pricing.Standout,'Premium':pricing.Premium}
  res.send(JSON.stringify({price:pricing}));
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

