# CSS

## 태그

### head 

- ```<style> css문법 </style>```
  - html아 이 곳을 css문법으로 인식해 
  - ```<style> a { color:색깔;} </style>``` 
    - a태그 전체에 색깔부여, a는 selector 선택자, color:색깔;는 효과 또는 선언Declaration
    - color는 property속성, 색깔=red value값
- ```h1 { font-size:숫자px; }```  		
  - h1의 폰트 크기를 지정 large 등으로도 표현가능
- ```h1 { text-align: center;}```		
  - h1의 폰트를 가운데 정렬 align=정렬시키다 
- ```.클래스이름{}``` 			
  - 클래스이름에 대한 선택자 점. 필수 점이 안붙으면 모든 태그에 대한 선택자
- ```#id이름{}```			
  - 클래스와 동일하지만 중복일때 id가 우선으로 적용됌
	- 즉 id>class>tag 선택자 순으로 중복시 적용이되고 같은계열의 선택자이면 후순위 코드가 적용됌
	- id선택자는 중복되서 사용되서는 절대안됌 유일무이
	- 포괄적인 태그가 후순위로 되도록 정했고 구체적인 id선택자가 가장우선순위가 높음
- ```/*생략 */```				
  - css에서는 이것이 생략 
  
- ```h1{boder-width:크기px; boder-color:색깔; boder-style:solid;}```
  - 경계선의 크기, 색깔, 모양을 정해줌 
  - h1은 block level element 기본값 변경가능, 구역 구분하지않고 화면전체 사용
  - -> ```h1{boder: 5px red solid;}```
    - 중복되는 것들 생략가능
- ```h1{ padding:20px;}``` 	
  - 경계선 여백 설정
  - padding = 속,충전재
- ```h1{ margin:숫자px;}``` 		
  - 경계선 바깥여백크기 설정 margin=여백, 차이
- ```h1{width:숫자px;}```		
  - 경계선이 정해지지않은 h1의 박스크기 폭 설정 
- ```h1{ display:inline;}``` 	
  - block 형태인 h1을 inline 으로 구역범위 
  }
  ```
  
  - ```ol{ padding-left:33px;}```->```#grid ol{padding-left:33px; }```
    - 코드전체의 ol보다 id부모클래스grid의 ol로 표시하는게 부분적으로 변화를주기
			때문에 필수로 바꿔준다.
- ```css
  h1{
        font-size:45px;
        text-align: center;
        border-bottom:1px solid gray;     //글자 크기 45px 가운데정렬, border 대신 아래경계만 표시하기위해 border-bottom사용				
        margin:0;                         margin으로 여백 삭제하고, padding으로 뼈대를 맞춤
        padding:20px;
  }
  ```

- ```css
  @media(min-width:800px){                 	//미디어 쿼리 화면크기가 800이상으로는 div화면표시x 
            div{
                display:none;
            }
  }
  ```
  
- ```css
  @media(max-width:600px){
    #grid{
      display:block; 	//기존 grid형태에서 block으로변환
    }
    ol{
      -width:unset;		//폭 초기화
    }
  }
  ```
#### 중요
- ```css
  <head>
    <link rel="stylesheet" href="style.css"> 	
  </head>
  ```					
  - css 코드 중복제거 style.css 파일을 만들어 css style 코드를 넣어 불러오기하는것
  - style.css 파일을한번저장해놓으면, 캐싱할수있게되면 또 다시 저장이아니라 불러오기로     				
  인해 네트워크 트래픽이 줄어들고 엄청난 효과를 가져온다. 
  - 중복을 제거하고 유지보수를 편리하게하고 가독성을 증가시키는것이 가장중요한 일이다.




#### 효과 or 선언
- ```css
  text-decoration: none;		//  선택자 전체의 밑줄 제거
  color:색깔;			//  선택자 전체의 색깔 부여
  ```
  - html 에서는 a태그1억개를 바꿀때 1억개의 코드를 작성 -> 이후 css탄생하여 코드 하나작성후 끝
  - 중복된코드가 많을시, 접속자가 많아질시 사이트로딩 엄청오래걸림
  - css를 통해서 유지보수증가, 가독성 증가
  - 정보를 표현하는 바디에 디자인과 관련된 코드가 없음
   ; 는 문장구분을 위해 필수표시	
	- caniuse.com 에서 그리드기능을 사용했을때 지원한다는것이 나옴

  
#### 기타
- 웹페이지의 검사를 눌러 웹페이지의 코드도 자세히 확인해볼수있다. 검사 element=tag
- html 기본설정 shift키 누른상태에서 숫자1 입력 후, Tab키를 누르면 기본구조세팅 완료 또는html:5를 입력
- 영역선택방법 alt +shift 마우스좌클릭 마우스클릭한곳까지// shift 마우스좌클릭 코드 전체선택	 

### body 
#### 속성
- ```<a style="color:색깔;">```
  - a태그안에 style속성을 써줌으로써 단독적으로 색깔부여 style =css, color=html 세미콜론필수
- ```<style="color:색깔; text_decoration:underline;">```
  - 단독적으로 밑줄부여, 문장구분을 위해;세미콜론 필수 
- ```<a class="클래스이름">``` 		
  - 클래스를 이름으로 정의설정하여 묶기 클래스선택할때 헤드에서 점 필수
  - ```<a class="클래스이름" "클래스이름">``` 	
    - 띄어쓰기로 클래스를 여러개 정의가능  즉 두개의 클래스에 영향을받음 
		- 하나의 태그를 여러클래스로 제어가능
    - ```헤더, .클래스1, .클래스2```
      - 클래스2에적용 순서때문에 마지막것이 적용됌
  - ```<a class="클래스1" id="클래스2">```
    - id선택자가 class보다 높아 id 선택자가 적용됌
    - ```헤더 #id클래스{}```
      - id 선택자 
- ```<div> block내용 </div>```
  - h1가 아닌 일반적인 내용구분할때 block level 로 구분됌
- ```<span> inline내용 </span>```
  - h1가 아닌 일반적인 내용구분할때 inline으로 구분됌
