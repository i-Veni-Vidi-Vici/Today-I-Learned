# Express
- ```node.js```의 ```framework```
- 복잡한 것들을 자동화하여 더 쉽게 코드 작성

## 실습 준비
- ```pm2 start main.js --watch```	 	//파일이 수정될때마다 ```pm2```가 ```main.js```를 자동으로 재실행 시킴으로써 변경된 것을 반영
- ```pm2 log```	// 실행과정중에 에러들을 실시간으로 보여줌 
- ```npm install```	// ```package.json```에 있는 모듈설치
- ```pm2 list```	//실행된 프로세서 목록
- ```pm2 stop main```	// ```main``` 프로세서 중지
- ```npm install express --save```	// ```express framework``` 설치```--save``` : ```package.json```의 ```"dependencies"```에 추가하여 나중에 ```npm install```로 한번에 설치가능하게 함
 
### hello world

- ```javascript
  var express = require('express')	//express 모듈 불러오기
  var app = express()	//express는 함수

  app.get('/', (req, res) => res.send('Hello World!'))	//app은 객체 get = route, routing method 첫번째인자 : path,  res.send('')= 화면에 값을 출력/ (req, res) => res.send('Hello World!') = function(req, res){ return res.send('Hello World!')}; 축약된표현 
  app.listen(3000, () => console.log('Example app listening on port 3000!'))	// listen method가 실행될때 웹서버가 실행되면서 첫번째 인자인 3000번 port로 접속이되고 두번째인자 코드가 실행됨
  ```
- ```javascript
  response.writeHead(200);
  response.end(html);
  ```
  -> ```response.send(html);```	//같은의미, 축약할수 있음

## route parameters

- ```javascript
  app.get('/page/:pageId', function(request, response){	//:pageid에 변수처리를해서 localhost/page/html 처럼 이동가능 최근에 query string을 사용하지 않는 pretty url(clean url)을 사용 pageid 변수는 params에 저장
    fs.readdir('./data', function(error, filelist){
     var filteredId = path.parse(request.params.pageId).base;	  //pageId의 변수를 저장
    }
    fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
      var title = request.params.pageId;		//pageId의 변수를 저장
    }
    ```
