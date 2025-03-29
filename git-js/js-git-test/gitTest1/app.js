const express = require('express');

const app = express();

app.get('/hello', (req,res)=>{
    return res.json({
        result: true,
        message: "hi"
    })
})

const server = app.listen(8000, ()=>{
    console.log('start with 8000')
})

module.exports = {app, server};