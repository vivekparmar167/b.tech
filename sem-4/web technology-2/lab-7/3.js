const express=require('express');
const app=express();
const fs=require('fs');

app.get('/',(req ,res)=>{
        res.send(fs.readFileSync('dashboard.txt','utf-8'));
});
app.get('/about',(req ,res)=>{
    res.send(fs.readFileSync('about.txt','utf-8'));
});



app.listen(8000,()=>{
    console.log("server started");
})