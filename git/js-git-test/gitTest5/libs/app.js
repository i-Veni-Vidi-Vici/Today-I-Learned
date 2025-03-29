const express = require("express");


const app = express();
app.get("/hello", (req, res)=>{
    return res.json({
        retsult: true,
        message:"hi"
    })
})

const server =app.listen(8000,()=>{
    console.log("hello 8000");
})

module.exports ={app, server}