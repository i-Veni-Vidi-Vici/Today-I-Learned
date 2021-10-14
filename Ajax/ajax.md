# Ajax
- Asynchronous JavaScript And Xml
- Ajax로 빠르게 동작하는 동적인 웹 페이지를 만들 수 있음
- AJax는 웹 페이지 전체를 다시 로딩하지 않고 웹 페이지의 일부분만 갱신할 수 있게 함
- Ajax는 서버와 통신을 해야되서 꼭 서버를 열어서 웹페이지열기

## 문법
### fetch
- ```fetch``` 
  - 가져오다

- ```fetch('d')``` 		
  - 웹브라우저에게 d를 서버에게 요청해줘
- ```then(응답끝나고실행);``` 	
  - 서버가 응답을 해줘야하는데 그동안 시간이걸림 서버가 응답할때까지  다른일을 하도록 하는것

- ```javascript
	function callbackme(){
		console.log('respond ene');  //콘솔창에 출력
	}
	fetch('css').then(callbackme);   //웹브라우저에게  css를 서버에 요청해주고 끝날때 callbackme를 요청해줘
	console.log(1);                  //callbackme가 응답될때까지 코드는 계속돌아가서 callbackme 보다 1,2가 먼저출력
	console.log(2);
	```
 
- ```then(function(response)```
  - 이름이 없는 함수
  - 함수의 이름이 필요할때는 여기저기서 부를때 필요하지만 익명함수는 그때만사용


- ```javascript
	function callbackme(){
	  console.log('respond ene');     //콘솔창에서 출력
	}
	은
	callbackme = function(){
	  console.log('respond ene');     //콘솔창에 출력
	}
	과 같다
	```

- ```javascript
	따라서 then( function(response){ 		//첫번째함수에 객체 response를 부여
		console.log('respond ene');
	       })  	//이것처럼 익명함수가 탄생
	```
- ```javascript
	then( function(response){ 		
	console.log(response;
	}) 
	```
	- 웹페이지의 검사에서  네트워크와 콘솔로 response 를 확인하면 status가 200이출력
	- 200은 웹브라우저와 서버가 통신할때 웹서버가파일을 정상적으로 잘찾고 응답하면서 성공했다는200을 보내줌
	- 하지만 요청한 파일이 존재하지않으면 404를 보내줌
	- fetch로 서버로 요청할때 웹서버가 응답한 결과를 담고있는 객체가 response이다


- ```javascript
    <script>
    function fetchPage(name){       //중복되는것을 함수로 선언하기
        fetch(name).then(function(response){
            response.text().then(function(text){
                //alert(text);
                document.querySelector('article').innerHTML =text;  //HTML로 홍길동 출력 그런데 이 HTML요소에 접근하여 홍길동을		
            }) 						                                          이순신으로 바꿔 출력하게 만들려면 이속성을 사용해한다.
        });
    }
    </script>
    ```


### hash

- ```lorem100``` 		
  - 100개의 랜덤한 단어를 형성
- ```<p=id="이름"></p>```
  - 세번째 문단에 id설정후 웹페이지에서 세번째문단으로 웹페이지 로딩없이 가고싶을때 기본페이지에
```hash.html#이름```#이름을 적으면 3번째문단으로 스크롤이이동됌
  - 이문단을 조각 fragment라고 하고 id를 조각을 식별하는 fragment identifier 이라고불림
- ```<a href="#three">three</a>``` 	
	- three라는 링크를 만들고 #three 즉 id를가진 fragment로 이동
- ```javascript
	<script>
		if(location.hash) { 			//hash 위치
			    console.log(location.hash.substr(1));	//콘솔로 substring(1)로 #제거후 출력
		  // Fragment exists
		} else {
		  // Fragment doesn't exist
		}
	</script>
	```

- ```javascript
	<li><a href="#!html" onclick="fetchPage('html') 	//#html에 !을붙여줘야 해쉬기호라는걸인식
	    ">HTML</a></li> 
	if(location.hash){
		fetchPage(location.hash.substr(2));`	 	//따라서 외부에서 #!주소로 직접들어올때 !을빼줘야 바로들어올수있음
	}
	else{
		fetchPage('welcome');
	}
	```

- ```ajax```는 검색엔진 최적화가 잘안됌
- 검색엔진은 웹페이지를 다운받아서 분석해야되는데 백엔드로 다가져와서 최근에는 #!(해쉬 뱅)을 잘 사용하지않음 
- ajax는 data와 application 을 따로 떼어놓아서 data파일을 만들어 data만뜯어고칠수있게끔 만들수있어 사용자들이 마음대로 수정하다가 사고발생을
줄일수있고 어디를 수정해야되는지 자유로움을 얻을수있다.
- ```javascript
	<ol id="nav">
	</ol>
	fetch('list').then(function(response){
		response.text().then(function(text){		//text전송받은내용
			//alert(text);
			document.querySelector('#nav').innerHTML =text;		//이름nav태그가아니라 id를가리키는nav를 가리킴 article처럼출력
		})
	});
	```


- ```|''+item+'|'```
	- 순수한 문자열 
- ```var items = text.split(',');``` 		
	- 텍스트를 콤마를 기준으로쪼개기

#### 기타
- can i use	// 어떤 특정기능 어떤브라우저에서 현재 작동되는지 알려준다.
- fetch polyfil		//지원하지않는 옛브라우저를 지원함 

