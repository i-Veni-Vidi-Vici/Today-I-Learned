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
