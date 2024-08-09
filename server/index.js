/*const http = require("http");


const server = http.createServer((req,res)=>{
    if(req.method ==='GET'&&req.url === '/'){
        res.end("hello");
    }
    else if(req.method === 'GET' && req.url === '/path'){
        res.end("hi");
    }
    else if(req.method === 'GET' && req.url === '/skct'){
        res.end("hiiii");
    }
});
server.listen(3000);*/
import express from "express";
import mongoose from "mongoose";
import router from "./Router/Routes.js";
const app = express();
app.use(express.json());

app.use("/dom",router)
app.listen(3001);
mongoose.connect("mongodb+srv://sarveshps205:mongodb123@cluster.39zf9.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster"

).then(() => console.log("DB Connected"))
.catch((err) => console.log("error"));


/*const express = require("express");
const server = express();
server.get('/',(req,res)=>{
    res.send("hi");
});
server.get('/sam',(req,res)=>{
    res.send("samsung");
});
server.get('/viv',(req,res)=>{
    res.send("vivo");
});
server.get('/app',(req,res)=>{
    res.send("apple");
});
server.listen(3000);*/