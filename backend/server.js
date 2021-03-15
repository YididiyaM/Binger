const mongoose = require('mongoose');
const express = require('express');
const cors = require ('cors');
const passport= require('passport-local');
const passportLocal = require('passport-local')
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require('./user');

const app = express();

mongoose.connect('mongodb+srv://bingerUser:bingerPassword@cluster0.ibeyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("Mongoose is connected")
})
//Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    cors({
      origin: "http://localhost:3000", // <-- location of the react app were connecting to
      credentials: true,
    })
  );
  app.use(
    session({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(cookieParser("secretcode"));
  
  //Routes

  app.post('/register', (req,res)=> {
    User.findOne({username: req.body.username}, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password,
        });
        await newUser.save(); 
        res.send("User created");
      }
    })
      console.log(req.body)
  })

  app.post('/login', (req,res)=> {
      console.log(req.body)
  })

  app.get('/user', (req,res) => {

  })

  //Start server
app.listen(4000, ()=>{
    console.log('Server has started')
})