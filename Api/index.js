/* This is the entry point for our application */
require ('dotenv').config();

const express = require('express');
const mongodb = require('mongodb');
const  mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes');

const app = express();
app.use('/api',routes);
app.use(express.json());


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error',(error)=>{
    console.log(error)
})
database.once('connected',()=>{
    console.log('Database Connected');
})

