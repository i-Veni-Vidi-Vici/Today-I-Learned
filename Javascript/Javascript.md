# BODY
## 태그
- ```javascript
  <script> 자바스크립트코드 </script>
   ```
  - 이곳에 자바스크립트 코드 사용할거야
  - ```javascript
    <script> document.write(1+1) </script>
    ``` 	
    - ```html```에 1+1을 쓰면, 1+1그대로 출력되는 정적이지만 JavaScript는 계산되서 2가
					출력되는 동적이다.
- ```javascript 
  <input type="button" value="hi" onclick="alert('hi')">
  ```	 
  - ```button```을 ```input```타입으로 만들고 표시값은hi  버튼을 클릭했을때, ```hi```를 알림
- ```javascript
  <input type="text" onchange="alert('changed')">
  ```	
  - ```text```를 ```input```타입으로 만들고 텍스트를 입력했을때, 텍스트가 바뀌면 ```changed```를 알림
- ```javascript
  <input type="text" onkeydown="alert('key down!')">
  ```
  - ```text```를 ```input```타입으로 만들고 텍스트를 입력했을때, 키가눌리면, ```keydown!```을 알림
- ```onclick```, ```onchange```, ```onkeydown```은 ```event```이다.

- ```javascript
  <input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor='black';  //button을 인풋타입으로 형성 onclick 클릭형태로 css selector를
    document.querySelector('body').style.color='white';       //찾는 것 document.querySelector('선택자') .style.backgroundColor로 .js는 
  ">                                                        //.점으로 연결
  ```
- ```javascript
  <script>
    document.write(1===1);				//===은 같냐?라는 비교연산자이다 true와 false를 만들어내는 연산자
  </script>						            //true와 false를 Boolean으로 불름
  ```
- ```<h3>1&lt;2</h3>```
  - 1<2로표시됌 꺽새 표시를 사용못하므로 lt = less than 
- ```<h3>1&gt;2</h3>```		
  - 1>2로 표시됌 gt = greater than
  
### 변수
- ```a = 1;```	 //띄어쓰기가 가독성이 좋음

- ```var a = 1;``` 	//변수에 var를 붙이자 
	- ```a = 2;``` 		//그다음값에는 var를 붙일 필요가 없음 



### 조건문

- ```javascript 
  <input id="night_day" type="button" value="night" onclick="
  if(document.querySelector('#night_day').value==='night'){		//  id night_day의 value값을찾는것
  ```

- ```javascript
  <input type="button" value="night" onclick=" 
    var target = document.querySelector('body'); 			//document.querySelector('body')가 4번중복되어 target으로 정의하여사용
    if(this.value==='night'){                 	//기존에 id="night_day"를 삭제하고 자기자신태그를 의미하는 this를 사용함으로써 
        target.style.backgroundColor='black';   //중복제거, 가독성 증가, 수정 편리
        target.style.color='white';
        this.value= 'day';					  
    } else{								
        target.style.backgroundColor='white';
        target.style.color='black';
        this.value= 'night';
    }
    ">
    ```
  - 중복을 제거하는것이 코딩실력을 늘리는데 가장 도움이됌

### 배열
- ```javascript
  <script>
    var coworkers = ["ye","eh"]; 			//배열 정의 
    document.write(coworkers[0]); 		//배열 첫번째 ya출력
    document.write(coworkers[1]);		//배열 두번째 eh출력
    coworkers.push('OH','Ya'); 		//배열 끝에 OH와 Ya추가
    document.write(coworkers.length); 	// 배열의 길이를 나타냄
   <script>
   ```

### 반복문
- ```javascript
   <script>
        document.write('<li>1</li>');
        var i = 0; 		
        while(i<3){ 				//i<3일때까지 반복
        document.write('<li>2</li>');
        document.write('<li>3</li>');
        i++;				//i 1증가
        }
        document.write('<li>4</li>');
    </script>
    ```


- ```javascript
  <script>
        var coworkers =['he','him','she','her','it'];
  </script>

  <h2>Coworkers</h2>
  <ul>
        <script>
            var  i = 0; 
            while(i<coworkers.length){ 					//배열값이 추가되든 삭제되든 논리는 바뀌지않도록 만드는것이 목표
            document.write('<li><a href="http://www.google.co.kr/'+coworkers[i]+'">'+coworkers[i]+'</a></li>'); //변수는 +변수+를이용하기
            i++;
            }
        </script>
  </ul>
  ```

