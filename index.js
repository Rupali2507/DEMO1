const express = require("express");
const app =express();

app.get('/api/get',(req,res)=>{
    res.send({message:"Hello back to nodejs"})
})

