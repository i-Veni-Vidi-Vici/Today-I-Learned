# lowdb
- ```json```파일형식으로 데이터를 저장
- ```json```은 숫자, 문자열, 배열, 객체, ```Boolean```으로만 이루어진 데이터 파일

## 설치 
- ```npm install -s lowdb -> npm install -s lowdb@1.0.0```	 //구버전코드를 이용하기 때문에 구버전으로 설치

## 사용
#### main.js

- ```javascript
  const low = require('lowdb')  	  //모듈 불러오기
  const FileSync = require('lowdb/adapters/FileSync')  	  //파일에 동기방식으로 저장
  const adapter = new FileSync('db.json') 	//동기 방식으로 데이터를 db.json파일에 json형식으로 저장
  const db = low(adapter)	 //db.json파일에 동기방식으로 저장하여 lowdb제어
  db.defaults({ topic: [], author: []}).write() 	 //비어있는 db.json에 데이터를 저장할곳 설정
  ```

### 생성
- ```javascript
  db.get('author').push({	//get(author): author 불러오기, push: 데이터 추가
    id:1,
    name:'se',
    profile:'developer'

  }).write(); 		//write()를 쓰기전까지 반영되지않음
  ```

### 읽기

- ```console.log(db.get('topic').value());```   //```value()``` ```method```를 호출하여, ```topic```의 ```data```를 전체 불러오기
- ```console.log(db.get('topic').find({title:'lowdb', author:1}).value());``` //```find()```를 통해 ```(title:'lowdb', author:1)```인 데이터를 불러오기

### 수정
- ```javascript
  db.get('topic')		//topic의
    .find({id:2})		//id가 2인 데이터를
    .assign({title:'MySQL & MariaDB'})	//title:'MySQL & MariaDB'로 수정
    .write();		//코드 반영
    ```

### 삭제
- ```javascript
  db.get('topic')	//topic의
    .remove({id:2})	//id가 2인 데이터를 삭제
    .write();		//코드반영
  ```

#### id값 부여
- ```lowdb```는 기본적으로 ```id```값을 부여하는 기능이 없기 때문에, ```shortid```모듈을 이용해서 고유한 식별자 부여

- ```npm install -s shortid```    //```shortid``` 모듈설치
- ```javascript
  var shortid =require('shortid'); 	//shortid 모듈 불러오기
  var id =shortid.generate();		//중복되지않는 랜덤한 값을 생성
  ```

