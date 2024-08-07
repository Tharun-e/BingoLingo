const http = require("http")

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
})
server.listen(3000);