### 함수						
- 코드가 많아지면 정리정돈하는 도구
- ```javascript
  <head>
    <script>
            function nightDayHandler(self){ 			//자바스크립트를 함수로 정의하면서 기존에 중복되던 자바스크립트코드를 현저하게 줄임
      /*내용*/				                            //꼭헤더에 쓸필요는 없음 this를 받아올 매개변수 self를넣어준다
    }
    </script>
  </head>
    <input type="button" value="night" onclick="  
    nightDayHandler(this);				//기존에 엄청길고 중복된 것을 헤더부분에 function으로 정의 기존의 this는
    ">						                //이벤트가 소속된 태그를 가리키도록 약속되어있는데 함수를 만들게되면 this는	
						                      input을 가리키는게 아니라 window를 가리킴 따라서 함수 괄호에 this를 넣어주고
						                      헤더에는 매개변수self를 넣어준다
   ```
   
### 객체						
- 함수가 많아지면 서로 연관된것을 그룹화해서 정리정돈하는 도구
- ```javascript
     document.querySelector('body').style.color=color; 
     ```
	- ```document```가 객체, ```querySelector()```는 함수가아니라 메소드
- ```javascript
	document.write("pro:"+coworker.pro);	//.점=object access operator
    	<script>
		var coworker = { 					//객체선언은 {}괄호로한다.
		    "pro":"s",						//선언 pro=s
		    "dio":"d"
		};
		document.write("pro:"+coworker.pro+"<br>");
		document.write("dio:"+coworker.dio+"<br>");
		coworker.bookkeeper = "duru";					//추가적으로 객체에 추가시킬때bookkeeper은 property속성
		document.write("bookkeeper:"+coworker.bookkeeper+"<br>");
		coworker["data scientist"] = "to"; 				//띄어쓰기가있을때 객체대신 배열을통해서 문자열로 집어넣을수있다
		document.write("data scientist:"+coworker["data scientist"]+"<br>");
        </script>

	<script>
            for(var key in coworker ){			/*배열에서는 순서(index)로 표현*/ //cowoker의값을 key에 모조리 집어넣는 코드
                document.write(key+':'+coworker[key]+'<br>');	//key의 값과 key의 값에 해당되는coworker의 값들을 배열로 출력
            }
	</script>

	<script>
		coworker.showAll = function(){  			// function showAll()과 똑같은표현, var showAll= function()도 똑같은표현
			for(var key in this ){			/*배열에서는 index로 표현*/
			document.write(key+':'+this[key]+'<br>');
			}		// 객체에 소속된함수는 method라부름, coworker가 변경될수있으니 함수가 소속된 객체를 가리키는 약속된기호=this
		}
		coworker.showAll();
   	</script>

        var Body={		//객체 선언
            setColor:function(color){				//Body.setColor('black');으로 구현
                document.querySelector('body').style.color=color; 		
                
            }					
            ,SetBackgroundColor:function(color){			/*객체는 객체의 속성과 속성을 구분할때 콤마를찍는다*/
                document.querySelector('body').style.backgroundColor=color;
            }
        }
	```
# 기타

## 파일로쪼개서 정리정돈하기
- ```javascript
	<script src="color.js"> </script>
	```
	- 스크립트 요약 color.js를 만들어서 중복되는 스크립트를 옮겨 단 한줄로 그 중복되는
	파일을 불러올수 있음
	- 유지보수가 매우편리하고, 코드의 의미를 파일의미로 확인가능 
	- 웹페이지를 로드할때, 캐시(저장)때문에 한번 웹페이지에 color.js를 다운받으면 컴퓨터가 저장해놓고
	다음에 로드할때 저장된파일을 로드하여 사용자입장에서도 네트워크 트래픽 절감, 더 빠르게 로드가능
	- 돈, 시간 모두 효율적

