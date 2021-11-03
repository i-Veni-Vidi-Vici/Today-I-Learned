# HTTP
- ```Hyper Text Transfer Protocol```
- 웹상에서 정보를 주고받을 수 있는 프로토콜
- 주로 HTML 문서를 주고받는데 쓰임
- 클라이언트와 서버 사이에서 발생하는 request & response 프로토콜


## 검사
- 페이지 검사의 ```Network```를 통해 ```http```의 ```Request```, ```Response```의 ```source```를 볼수있음
- HTTPS, SSL :  보안
- Cache		:  성능향상
- ctrl + F5		:  강제로 캐시 갱신
### cookie
사용자 상태를 저장하고 식별할수있음
### proxy
웹서버와 웹브라우저 사이에 프록시서버가있어 캐시대신역할을 할수 있음
## Request message
- ```Client```가 ```Server```에게 요청하는 것
### Request Headers
- ``` 
  GET /html HTTP/1.1  
  ```	
  - 첫번째 행을 ```Request line(요청행)```이라고 부름 
  - ```GET```은 ```Method```이며, 데이터를 웹서버에서 가져올때 사용
	- ```/html``` 요청하는 정보
	- ```HTTP/1.1``` 현재 사용하고있는 HTTP버전은 1.1

- ```
  Host: 192.168.123.104:8081		
  Connection: keep-alive
  User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36
  Accept: */*
  Referer: http://192.168.123.104:8081/
  Accept-Encoding: gzip, deflate
  Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
  Cookie: acookie=
  ```

  - 두번째 줄부터는 ```Request Headers```라고 부름
  - ```host```는 가장 중요함, 인터넷에 연결되어있는 컴퓨터 한대를 식별하는 이름 
  - 웹서버가 여러개의 도메인을 서비스할수가 있는데 각각의웹사이트마다 다르며 가상호스트라고 부름
  - ```User-Agent``` 웹브라우저의 다른표현
  - ```Accept-Encoding``` 통신하는 데이터가 많으면 압축하여 웹브라우저가 그것을 압축을 풀어서 처리할 수 있음
  - ```gzip```, ```deflate``` 압축방식
  - ```If- modified-Since: Tue 16 jul 2019 21;23;21``` 언제 다운받았는지 웹서버에게 알려주어 웹서버는 자기가 갖고있는 파일중 뭐가 더최신인지 비교해서 자기가 갖고있는 파일이 최신이면 전송하거나 전송을 안해주는 기능
 ## Response message
 ```Server```가 요청에대한 답변을 ```Client```에게 보내는 것
 ### Response Headers
- ```HTTP/1.1 200 OK```	
  -  HTTP/1.1 version 
  - 200 success status code
#### headers 요약
- ```Content-Type: text/html``` 웹브라우저는 ```html```로 표시
- ```Content-Length: 25```	전체크기
- ```Accept-Ranges: bytes```	단위
- ```Content-Encoding: gzip``` 	이 데이터는 ```gzip```으로 압축되어있으니 이것을 풀어라
- ```Last-Modified: Sat, 25 Sep 2021 06:35:54 GMT``` 언제 수정되었다라고알려줌
