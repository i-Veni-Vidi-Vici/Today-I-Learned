# Database
- ```database```는 통합하여 관리되는 데이터의 집합체
- 중복되는 데이터를 없애고, 자료를 구조화하여, 효율적인 처리를 할 수 있도록 도움
- 여러 업무에서 여러 사용자가 데이터 베이스를 사용할 수 있음
- 사용자의 질의에 대해 즉각적인 처리와 응답
- 원하는 데이터를 사용자들에게동시에 공유

## input
- ```Create```, ```Update```, ```Delete```

## output
- ```Read```
```
  File < Spreadsheet < Database
  ```
- 구조적으로 데이터를 저장했을 때, 데이터를 가공하는 것이 훨씬 쉬워짐

## Database ranking

1. ```Oracle	 	Relational DBMS```
- 관공서, 큰 기업, 은행에서 사용 비용이 매우 비쌈
2. ```MySQL 	Relational DBMS```
- 무료 오픈소스. SNS처럼 대규모지만 데이터 신뢰성은 아주 중요하지 않은 서비스에 적합
3. ```Microsoft SQL Server 	 Relational DBMS```
4. ```PostgreSQL   	Relational DBMS```
5. ```MongoDB 	Document store```
- 관계형 데이터베이스가 아니며 관계형 데이터베이스에 수많은 모든 데이터들이 억압되어 2010년부터 ```NoSQL```흐름이 나타났고 관계형데이터베이스가 아닌 다양한 데이터베이스들이 나옴
6. ```Redis		Key-value store```    
```출처: https://db-engines.com/en/ranking```

## Relatioanal Database
1970년 에드거 프랭크 테드커드는 ```Relational database```라는 새로운 ```database```를 고안함 
- ```MySQL```
- ```Oracle```
- ```SQL Server```
- ```PostgreSQL```
- ```DB2```
- ```Access```

### MySQL
- 1994년 스웨덴에서 개발되기 시작한 ````Relational database```
- 무료이고 오픈소스이면서 ```Relational database```의 주요한 기능을 대부분 갖추고 있는 준수한 ```database```
- ```WEB```이 폭발적인 성장을하면서 웹개발자들은 웹페이지를 통해서 표현할 정보를 저장할 ```database```가 필요했는데, 무료이고 오픈소스였던 ```MySQL```이 웹 개발자들에게 좋은 대안이 됨
- 자체적인 보안기능이 있어 조금 더 안전
- 차등적 권한부여 가능
- 
#### MySQL 설치 & 실행
- ```bitnami wamp```을 통해 설치 진행 
- ```MySQL```실행은 ```cmd```창으로 실행해야함
	- ```cd C:\bitnami\wamp``` 에서 ```TaB```키 누르면 내부파일 자동으로 선택됨 
		- ```cd C:\bitnami\wampstack-8.0.11-3\mariadb\bin```  //```MySQ```L ->```mariadb```로 변경됨
	- ```mysql -uroot -p``` 입력하면 패스워드 입력 나옴 	// ```-u``` = ```user```, ```root``` =사용자 이름 지정가능, ```root```는 관리자 모든권한을 가짐
		- ```-p```는 패스워드 입력창을 불러옴
	- 패스워드 입력 후 실행
- ```mysql cheat sheet```와 같은 검색어를 통해서 좀 더 쉽게 사용할 수 있음

#### MySQL 구조
- 엑셀과 같은 ```spreadsheet```와 비슷한 구조를 가짐
- 연관된 표를 그룹핑해서 연관되지 않은 표와 분리하는 폴더와 같은 ```database```가 존재 ```schema```라고도 부름
- ```schema```들의 저장소를 ```database server```라 부름

