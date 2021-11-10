# Oracle

### Oracle Price
#### Edition
- 4가지 제품
- ```Express``` 	무료
- ```Personal``` 	개인이사용 1사람만, Named User plus
- ```Standard``` 	Named User plus, Processor
- ```Enterprise```  	Named User plus, Processor
#### License
- ```Named User plus``` 
 	- 사용하는 컴퓨터가 몇대인지에 따라서 가격이 달라짐
- ```Processor```
	- 컴퓨터 ```cpu```성능 차이에 따라 가격이 달라짐


## 설치
- ```oracle express edition```검색하여 ```Download Oracle Database XE```를 눌러 설치

### CRUD
- ```Create```
- ```Read```
- ```Update```
- ```Delete```

### Schema
- 연관된 ```Table```들을 ```Group```화하는 ```directory```
- 사용자를 만들면 그 사용자에 해당하는 ```Schema```가 생성
- ```Schema```의 본질적인 의미는 ```Schema```에 속하는 ```Table```들을 정의하는 정보
 
## 실행
- ```sql plus``` 파일 실행하거나, ```cmd``` 창에서 ```sqlplus```입력
- ```사용자명 입력: sys AS SYSDBA```	//```sys``` : 기본적으로 제공되는 사용자 ```AS SYSDBA```: 시스템 데이터 베이스관리자로서 ```sys```사용자를 사용

### 사용자 생성
- ```
  ALTER SESSION SET "_ORACLE_SCRIPT" =TRUE;
  CREATE USER 이름 IDENTIFIED BY 비밀번호;  
  ```
  - 사용자 생성
 
### 사용자 권한부여
- ```sys AS SYSDBA```	// 권한부여할때 모든권한부여, 기본사용자로 접속
- ```GRANT DBA TO 사용자;```	//```GRANT``` : 부여,``` DBA``` : DatabaseAdministrator 모든권한,즉 사용자에게 모든권한을 부여
