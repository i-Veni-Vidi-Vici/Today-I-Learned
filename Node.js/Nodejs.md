# Node.js
- 2008년에 구글이 javascript 성능을 개선시키기위해 크롬에 v8엔진 개발
- 이후에 v8엔진을 기반으로해 node.js가 탄생 
- node.js는 컴퓨터를 직접제어



- 터미널에서는 일반 유저폴더에서 적용되므로 ```Node.js``` 코드가있는 폴더로 변경하기
  - ```
    cd C:\Users\SeongIl\Desktop\코딩\Node.js //change directory
    ``` 		
  - ```
    dir 	//현재 directory에 있는 파일정보들이보임
      ```

  - ```
    node 파일이름.js 		//해당코드실행
    ```

- ```javaScript``` 문법을 통해서 ```node.js```의 필요한 기능을배우고 애플리케이션을 만듬

- ```Node.js```는 웹서버 기능을 내장하고있기때문에 아파치 서버는 할수없는 내용들을 할수가있다.


## 동기와 비동기
- ```synchronous``` & ```asynchronous```
- ```동기``` 한일이 끝날때까지 다음으로 안넘어감
- ```비동기``` 한일이 안끝나도 그다음으로 넘어가고 그일은 계속진행됌


### 동기
- ```javascript
   console.log('A');
   var result = fs.readFileSync('./sample.txt', 'utf8'); 		//callback 인자없음, 리턴값을 직접 줌
   console.log(result);
   console.log('c');						//a,result,c 순서로 출력
   ```
 			
### 비동기
- ```javascript
  console.log('A');
  fs.readFile('./sample.txt', 'utf8',function(err,result){	//callback인자가 있어서 대입x
      console.log(result);
  }); 			//파일을읽는 과정이끝나면 첫번째 인자는 에러가있다면 에러를 제공 두번째인자는 파일의 내용을 공급

  console.log('c');		// a,c,result 출력 파일을 읽기시작하는 과정이시작되면서 그 다음코드c가출력되고 이전실행작업이 끝나면 result출력
  ```
- ```callback``` 인자		//파일을 읽은 다음에 나중에 함수를 호출하는것을 통해서 나를 호출해

- ```
  var a = function(){
    console.log('A');
  }				//함수가 값이다
  ```


- ```javascript
  function slowfunc(callback){
  callback();
  }
  slowfunc(a);		//callback = a = function(){}=callback();
  ```

## 터미널
- ```
  cd C:\Users\SeongIl\Desktop\코딩\Node.js 
  node main.js
  ```
  - ```node```로 ```main.js``` 실행      
 
- ```
    app.listen(3000);	
  ```
  - ```3000```이기때문에 ```localhost:3000``` 입력 해야된다      
 
- ``` 
  Ctrl + c 				
  ```
  	- 현재 실행되고있는것 끄기 그럼 웹브라우저가꺼짐 웹브라우저를꺼야 코드가적용됨     
  	
- ```\n``` 		//줄바꿈 코드

## template Literal

