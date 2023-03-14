//const express = require('express');
import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import router from './routers/post.js';
import mongoose from "mongoose";

const app= express();
const URI = 'mongodb+srv://admin:SdY8YHS5stxIW7Dw@cluster0.y7gq4w5.mongodb.net/?retryWrites=true&w=majority';
const PORT= process.env.port||5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connect to mongoDB success!");
})
.catch(err=>{
    console.log('err',err);
})

app.use('/post',router);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})