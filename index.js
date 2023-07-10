// to create a express server , we need to install express 
// inorder to install express we need a package.json 
// so to generate empty package.json we write ::  npm init 
// then install express by ::  npm i express


// Earlier we used to import like this 
//const express = require('express');

//now we use 
import Express  from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const __dirname=path.resolve();

// to connect wiht the mongoDb extensions are must at the end 
import Connection from "./database/db.js";
import Routes from './routes/route.js';

const app = Express();

app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',Routes);
app.use(Express.static(path.join(__dirname,"./task-tracker/build")));
app.get('*',function(_,res){
    res.sendFile(path.join(__dirname,"./task-tracker/build/index.html"),function (err){
        res.status(500).send(err);
    })
})


const PORT =process.env.PORT||8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running succesfully on PORT ${PORT} `));

// if we do any changes in our server we need to restart ou server by  :: npm start 
// or instead use to not to restart server again and again manually :: npm i nodemon