- ```javascript
  var name = 'vvv';		
  var letter = `dede ${name}  			//물결표시위에있는 ` 을 이용하여 더 간단히 문자열표시가능
  qdqwdqdwdq`;					            //${}로 변수표현하고 \n 엔터기능대신 그냥 엔터를 치면됨
                                    //마지막도 '따음표대신 `를사용
                                    ```
- ```javascript
  var http = require('http'); 		//http를 요구한다
  var fs = require('fs');         //fs모듈 사용
  var url = require('url'); 		//url이라고하는 모듈을 url로 사용할것이다
  ```

- ```javascript
  response.end(fs.readFileSync(__dirname + _url)); 		//파일들을 읽어주는코드
  ```

- ```javascript
  var title = queryData.id; 				//2순서 tilte= HTML
  <title>WEB1 - ${title}</title>			//3순서 ${title} = HTML 	//동적으로 코드변경
  <li><a href="/?id=HTML">HTML</a></li> 		//1순서 id=HTML을 대입
  ```

- ```javascript
   var _url = request.url; 			//2순서 _url은 요청한 url값으로대입
   if(_url == '/'){				//3순서 _url=='/' 이라면 title에 Welcome 대입 	//동적으로 코드변경
      title= 'Welcome';
   }
   <h1><a href="/">WEB</a></h1>		//1순서 주소 /를 불러오기
   ```

- ```javascript
  response.writeHead(200);		//웹서버와 웹브라우저 통신완료 200
  response.end(template); 	
  ////////////////////// 
  response.writeHead(404); 			//웹서버와 웹브라우저 통신불가 404
  response.end('Not found');
  ```
  

- ```javascript
     if(queryData.id === undefined){ 		//undefined는 값이 없다는뜻(본문)
       title = 'Welcome';				
       description = 'Hello, Node.js';
     }
     ```
## CRUD
- ```Create```
- ```Read```
- ```Update```
- ```Delete```

- ```cd ..``` 		//부모 디렉터리로 이동

### file read
- ```javascript
  const fs = require('fs') 		//fs = file system 약자 file system을 불러오기
  
  fs.readFile('sample.txt', 'utf8', function(err,data){       //sample.txt를 불러오고 utf8형식으로 
    console.log(data);				  //data를 가져오기
  });
  ```
## parameter Argument
- ```javascript
    var args = process.argv; 		// process.argv 는 배열에 실행한 노드파일위치, 실행한 파일위치, 이후 추가로 입력된값이 있는 배열
    console.log(args); 			
    if(args[2] === '1'){			//콘솔에 node ex.js 1 입력하면 c가출력됌
      console.log('c');
    } else {
        console.log('d');
    }
    ```
- ```javascript
  const testFolder = '../data'; 		// ../부모디렉터리 ./ 현재디렉터리
  const fs = require('fs');

  fs.readdir(testFolder, function(error, filelist){ 		//파일 목록알아내서 filelist 에 배열로저장
    console.log(filelist);    				
  })
  ```


- ```javascript
  <ul>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>			
    <li><a href="3.html">JavaScript</a></li>
  </ul>
  ```
  - 위 코드를 ```Node.js```의 파일 불러오기를 통해 아래코드로 변경
- ```javascript
    fs.readdir('./data', function(error, filelist){			//파일명 filelist에 배열로저장
          var list = '<ul>'
          var i = 0;	
          while(i<filelist.length){						//파일리스트의 길이만큼
            list = list +`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`; 	//파일명 filelist[]를 이용
            i++;
          }
          list =list+'</ul>';
    }
    ```

## 함수
- ```javascript
  function sum(a,b){
    return a+b;  			//return은 함수의 출력을 담당하며, return이 나온즉시 함수를 종료 함수안의 이후코드 실행 x
  }
  console.log(sum(2,4));  
  ```

## 패키지 매니저
- 소프트웨어들을 관리하고 설치하고 삭제 업데이트해주는 것
- ```NPM```
~~- ```https://pm2.keymetrics.io/```~~
- ```
  npm install pm2 -g
  ``` 	
  - ```-g``` global의 약자 독립된 소프트웨어라서 어디든 설치돼야함 전역에 pm2설치
- ```
  pm2 start 파일 --watch
  ```
  - 파일코드가 수정되도 ``cmd``를껏다 안켜도 적용되는코드
- ```
  pm2 log
  ```
    - 코드 오류나 수정된것들 알려줌

- ```
  pm2 delete main
  pm2 start main.js --watch --ignore-watch="data/*"
  ```
  - ```watch```옵션을 주면 파일이 변경됐을때 앱을 리로드 ```data```파일이 수정되면 리로드되서 ```data```파일에대해서는 설정 x

- ```
  pm2 start main.js --watch --ignore-watch="data/* sessions/*"  --no-daemon
  ```
    - 파일을 수정하거나 삭제 생성할때 우리가 원하지않는 타이밍에 꺼졌다 켜짐
    - ```--no-daemon``` pm2를 실행하면서 로그가 출력되도록 함
    - ```--ignore-watch="data/* sessions/*``` 세션 여러개의 디렉터리를 관리할때 특정 디랙토리에 대한 ```watch```를 하지 않기 

- ```pm2 list```      // 현재 실행중인 프로세스 목록 제공
- ```pm2 kill```  		//```pm2```로 켜진거 다끄기


## html

- ```javascript
  var app = http.createServer(function(request,response){})
  ```
  - ```createServer```는 ```Node.js```로 웹브라우저로 접속이 들어올때마다 ```createServer```의 콜백함수를 ```Node.js```가 호출 
  - ```request```는 요청할때 웹브라우저가 보낸 정보들
  - ```response```는 응답할때 우리가 웹브라우저에게 전송할 정보들


### 배열
- ```javascript
  var members = ['a', 'b', 'c'];	//배열
  var i = 0;
  while(i < members.length){			//배열은 while 문으로 순서있게 뽑기
    console.log('array :',members[i]);
    i = i + 1;
  }
  ```
  -  ```배열```은 순서, 숫자가 있다. 

- ```javascript
    var roles = {				//객체
      'programmer':'a',
      'designer' : 'b',
      'manager' : 'c'
    }
    for(var n in roles){			//객체의 키값이 n에들어감
      console.log('object => ', n, 'value => ', roles[n]);	//객체를 배열로 표시가능 따라서 값을 표현가능
    }

- ```javascript
    var o = {			//객체
      v1:'v1',
      v2:'v2',
      f1:function (){
          console.log(this.v1);		//객체를 this로 받는다
      },
      f2:function (){
          console.log(this.v2);		//객체를 this로 받는다
      }
    }
    o.f1(); o.f2(); 

- ```객체``` 순서가없고, 숫자번호대신 이름을지정할수있다.

## Module
- 객체를 정리할수있는 도구

```mpart.js파일```

- ```javascript
  var M ={
    v: 'v',
    f:function(){
        console.log(this.v);
    }
  }
  module.exports =M;		//이 파일 밖에서도 객체M을 사용할수 있도록 함
  ```
```b파일```
- ```javascript
  var part = require('./mpart.js') 	//모듈을 가져오는것 ./ 현재 디렉터리
  console.log(part);			// {v:'v', f:function()} 출력
  part.f();				//v출력
  ```

## 입력 정보에 대한 보안
- ```javascript
  var filteredId = path.parse(queryData.id).base; 		
  fs.readFile(`data/${filteredId}`, 'utf8', function(){})
  ```
  - 기존 ```queryData.id```로 하면은 주소창에 ```id=../password```(패스워드 정보가있는곳)을 검색하면 그곳으로 들어가짐
  - 따라서 이런방법으로 컴퓨터를 탐색할수가있음
	- ```path.parse```를 통해 ```filteredId```로 상위디렉터리를 가는것을 차단시킬수있음
## 출력정보에 대한 보안
- ```javascript
  <script>
   location.href ="https://naver.com"		//브라우저에서 글을 작성할때 이렇게 코드를 작성하면 그대로 코드가실행됨
  </script>
  ```
### npm package
- cmd에입력
  - ```npm init``` 			//```package.json``` 생성
  - ```npm install -s sanitize-html```		// ```-g```는 컴퓨터 전체 ```-s```는 우리가하는 프로젝트에서만 사용 ```sanitize-html``` 사용할 패키지이름

- ```javascript
  var sanitizeHtml =require('sanitize-html'); 			//sanitize-html을사용
  const dirty = 'some really tacky HTML';
  const clean = sanitizeHtml(dirty);
  /////////////////////////////
  var title = queryData.id;
  var sanitizedTitle = sanitizeHtml(title);			//제목도 거르기
  var sanitizedDescription = sanitizeHtml(description,{	
  allowedTags:['h1']     //allowedTag로 태그 허용가능, h1은 디폴트값으로 수정되었음
  });
  ```

## API
- ```Application Programming Interface```
- ```fs.readFile```
  - ```node.js``` 개발자가 만든 함수 어떤원리로 동작하는지는 알기어려움
  - ```이름```과 ```파라미터 리턴값```은 이 함수를 만든사람과 이것을 이용하는 개발자와의 약속된 조작 장치
  - 즉 ```interface```라고 부른다.

- ```javascript
  var app = http.createServer(function(request,response){})
  ```
  - 크리에이트서버를 이용해서 웹서버를 만들고, 웹서버로 외부에서 요청이 들어올때마다 첫번째인자로 해당되는 함수를 요청
  - 함수의 첫번째 파라미터 ```request```는 웹브라우저로부터 요청된 정보를 담고있는 인자로 약속
  - 두번째 파라미터 ```response```는 함수를 통해서 사용자에게 응답할수있는 데이터들을포함한 정보를 인자로 약속

- ```javascript
  app.listen(3000);
  ```	
  - 요청에대해서 응답할수있도록 ```http```서버를 구동시키는것 ```server.listen([port][,host][, blocking])``` 에서 ```[, ]```생략가능
## 기타
- ```database``` 공부하기			//몽고디비, 마이sql
- ```nodejs awesome``` 검색해보기 		
  - ```nodejs```의 기본적인 모듈공부하는게 가장중요
  - ```nodejs```의 주목받는 모듈이 나옴 모듈을 많이공부해보기
- ```framework```공부하기			//공통적인부분을 미리구현해놓은것 자신일에 집중가능함
