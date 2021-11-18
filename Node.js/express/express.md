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
##### node.js(기존)
- ```javascript
	 fs.writeFile(`data/${title}`, description, 'utf8', function(err){
		response.writeHead(302, {Location: `/page/${title}`});	 	//기존 node.js의 redirect 방식
		response.end();
	 })
	 ```
##### express()
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

## middleware parameters 사용
#### Third-party middleware	
- ```Third-party middleware```는 ```express```가 제공하는 것이 아닌 제3자가 만든것
- ```body-parser```		// 그중 ```post``` 방식으로 전송된 데이터를 쉽게 가져오는 ```Third-party middleware```
- ```npm install body-parser --save```	
	- 터미널 ```body-parser```설치
	- ```body```=웹브라우저에서 요청한 데이터의 본체
	- ```header```= 그본체를 설명하는 것
	- ```parser```= 데이터의 본체를 분석
- ```var bodyParser = require('body-parser');```	//```body-parser```모듈 불러오기
- ```app.use(bodyParser.urlencoded({ extended: false }))```	
	- ```form``` 데이터를 사용할때 사용
	- ```body-parser```가 만들어내는 ```middleware```을 실행하는 코드
	- ```app.post()```의 콜백함수 첫번째 인자 ```request```에 ```body```라는 ```property```가 생성됨

##### node.js(기존)
- ```javascript
	app.post('/create_process', function(request, response){	
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
	```
##### express(변경)
- ```javascript
	app.post('/create_process', function(request, response){
	      var post = request.body;			//body를 body parser middleware를 통해, request.body를 이용하여 body를 직접 만들지 않고 간결하게 구현 가능
	      var title = post.title;
	      var description = post.description;
	      fs.writeFile(`data/${title}`, description, 'utf8', function(err){
		response.redirect(`/page/${title}`)
	      })
	 });
	 ```
  
### compression middleware
- 웹서버가 웹브라우저에게 응답할때 데이터를 압축하여 전송
- 압축을하고 압축을푸는과정이 기존 네트워크 전송비용보다 빠르고 저렴하여 주로 사용
- ```npm install compression --save```	//```compression``` 모듈설치
- ```var compression = require('compression');```  	//```compression``` 모듈 불러오기
- ```app.use(compression());```		//```compression middleware``` 실행
- ```ctrl + shift + R``` 	//캐시 삭제하여 강제로 리로드
## middleware 생성
- ```javascript 
	app.use(,function(request, response, next){
	 ->app.get('*',function(request, response, next){	//app.use처럼 모든요청이 아니라 get 방식으로 들어오는 요청만으로 제한, '*'=모든요청, 불필요한 요청을 제한하는것 결국 두번째 인자로 받은 콜백함수가 middleware임 즉, express에서는 모든것이 middleware라고 할수 있음
	  fs.readdir('./data', function(error, filelist){	//중복되는 코드 fs.readdir를 middleware로 만들기
	    request.list= filelist;
	    next();		//다음에 실행되어질 middleware를 실행할지 안할지를 그 이전 middleware가 결정

	  });
	});
	```
- ```javascript
	app.get('/', function(request, response){ 

		//fs.readdir('./data', function(error, filelist){		//삭제
		  var title = 'Welcome';
		  var description = 'Hello, Node.js';
		  var list = template.list(request.list);	//filelist를 request.list로 변경
		  var html = template.HTML(title, list,
		    `<h2>${title}</h2>${description}`,
		    `<a href="/create">create</a>`
		  );
		  response.send(html);

	});
	```

## middleware 실행순서
##### application-level middleware
- ```var app= express();```
- ```app.use('/',function()),```	// 특정경로```'/'```에 대해서만 동작
- ```app.get('/create', function(request, response){})```	//```method```가 ```get```방식인 경우에만 ```'/create'```경로로만 동작
- ```javascript
	app.use('/user/:id', function (req, res, next) {	// middeleware인 함수인자를 여러개 붙일수있음
	  console.log('Request URL:', req.originalUrl)
	  next()					//다음 함수인자를 호출하는의미
	}, function (req, res, next) {			// middeleware인 함수인자를 여러개 붙일수있음
	  console.log('Request Type:', req.method)
	  next()
	})  
	```
