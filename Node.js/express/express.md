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
### redirect
##### node.js
- ```javascript
 fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.writeHead(302, {Location: `/page/${title}`});	 	//기존 node.js의 redirect 방식
        response.end();
      })
      ```
##### express
- ```javascript
 fs.writeFile(`data/${title}`, description, 'utf8', function(err){
	 response.redirect(`/page/${title}`)			//express 의 redirect방식, 이 주소로이동시킴
 }
 ```
- ```javascript
 else if(pathname === '/update_process'){	//기존 node.js의 post방식을 if절로 처리
 ```
- ```javascript
  app.post('/update_process', function(request, response){		//express의 post절을 이용하여 사용
  ```
///////////////////////////수정
## middleware parameters use
Third-party middleware	//Third-party middleware는 express가 제공하는 것이 아닌 제3자가 만든것
- body-parser		// 그중 post 방식으로 전송된 데이터를 쉽게 가져오는 Third-party middleware
- npm install body-parser --save	//터미널 body-parser설치 body=웹브라우저에서 요청한 데이터의 본체, header= 그본체를 설명하는 것, parser= 데이터의 본체를 분석
- var bodyParser = require('body-parser');	//body-parser모듈 불러오기
- app.use(bodyParser.urlencoded({ extended: false }))	//form 데이터를 사용할때 사용,  body-parser가 만들어내는 middleware을 실행하는 코드, app.post()의 콜백함수 첫번째 인자 request에 body라는 property가 생성됨

-  app.post('/create_process', function(request, response){	
   var body = '';						//기존에는 body를 직접 만듬
  request.on('data', function(data){
      body = body + data;
   });
  request.on('end', function(){
       var post = qs.parse(body);
       var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.redirect(`/page/${title}`)
      })
   });
});
->
- app.post('/create_process', function(request, response){
      var post = request.body;			//body를 body parser middleware를 통해 request.body를 통해 body를 직접 만들지 않고 간결하게 구현 가능
      var title = post.title;
      var description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
        response.redirect(`/page/${title}`)
      })
 });
  
compression middleware
- npm install compression --save	//compression 모듈설치
- var compression = require('compression');  	//compression 모듈 불러오기
app.use(compression());	//compression middleware 실행
- ctrl + shift + R 	//캐시 삭제하여 강제로 리로드
