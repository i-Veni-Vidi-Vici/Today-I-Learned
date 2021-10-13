# HTML - HyperText Markup Language    
                  
## 역사
1960년대에 인터넷이 탄생하였고 팀 버너스리가 HTML의 원형인 Enquire를 만들고 이 후 
자신이 만든것과 인터넷을 합쳐서 Web을 개발

## 웹서버 
http://127.0.0.1/index.html  

- ``` http://```

  - 웹브라우저가 웹서버에 요청하면 웹브라우저에 웹서버가 전달
  - 웹브라우저와 웹서버의 통신규약 : Hyper Text Transfer Protocol  = http
- ```127.0.0.1```
  - internet Protocol Address ip주소. 웹브라우저가 설치되어있는 웹서버를 가리키는 약속된주소 동시에 설치되어있음
  - 모든 컴퓨터가 자기자신을 127.0.0.1로 정의           
- ``` index.html```
  - 웹브라우저가 웹서버에 접속해 index.html 파일을원한다는 의미 웹서버는 htdoc에서 파일을 찾도록 설정
  - 웹서버에서 파일을 찾고 웹브라우저에 전송
- ```file://```
  - 웹브라우저가 index.html 을 직접 읽어서 열어줌 

웹 확장자는 .html  변경불가 

- Free static web hosting 사이트   
    - google cloud storage    
    - azure blob    
    - amazon s3   
    - neocities.org   
    - bitballoon.com    
    - github    


## VS Code 설정
auto closing 검색
- ```자동따음표끄기 ```   
  - 설정 quot검색 never로 변경
- ```괄호 자동완성끄기```    
  - 설정 bracket never or beforewhitespace
- ```태그 자동완성끄기 ```   
  - tag never로 변경

## 단축키
- 파일 열기 ```ctrl  + o```
- 파일 저장 ```ctrl + s```
- 여러줄에 중복커서만들기 ```alt +커서```
- 중복 전체선택 ```ctrl + shift+ L```
- 중복 한개씩 선택 ```Ctrl + D``` 

## 문법

1. 태그

- ```<!doctype html>```
  -  이 문서는 html이다
- ```<html> 본문전체(위 코드 제외) </html>```  
  - 관용적으로 써야하는 필수코드
  
### body(본문)
- ```<strong> 글자 진하게</strong>``` 

- ```<u> 밑줄 </u>```
- ```<h1> 제목 </h1> ```
  - ```<h1>~<h6>```까지 존재 
  -  ```<span style="font-size:24px"> 제목 <span>``` VS ```<h3>제목 </h3>``` 
    - 제목을 검색했을때 ```<h3>```가 가장위에 노출된다. 즉, 창의성보다는 기본과 규칙을따라야한다는 개념이강한 html

- ```<br>```
  - enter 기능 닫는거 없읍
- ```<p> 단락기능 </p>```
  - 단락을 표현할때는 ```<br><br>```두번쓰는거보다 <p>를 쓰는게 좋음
- ```<body> 본문 </body>```
  - 본문은 꼭 바디로 묶고 가독성을 위해 본문설명태그와 띄어쓰기해주기
- ```<a> 링크 </a>```
  - anchor 링크태그 가장중요한 태크
- ```<a href="링크주소"> 링크걸고싶은것 </a>```
  - h = html의 hypertext , ref =reference 
- ```<a href="링크주소" target="_blank"> 링크걸고싶은것 </a>```
    - target="_blank" 새탭으로 열게하기
- ```<a href="링크주소" target="_blank" title="설명"> 링크걸고싶은것 </a>``` 
    - title 링크 설명하는것
- ```<input type="checkbox">```		 
    - 체크박스 생성
- ```동영상 삽입하는방법``` 
  - ex) 유튜브 공유에서- 퍼가기- 소스코드 복붙 
- ```<!-- 생략 -->```           
    
####  부모태그
- ```<li> 목록</li>``` 			
  - List ```<br>```사용x 목록쓸때는 리스트가 규칙 목록자식태그 ```ul```과 ```li``` 반드시 두개 동시에 존재해야함
- ```<ul> 목록 구분짓기</ul>``` 	
  - Unordered List 목록부모태그 ```ul```과 ```li``` 반드시 두개 동시에 존재해야함
- ```<ol> 목록 숫자로구분짓기 </ol>```	
  - Ordered List 

  
### head(본문설명태그)
  
- ```<title> 웹페이지 이름</title>```	
  - 검색엔진이 웹페이지를 분석할 때 가장중요하게 생각하는 필수태그, 사용자에게 명시
- ```<meta charset="utf-8">```		
  - 웹페이지가 열릴때 웹페이지가 저장된 utf-8형식으로 열리게 하는것
- ```<head> 본문설명태그</head>```	


2. 속성 
태그로는 한계가있을때 태크를 사용
- ```<img src="이미지.jpg" width="50%">```
  - ```src```, ```width``` 위치 상관x
 
## Html Language attribute
- HTML로 작성된 웹페이지 내 텍스트의 기본 언어값을 선언하기 위해 사용함
- 검색엔진에서 html 문서의 언어특성을 파악할 때 사용됨
- 검색엔진의 주 언어와 같은 lang attribute를 검색함 ex) 구글 코리아 lang="ko"
- 문서의 기본언어값을 나타내므로 html element에 사용하는걸 권고

## 기타 
- 웹사이트 오른쪽우클릭 페이지 소스보기  단축키 ```ctrl+u```
- 구글링방법 ```ex) h1 -> HTML h1 tag```
 - 무엇인가를 좁히고 정의를보고 확장,확신. 예제를 복붙해서 돌려보고 어떤것인지 확인

### 학습법 
https://www.advancedwebranking.com/html/ 
- 구글링 rank of ~, frequency~
  -  항상 통계에 기반하여 많이사용하는 문법(태그)를 이용하여 구글링하여 학습하도록 노력