- ```javascript
	app.get('/user/:id', function (req, res, next) {

	  if (req.params.id === '0') next('route')	//req.params.id id=0이면,  다음 route인 app.get('/user/:id', function (req, res, next)이 실행

	  else next()	// req.params.id id=0이 아니면, 다음 함수 인자를 호출
	}, function (req, res, next) {
	  res.send('regular') 	// 요청, 응답 주기 끝내면,  호출도 끝남
	})
	app.get('/user/:id', function (req, res, next) {
	  res.send('special')
	})
	```
	- 두번째 인자 ```function()```을 통해서 사용자가 직접 ```middleware```를 등록할 수 있는데 이것들을 ```application-level middleware```라고 함

#### Third-party middleware
- ```app.use(bodyParser.urlencoded({ extended: false }));```
- ```app.use(compression());```
- ```bodyParser```, ```compression()```등을 ```Third-party middleware```라고함
### 정적인 파일의 서비스
##### 정적인 파일
- ```이미지 파일```
- ```javascript```
- ```css파일```
#### 정적인 파일 사용
- ```public``` 폴더의 ```images``` 폴더에 이미지```(hello.jpg)``` 저장
- ```app.use(express.static('public'));```	
	- 정적인 파일을 사용하기위해 ```public``` 폴더를 ```static``` 폴더로 지정
	- ```public``` 폴더 안의 파일이나 폴더에 ```url```로 접근 가능 이 외에는 접근 불가
- ```http://localhost:3000/images/hello.jpg``` 을 입력하면 이미지가 웹페이지에 출력
- ```html
	`<h2>${title}</h2>${description}
	<img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;"> `	
	```
	- 위 방식을 이용해 이미지 삽입, 크기 ```300px```, ```block```처리를 통해 줄바꿈, 윗 여백 ```10px```설정
## error 처리
#### 404 응답
- ```javascript
	app.use(function(req, res, next) {	// 404응답을 처리하는 middleware를 다른 모든 함수 아래에 추가해야함 middleware는 순차적으로 실행되기때문에 404응답은 마지막에 넣어야함
	  res.status(404).send('Sorry cant find that!');
	});
	error handlers
	```
- ```javascript
	app.use(function(err, req, res, next) { 	// error함수는 4개의 인자를 갖고있음
	  console.error(err.stack);
	  res.status(500).send('Something broke!');
	});
	```
- ```javascript
	app.get('/page/:pageId', function(request, response, next){	//error 함수를 호출하기위해 next 인자추가
		fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
			if(err){
			  next(err);		//err가 존재하면 err실행, 인자가 4개인 error 함수 호출됨
			} else {}
	});
	```
## Router
- 파일로 분리

##### topic.js
- ```javascript
	var express = require('express');   //express 모듈 불러오기
	var router = express.Router();      //express.Router method 호출
	var template = require('../lib/template.js');	//../현재 디렉터리의 부모 디렉터리
	router.get('/create', function(request, response){	})	//기존app을 router로 변경 후 /topic/create를 /create로 변경
	module.exports =router;   //router를 외부로 호출
	```
##### main.js
- ```javascript
	var express = require('express');	//express 모듈 불러오기
	var app = express();	//app으로 express사용
	var topicRouter = require('./routes/topic');
	app.use('/topic', topicRouter);
	```

### 보안
- ```express update```
- ```use TLS(SSL,https)```
- ```use helmet```
	- ```npm install --save helmet```	//```helmet```설치
	- ```var helmet = require('helmet')```	//```helmet```모듈 불러오기
	- ```app.use(helmet());```		//```helmet```사용
- ```use cookies securely```
- ```ensure your dependencies are secure```

### express generator
- ```express```를 사용할 때, 기본적으로 필요한 파일과 코드를 자동으로 만들어줌
- ```npm install express-generator -g``` 	//설치
- ```express -h``` 	//사용설명서 출력
- ```express myapp```	//기본적으로 세팅된  ```express```폴더생성
	- ```cd myapp```
	- ```npm install```	//기본적으로 세팅된 모듈 설치
	- ```npm start``` 	//앱실행
### template engines
- ```pug```	// ```html``` 코드 쉽게 작성
