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

## HTTP API 설계

### HTTP API - 컬렉션
- POST 기반 등록
- 서버가 리소스 URI 결정

### HTTP API - 스토어
- PUT 기반 등록
- 클라이언트가 리소스 URI 결정

### HTML FORM 사용
- GET, POST만 지원
- 순수 HTML + HTML form 사용
#### 회원 관리 시스템 API 설계 - POST 기반 등록
- 클라이언트는 등록될 리소스의 URI를 모름
- 서버가 새로 등록된 리소스 URI를 생성
- 컬렉션
	- 서버가 관리하는 리소스 디렉토리
	- 서버가 리소스의 URI를 생성하고 관리
	- 컬렉션은 /members

- 회원 목록 /members -> GET
- 회원 등록 /members -> POST
- 회원 조회 /members/{id} -> GET
- 회원 수정 /members/{id} -> PATCH, PUT, POST
	- 회원 수정은 patch를 사용하는것이 좋음
- 회원 삭제 /members/{id} -> DELETE

#### 파일 관리 시스템 API 설계 - PUT 기반 등록
- 클라이언트가 리소스 URI를 알고 있어야 함
- 클라이언트가 직접 리소스의 URI를 지정
- 스토어
	- 클라이언트가 관리하는 리소스 저장소
	- 클라이언트가 리소스의 URI를 알고 관리
	- 스토어는 /files

- 파일 목록 /files -> GET
- 파일 조회 /files/{filename} -> GET
- 파일 등록 /files/{filename} -> PUT
- 파일 삭제 /files/{filename} -> DELETE
- 파일 대량 등록 /files -> POST

### HTML FORM 사용
- HTML FORM은 GET, POST만 지원
- AJAX 같은 기술을 사용해서 해결 가능
- 컨트롤 URI 
	- GET, POST만 지원하므로 동사로 된 리소스 경로 사용
	- POST의 /new, /edit, /delete가 컨트롤 URI
	- HTTP 메서드로 해결하기 애매한 경우 사용(HTTP API 포함)
- 회원 목록 /members -> GET
- 회원 등록 폼 /members/new -> GET
- 회원 등록 /members/new, /members -> POST
- 회원 조회 /members/{id} -> GET
- 회원 수정 폼 /members/{id}/edit -> GET
- 회원 수정 /members/{id}/edit, /members/{id} -> POST
- 회원 삭제 /members/{id}/delete -> POS

## HTTP 상태코드
- 클라이언트가 보낸 요청의 처리 상태를 응답에서 알려주는 기능

### 1xx
- Informaional
- 요청이 수신되어 처리중
- 거의 사용 안함
### 2xx
- Successful
- 요청 정상 처리

#### 200 OK
- 요청 성공
#### 201 Created
- 요청 성공으로 서버에서 새로운 리소스가 생성됨
- 생성된 리소스는 응답의 Location 헤더 필드로 식별

#### 202 Accepted
- 요청이 접수되었으나 처리가 완료되지 않음
- 배치 처리에서 주로 사용

#### 204 No Content
- 서버가 요청을 성공적으로 처리했지만, 응답 페이로드 본문에 보낼 데이터가 없음
- ex) 웹 문서 편집기의 save 버튼, save 버튼의 결과로 내용을 전달하지 않아도 될때
- 결과 내용 없이 204 메시지만으로 성공을 인식
### 3xx
- Redirection
- 요청을 완료하려면 유저 에이전트(웹 브라우저)의 추가 행동이 필요
- 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 자동 이동(Redorection)

#### 영구 리다이렉션 -301, 308
- 리소스의 URI가 영구적으로 이동
- 기존의 URL를 사용x, 검색 엔진 등에서도 변경 인지
- /event -> /new-event

##### 301 
- Moved Permanently
- 리다이렉트시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음
- POST 요청시, GET으로 변환
- 주소가 바뀌면, 내부적으로도 대부분 데이터도 변경되므로 308보다는 301을 주로 사용

##### 308
- Permanent Redirect
- 리다이렉트시 요청 메서드와 본문 유지
- POST 요청시, 리다이렉트도 POST유지

#### 일시 리다이렉션 - 302, 307, 303
- 리소스의 URI가 일시적으로 변경
- 검색 엔진 등에서 URL을 변경하면 안됨
- 주문 완료 후 주문 내역 화면으로 이동
- PRG: Post/Redirect/Get

##### 302 Found
- 리다이렉트시  요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음
- 처음 302스펙은 HTTP 메서드를 유지하는 것이지만, 대부분 GET으로 변경
- 모호한 302대신 명확한 307, 303이 등장
- 307, 303을 권장하지만 302를 기본값으로 대부분 사용

##### 307 Temporary Redirect
- 리다이렉트시 요청 메서드와 본문 유지

##### 303 See Other
- 리다이렉트시 요청 메서드가 GET으로 변경

##### 304 Not Modified
- 캐시를 목적으로 사용
- 클라이언트에게 리소스가 수정되지 않았음을 알려줌
- 클라이언트는 로컬PC에 저장된 캐시를 재사용
- 304 응답은 메시지 바디를 포함하지 않음
- 조건부 GET, HEAD요청시 사용

