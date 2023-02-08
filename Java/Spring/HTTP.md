# 인터넷 통신

## IP
- 인터넷 프로토콜 역할
- 지정한 IP주소에 데이터 전달
- 패킷이라는 통신 단위로 데이터 전달

### IP 패킷 정보
- 출발지 IP, 목적지 IP, 전송 데이터 등

### IP 프로토콜의 한계
##### 비연결성
- 패킷을 받을 대상이 없거나 서비스 불능 상태여도 패킷 전송
##### 비신뢰성
- 전송중 패킷이 사라질 수 있음
- 패킷의 도착순서가 바뀔 수 있음
##### 프로그램 구분x
- IP만으로 같은 IP를 사용하는 서버에서 통신하는 애플리케이션들을 구분할 수 없음

### 해결책 
- TCP, UDP

## 인터넷 프로토콜 스택의 4계층
### 애플리케이션 계층
- HTTP,FTP
- 웹브라우저, 네트워크 게임, 채팅 프로그램
- SOCKET 라이브러리
### 전송 계층
- TCP, UDP
### 인터넷 계층
- IP
### 네트워크 인터페이스 계층
- LAN 드라이버, LAN 장비

##### 1. 프로그램이 `Hello, world`메시지 생성
##### 2. SOCKET 라이브러리를 통해 전달
##### 3. TCP 정보 생성, 메시지 데이터  포함
##### 4. IP패킷 생성, TCP 데이터 포함
##### 5. LAN카드를 통해 서버로 전달

## TCP 세그먼트 정보
- 출발지PORT, 목적지PORT, 전송 제어 , 순서, 검증 정보, 전송 데이터 등

#### TCP 특징
- 전송 제어 프로토콜(Transmission Control Protocol)
- 연결지향 - TCP 3 way handshake
	- 가상 연결
	- 클라이언트 서버사이의 수많은 노드들은 모름
	- 단순히 논리적으로만 연결된 것
- 데이터 전달 보증
- 순서 보장
- 신뢰할 수 있는 프로토콜
- 현재는 대부분 TCP 사용

#### TCP 3 way handshake
- connect, 연결과정
##### 1. 클라이언트:SYN(연결 요청)
##### 2. 서버:SYN+ACK(요청에 대한 확인 메시지)
##### 3. 클라이언트:ACK(ACK와 함께 데이터 전송가능)

## UDP 특징
- 사용자 데이터그램 프로토콜(User Datagram Protocol)
- 하얀 도화지에 비유(기능이 거의 없음)
- 비연결지향
- 데이터 전달 보증x
- 순서 보장x
- 단순하고 빠름
- IP와 비슷함 +port + 체크섬 정도 추가
- 애플리케이션에서 추가 작업 필요

## PORT
- 같은 IP 내에서 프로세스 구분
- 0~65535 할당가능
- 0~1023 잘 알려진 포트, 사용하지 않는것이 좋음
- FTP 20,21,TELNET -23, HTTP-80, HTTPS-443
TCP/IP 패킷
- 출발지 IP, PORT, 목적지 IP, PORT, 전송데이터 등

## DNS
- 도메인 네임 시스템(Domain Name System)
- IP는 기억하기 어렵고, 변경될 수 있음
- 도메인 명을 IP주소로 변환
- 전화번호부
1. 클라이언트-> DNS 서버: 도메인 google.com
2. DNS 서버-> 클라이언트: 100.100.100.1 응답
3. 클라이언트-> 서버 :100.100.100.1 접속

## URI와 웹브라우저 요청 흐름

### URI(Uniform Resource Identifier)
- 로케이터(locator), 이름(name) 또는 둘다 추가로 분류될 수 있음
- URI= URL,URN
#### Uniform
- 리소스를 식별하는 통일된 방식
#### Resource
- 자원, URI로 식별할 수 있는 모든 것(제한 없음)
- HTML 문서, 구분할 수 있는 모든 것 등
#### Identifier
- 다른 항목과 구분하는데 필요한 정보
- 주민번호 등

### URL(Uniform Resource Locator)
- Locator, 리소스가 있는 위치를 지정
- 위치는 변할 수 있음

### URL 문법
- ```scheme://[userinfo@]host[:port][/path][?query][#fragment]```
- ```https://www.google.com:443/search?q=hello&hl=ko```

##### scheme
- `(https)`
- 주로 프로토콜 사용
- 프로토콜 - 어떤 방식으로 자원에 접근할 것인가 하는 약속 규칙
- http, https, ftp 등
- http는 80포트, https 443포트 사용, 포트는 생략 가능
- https는 http에 보안기능이 추가됨(HTTP Secure)

##### userinfo
- URL에 사용자정보를 포함해서 인증
- 거의 사용안함

##### host
- `(www.google.com)`
- 호스트명
- 도메인명 또는 IP주소를 직접 사용가능

##### port
- `(443)`
- 포트번호
- 접속할 포트
- 일반적으로 생략, 생략시 http 80, https 443

##### path
- `(/search)`
- 리소스 경로(path), 계층적 구조
- /members/100, /items/food1

