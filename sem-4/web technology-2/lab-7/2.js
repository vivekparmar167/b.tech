const express=require('express');
const app=express();

app.get('/',(req ,res)=>{
        res.end('<h1>dashboard</h1>');
});
app.get('/about',(req ,res)=>{
    res.end('<h1>about</h1>');
});
app.get('/contactus',(req ,res)=>{
    res.end('<h1>contactus</h1>');
});
app.get('/blog',(req ,res)=>{
    res.end('<h1>blog</h1>');
});


app.listen(8000,()=>{
    console.log("server started");
})