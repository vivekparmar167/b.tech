var http = require('http');
const fs=require('fs');

//create a server object:
http.createServer(function (req, res) {
    if(req.url=='/'){
        fs.readFile('dashboard.txt','utf-8',(err,data)=>{

            res.end(data);
        })

    }else if(req.url=='/about'){
        fs.readFile('about.txt','utf-8',(err,data)=>{

            res.end(data);
        })

    }
}).listen(8000); //the server object listens on port 8080
