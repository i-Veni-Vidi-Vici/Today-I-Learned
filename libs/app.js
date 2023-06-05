// 다음을 response하는 api server를 만들고 e2e test를 수행하는 코드를 git에 올려주세요.

// [url]

// GET /helloworld


// [response]

// {

// id: 1,

// message: ‘hello, world!’

// }

const express = require('express');
const app = express();

app.get('/helloworld', (req, res) => {
  res.json({
    id: 1,
    message: 'hello, world!'
  })
});


const server = app.listen(8000, () => {
  console.log("8000 start");
});

module.exports = {app, server}