## 라이브러리
- 잘정리정돈해놓은, 재사용하기 쉽도록 되어있는 소프트웨어를 말함
- 내가 만들고있는 프로그램에 사용할 부품을 가져오는 느낌
- 도서관처럼 책을 꺼내쓰는 느낌
## 프레임워크
- 만들고자 하는것이 무엇이냐에 따라서, 그것을 만들려고할 때 언제나 필요한 공통적인 것이 있고,
만들고자 하는것에 대한 기획의도에따라서 달라지는 부분이 있는데, 그 중에서 공통적인 부분은
프레임워크라는것을 만들어놓고 우리가 만들고자하는것의 기능에따라, 또는 개성에 따라 달라지는
부분만 살짝 수정하는 반제품같은것을 프레임워크라고함
- 프레임워크 안에 들어가서 작업하는 느낌
- 뼈대,틀, 체계처럼 그틀안에 들어가 작업

- ```Ctrl + /``` 
	- 주석 자동생성

## jQuery

- ```javascript
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 
	```
	- 다운필요없이google CDN으로 복붙하면 적용가능

- ```javascript
	$('a').css('color',color);
	```	
	이 웹페이지의 모든 a태그를 jQuery로 제어하겟다 a태그의 color 속성값을 가져와 매개인자color를 넣기
## UI
- ```User interface```
- 사용자가 사용하는것
## API
- ```Application Progamming Interface```
- ```alert``` 
	- api 경고창을 실행시킬수있지만, 경고창은 만들어져있음
	
## 검색팁
- 웹페이지에 있는 어떤 태그를 삭제하고 싶거나 어떤 태그에 자식 태그를 추가하고싶다면
```document``` 객체를 좀 더 자세히 살펴보자 필요한 메소드가 그 안에 포함되어 있음
- ```document```로도 찾을수없다면 ```DOM(Document Object Model)```로 찾아보자
- ```DOM``` 객체, ```document``` 객체는 ```DOM```의 일부
- 웹페이지가 아니라 웹브라우저 자체를 제어해야한다면 ```window``` 객체를 조사해보자
	- ex) 현재 열려있는 웹페이지 주소가 뭔지 알아내야될수도 있고, 새창을 열거나 웹브라우저의
	화면크기를 ```js```를 통해 알아야 한다면  ```window```에 속해있는 속성이나 메소드가 도움이됨
- 또 웹페이지를 리로드 하지않고 정보를 변경하고 싶다면ajax가 필요함, 현대적인 웹앱을 만드는데
필수적인 테크닉 (2017년 기준)
- 웹페이지가 리로드되어도 현재상태를 유지하고 싶다면 ```cookie```를 배워라 사용자를 위한 개인화된 서비스를
제공할 수있음
- 인터넷이 끊겨도 동작하는 웹페이지를 만들고 싶다면 ```offline web application```을 찾아보자
- 화상통신 웹앱은 ```webRTC```
- 사용자의 음성을 인식하고 음성으로 정보를 전달하고 싶다면 ```speech```로 시작하는 ```API```를 살펴보자
- 3차원 그래픽으로 게임과 같은것을 만들고 싶다면 ```webGL```을 살펴보자
- 가상현실```webVR```

## 검사  
- ```console```을 이용하면, ```javascript```를 바로 이용할수있음 일반사이트에서도 가능
- ```elements```에서 ```esc```키를 누르면 ```console```이 아래에 등장
- ```alert('문자'.length)```		//'문자'의 개수를 알림
	- ```'문자'.length```			//'문자'의 개수를 나타냄 간단한 이코드로 대체가능
- ```shift+enter```  	//보류

### 숫자
- ```
	1+1 = 2 //더하기
	2*3 = 6 // 곱셈
	6/3 = 2 //나누기
	1-1 = 0 //뺄셈
	```

### 문자열
- ```"문자" '문자'``` 	
	- 어떤걸 사용해도 상관없음
- ```'문자'.length```	
	- 2출력, 문자개수출력
- ```'소문자'.toUpperCase()```	
	- '대문자'출력, 소문자를 대문자로 변경
- ```'문자'.indexOf('자')```	
	- 1출력, 문자열의 순서를 출력  0부터시작 없으면-1
- ```'    문 자    '.trim()  ```	 
	- '문 자'출력, 문자열의 처음 끝 공백을 전부삭제

   
   
