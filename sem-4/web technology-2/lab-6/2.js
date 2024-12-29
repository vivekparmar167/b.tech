var http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('<h1>dashboard</h1>');

    }else if(req.url=='/about'){
        res.end('<h1>about</h1>');

    }
    else if(req.url=='/contactus'){
        res.end('<h1>contactus</h1>');

    }
    else if(req.url=='/blog'){
        res.end('<h1>blog</h1>');

    }
    else if(req.url=='/home'){
        res.end('<h1>home</h1>');

    }
});
server.listen(8000,()=>{
    console.log("server started");
})