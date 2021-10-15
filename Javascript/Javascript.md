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
