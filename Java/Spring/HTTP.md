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




