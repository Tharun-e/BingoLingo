/*const http = require("http");


const server = http.createServer((req,res)=>{
    if(req.method ==='GET'&&req.url === '/'){
        res.end("hello");
    }
    else if(req.method === 'GET' && req.url === '/path'){
        res.end("hii");
    }
    else if(req.method === 'GET' && req.url === '/skct'){
        res.end("hiiii");
    }
});
server.listen(3000);*/
const express = require("express");
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
server.listen(3000);