const express = require("express")

const app =express();

app.get("/hello",(req,res)=>{
    return res.json({
        result: "a",
        val: 3
    })
})

const server = app.listen(8000,()=>{
    console.log("8000 start")
})

module.exports= {app, server}