//after making a db in mongodb cloud successfully
// to make connection with database we want a package 
// as we cannot connect express with mongoDB so we need a external package moongoose  :: npm i mongoose

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME =process.env.DB_USERNAME;
const PASSWORD =process.env.DB_PASSWORD;

 const Connection =() =>{
    // Its not a good practice to reveal our usename and password in order to save this 
    // we download a file / package :::  npm i dotenv
    // to concat our string variable we use backtick (tab ke upar wala button )
    const MONGODB_URI =`mongodb+srv://${USERNAME}:${PASSWORD}@merntodo.ss9ekwg.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

    mongoose.connection.on('connected' ,()=>{
        console.log("Database connected SUccessfully");
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Database Disconnected');
    })

    mongoose.connection.on('error',()=>{
        console.log('Erroe while connecting with the database ', error.message);
    })
}

export default Connection;