##### query
- `(?q=hello&hl=ko)`
- key=value 형태 
- ?로 시작, &로 추가 가능 ?keyA=valueA&keyB=valueB
- query parameter, query string 등으로 불림
	- 웹서버에 제공하는 파라미터이며, 또는 문자형태로 전달하기때문에
##### fragment
- `https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started.html#getting-started.introducing-spring-boot`
	- `#getting-started.introducing-spring-boot`
- html 내부 북마크 등에 사용
- 서버에 전송하는 정보가 아님
### UNL(Uniform Resource Name)
- Name, 리소스에 이름을 부여
- 이름은 변하지 않음
- urn:isbn:8960777331 (어떤 책의 isbn URN)
- URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화 되지 않음

### 웹 브라우저 요청 흐름
- `https://www.google.com:443/search?q=hello&hl=ko`
- DNS를 조회하여, IP를 알아낸 후, HTTP 요청 메시지 생성

##### http 요청 메시지
- ```HTTP
	GET /search?q=hello&hl=ko HTTP/1.1
	Host: www.google.com
	```
1. 애플리케이션 단에서 웹 브라우저가 HTTP 메시지 생성
2. SOCKET 라이브러리를 통해 OS단의 TCP/IP 계층으로 전달
- TCP/IP 연결 지시
3. TCP/IP 계층에서 서로 연결, HTTP 메시지 포함하여 TCP/IP 패킷 생성
4. 인터넷망으로 전송
5. 목적지에 도착한 후, 패킷껍질을 제거하면서 HTTP 메시지를 통해 응답 메시지를 패킷에 싸서 전송
6. 응답메시지를 통해서, 패킷껍질을 제거하여  html데이터를 렌더링하여 웹브라우저에서 결과를 보게됨

### TCP/IP 패킷
- 출발지 IP, PORT
- 목적지 IP, PORT
- 전송 데이터
- + 전송데이터(HTTP 메시지)

### HTTP 응답 메시지
- ```
	HTTP/1.1 200 OK
	Content-Type: text/html;charset=UTF-8
	Content-Length: 3423
	<html>
	 <body>...</body>
	</html>
	```
## HTTP 메서드

### API URI 설계
- URI는 리소스만 식별하도록 설계해야함
- 회원을 등록, 수정, 조회하는것은 리소스가 아님
- 리소스: 회원, 행위: 조회, 등록, 삭제, 변경
- 행위와 리소스를 분리하고, 회원 리소스만 식별하도록 설계
- 행위를 구분하는것은 HTTP메서드
- ```
	회원 목록조회 /members
	회원 조회 /members/{id}
	회원 등록 /members/{id}
	```


### HTTP 주요 메서드
- `GET`: 리소스 조회
- `POST`: 요청 데이터 처리, 주로 등록에 사용
- `PUT`: 리소스르 ㄹ대체, 해당 리소스가 없으면 생성
- `PATCH`: 리소스 부분 변경
- `DELETE`: 리소스 삭제

#### GET 메서드
- 리소스 조회는 POST대신  최대한 GET메서드를 이용하는 것이 좋음
- 서버에 전달하고 싶은 데이터는 query를 통해서 전달
- 메시지 바디를 사용해서도 데이터를 전달할 수 있지만, 지원하지 않는 곳이 많아서 잘 사용하지 않음

#### POST 메서드
- 요청 데이터 처리
- 메시지 바디를 통해 서버로 요청 데이터 전달하고, 서버는 요청 데이터를 처리
- 메시지 바디를 통해 들어온 데이터를 처리하는 모든 기능을 수행
- 전달된 데이터로 주로 신규 리소스 등록,생성, 프로세스(요청 데이터) 처리, 다른 메서드로 처리하기 애매한 경우에 사용
- 대상 리소스 URI에 POST 요청이 오면 요청 데이터를 어떻게 처리할지 리소스마다 따로 정해주어야 함

#### PUT 메서드
- 리소스를 완전히 대체, 없으면 생성
- POST와 달리 클라이언트가 리소스 위치를 알고 URI 지정

### HTTP 메서드의 속성
- 안전(Safe Methods)
- 멱등(Idempotent Methods)
- 캐시가능(Cacheable Methods)
#### 안전
- 호출해도 리소스를 변경하지 않는 것
- GET 메서드

#### 멱등
- 여러번 호출해도 결과가 똑같은 것
- GET, PUT, DELETE
- POST는 멱등이 아님, 여러번 호출시 결제요청이 여러번 발생함
- 멱등은 외부 요인으로 중간에 리소스가 변경되는 것까지 고려하지 않음
- 자동 복구 메커니즘으로 활용함
	- delete 요청시, 서버응답이 없을때 재 요청을 함, 몇번 실행하든 결과는 변하지 않기때문에
	
#### 캐시 가능
- 용량이 큰 이미지들을 저장하여 재사용
- GET, HEAD, POST, PATCH 메서드 캐시 가능
- 실제로는 GET, HEAD 정도만 캐시로 사용
- POST, PATCH는 본문 내용까지 캐시 키로 고려해야 하므로, 구현이 어려움





