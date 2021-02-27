const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const password = require ('passport');
const passportLocal = require ('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const bodyParser = require('body-parser'); 
const { default: userEvent } = require('@testing-library/user-event');
const app = express(); 
const User = require("./user");

mongoose.connect("mongodb+srv://bingerUser:<bingerPassword>@cluster0.ibeyl.mongodb.net/Binger?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, ()=>{
    console.log("Mongoose is Connected")
})

//Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true
}))
app.use(session({
    secret:"secretcode",
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser("secretcode"))
//routes
app.post('/login', (req,res)=>{
    console.log(req.body);
})
app.post('/register', (req,res)=>{
    User.findOne({username: req.body.username}, async (err, doc)=>{
        if(err) throw err;
        if(doc) res.send("User already exists");
        if(!doc) {
            const newUser = new User ({
                username: req.body.username,
                password: req.body.password,
            });
            await newUser.save();
            res.send("User Created");
        }
    })
})
app.get('/user', (req,res)=> {
    res.send(req.user)
})
app.listen(4000, ()=> {
    console.log('Server Has Started')
})