#### PRG: Post/Redirect/Get
- 일시적인 리다이렉션
- ex) POST로 주문후 새로고침을 하면, 새로고침은 주문을 다시 요청하고 중복주문이 발생할 수 있음
- POST로 주문후에 새로고침으로 인한 중복 주문 방지
- POST로 주문후에 주문 결과 화면을 GET메서드로 리다이렉트

### 4xx
- Client Error
- 클라이언트 오류, 요청에 잘못된 문법등으로 서버가 요청을 수행할 수 없음
- 오류의 원인은 클라이언트에 있음
- 클라이언트가 이미 잘못된 요청, 데이터를 보내고 있기때문에, 재시도는 실패함

#### 400 Bad Request
- 클라이언트가 잘못된 요청을 해서 서버가 요청을 처리할 수 없음
- 요청 구문, 메시지 등 오류
- ex) 요청 파라미터가 잘못되거나, API 스펙이 맞지 않을 때 발생

#### 401 Unauthorized
- 클라이언트가 해당 리소스에 대한 인증이 필요함
- 인증(Authentication)되지 않음
- 401 오류 발생시 응답에 WWW-Authenticate 헤더와 함께 인증 방법을 설명
- 인증(Authentication): 본인이 누구인지 확인, 로그인
- 인가(Authorization): 권한부여, 특정 리소스에 접근할 수 있는 권한, 인증이 있어야 인가가 있음

#### 403 Forbidden
- 서버가 요청을 이해했지만 승인을 거부
- 주로 인증 자격 증명은 있지만, 접근 권한이 불충분한 경우

#### 404 Not Found
- 요청 리소스를 찾을 수 없음
- 요청 리소스가 서버에 없거나 클라이언트가 권한이 부족한 리소스 접근시 해당 리소스를 감추고 싶을 때 사용
### 5xx
- Server Error
- 서버 오류, 서버가 정상 요청을 처리하지 못함
- 재시도시 성공할 수도 있음

#### 500 Internal Server Error
- 서버 문제로 오류 발생, 애매하면 500오류

#### 503 Service Unavailable
- 서비스 이용 불가
- 서버가 일시적인 과부화 또는 예정된 작업으로 잠시 요청을 처리할 수 없음
- Retry-After 헤더 필드로 얼마뒤에 복구되는지 보낼 수도 있음

#### 클라이언트가 인식할수 없는 상태코드
- 클라이언트는 상위 상태코드로 해석해서 처리
- 추가적인 클라이언트 변경 필요는 없음
- ex) 299 -> 2xx Successful

## HTTP 일반헤더
- header-field = field-name":" OWS field-value OWS
- HTTP 전송에 필요한 모든 부가정보
- 필요시 임의의 헤더 추가 가능

### RFC2616(과거)
#### 헤더 분류
- General 헤더: 메시지 전체에 적용되는 정보 Connection: close
- Request 헤더: 요청 정보 User-Agent: Mozilla/5.0 (Macintosh; ..)
- Response 헤더: 응답 정보 Server: Apache
- Entity 헤더: 엔티티 바디 정보 Content-Type: text/html, Content-Length: 3423
#### message body
- 메시지 본문(message body)은 엔티티 본문(entity body)을 전달하는데 사용
- 엔티티 본문은 요청이나 응답에서 전달할 실제 데이터
- 엔티티 헤더는 엔티티 본문의 데이터를 해석할 수 있는 정보 제공

### RFC723x
- 엔티티(Entity) -> 표현(Representation) 변화
- 표현 = 표현 메타데이터 + 표현 데이터


#### message body
- 메시지 본문(message body)을 통해 표현 데이터 전달
- 메시지 본문 = 페이로드(payload)
- 표현은 요청이나 응답에서 전달할 실제 데이터
- 표현 헤더는 표현 데이터를 해석할 수 있는 정보 제공

## 표현 헤더
- 표현 헤더는 전송, 응답 둘다 사용
### Content-Type
- 표현 데이터의 형식 설명
- Content-Type: image/png

### Content-Encoding
- 표현 데이터의 압축 방식
- 데이터를 전달하는 곳에서 압축 후 인코딩 헤더 추가
- 데이터를 읽는 쪽에서 인코딩 헤더의 정보로 압축 해제
- Content-Encoding: gzip
- identity(압축x)

### Content-Language
- 표현 데이터의 자연 언어 
- Content-Language: ko

### Content-Length
- 표현 데이터의 길이
- 바이트 단위
- Transfer-Encoding(전송 코딩)을 사용하면 길이 내용도 포함되므로 Content-Length를 사용하면 안됨

## 협상
- 클라이언트가 선호하는 표현 요청
- 협상 헤더는 요청시에만 사용
### Accept
- 클라이언트가 선호하는 미디어 타입 전달
### Accept-Charset
- 클라이언트가 선호하는 문자 인코딩
### Accept-Encoding
- 클라이언트가 선호하는 압축 인코딩
### Accept-Language
- 클라이언트가 선호하는 자연 언어

### 협상과 우선순위
- Quality Values(q) 값 사용
- 0~1, 클수록 높은 우선순위,  생략하면 1
- ex) Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
	- 1. ko-KR;q=1 (q생략가능)
	- 2. ko;q=0.9
	- 3. en-US;q=0.8
	- 4. en:q=0.7
- 구체적인 것이 우선
-ex) Accept: text/*, text/plain, text/plain;format=flowed, */*
	- 1. text/plain;format=flowed
	- 2. text/plain
	- 3. text/*
	- 4. */*



