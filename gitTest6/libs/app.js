const express = require("express");

const app = express();

app.get("/hello", (req, res)=> {
    res.json({
        result: "hi",
        val: 30
    })
})

const server = app.listen(8000, ()=>{
    console.log("8000 open")
})

module.exports= {app, server};