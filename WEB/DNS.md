# DNS
- ```Domain Name System```
- 초기에는 ```Stanford Research Institute```이라는 기관이 ```hosts```파일을 통해 도메인을 관리
- ```host```들에게 ```hosts``` 파일을 배포함
- 하지만 이에 따른 불편함이 너무 많았음
- 다운받기전에는 추가된 ```host```이름을 사용할 수 없고, ```Stanford Research Institute```는 수작업을 통해 ```hosts```파일에 모든 사이트 이름을 넣는게 한계에 도달
--------------
### 1983년
- ```Jon Postel```과 ```Paul Mockapetris```는 ```Domain Name System```을 개발
#### Domain Name System
- ```93.111.111.12``` 에 접속할때 ```example.com```이름으로 접속할수 있게하려면 ```DNS Server```에 이것을 요청 ```DNS Server```는 이것을 저장 
- 컴퓨터는 처음에 ```hosts```파일을 찾고 만약에 없으면 ```DNS Server```에 요청하고 ```DNS Server```는 컴퓨터에게 ```ip```를 응답해주어 접속이 가능
- 초기에는 사람이 수동적으로 했지만 모든것이 ```DNS Server```를 통해 자동화가됨
- 초기에는 ```hosts```파일을 통해 접속을 했지만, ```DNS Server```를 통해 변경된 내용들을 바로 접속가능
- ```domain```을 설정함으로써 ```ip```를 기억하지 않아도 좀더 기억하기쉬운 도메인주소를 통해 접속이 가능하게 됨
- 또한 ```ip```주소가 바뀌어도 도메인 주소는 바뀌지않았기 때문에 페이지가 사라지지않고 계속해서 제공가능
- ```DNS server``` 를 직접 운영도 가능
- ```Dynamic DNS```를 이용하면 ```ip```가 변경되었을때 ```DNS server```에게 변경된```ip```가 전송됨
- ```HTTPS```, ```SSL```를 사용함으로써 피싱을 방지할수 있음
## host 
- 네트워크에 연결되어있는 장치들 ```ex) 컴퓨터```
- ```hosts```라는 파일을 통해 도메인에 대한 ```ip```가 기록되어 있어 도메인을 통해 접속가능
- ```hosts``` 파일을 찾아 ```192.168.123.111 web1.com```수정가능
  - ```hosts``` 파일을 통해 해킹이가능함
  - 그러나 ```https```를 입력하면 피싱을 막을수 있음
  - 따라서 ```htpps```를 통해 접근하는것을 항상 생각해야함
## Public DNS
- ```DNS Server```에 접속해서 도메인에 해당하는 ```IP```주소를 가져오기 위해서 ```DNS Server``` 의 ```IP```를 알고 있어야함
- 통신사```ISP(Internet Service Provider)```가 계약한 컴퓨터들에게 자동으로 ```DNS Server```의 ```IP```를 세팅해줌
- 사이트에 접속하면 통신사가 제공하는 ```DNS Server```는 접속하려는 사이트를 당연히 알게되어 그 정보를 저장하거나 마케팅 정보로 활용할수 있음
- 그래서 ```Public DNS```를 이용하여 더 좋은 ```DNS Server```에 접속해서 신뢰할만한 회사에 ```Privacy```의 위험율과 성능등을 바꿀수있음
## DNS Server IP 주소확인
```터미널```
- ```nslookup``` 	
- ```exit```
- ```
  ex)
  Cloudflare
  1.1.1.1
  1.0.0.1
  Google Public
  8.8.8.8
  8.8.4.4 
  ```
## etc
- 구글이나 유튜브를 사용하는 사람들이 구글도메인을 사용하는것이 더 유리
- ```DNS Server```을 바꾼후 청소하는 작업이 필요 ```DNS``` 잔여물 모두청소
  - ```관리자CMD``` 실행
  - ```ipconfig/flushdns```
- ```tracert DNSip```를 통해 속도확인가능 ```ex) tracert 1.1.1.1```
## DNS Internal
- ```ex) blog.example.com.``` 도메인주소 뒤에 ```.```점이 생략되어 있음
- ```.```점을 ```Root```라고 부름
- ```com``` , ```co.kr``` ,```kr``` //```Top-level```라고 부름
- ```example```  //```Second-level``` 라고 부름
- ```blog``` 	//```sub```라고 부름

- ```Root``` ,```Top-level``` 등 각각의 ```DNS Server```들이 존재
- ```Root DNS Server```는 ```Top-level``` 서버 목록들을 알고있어야함
- ```Top-level DNS Server```는 ```Second-level``` 서버 목록들을 알고 있어야함
- ```Second-level```은 ```sub```을 알고있어야함
- ```DNS Server```
  - ```ROOT``` -> ```Top-level``` -> ```Second-level``` -> ```sub```
  - 컴퓨터는 ```Root server```에 최초접속 그 후 ```Top-level ip```를 알려줌 
  - 다시 컴퓨터는 그것을 반복하여 ```sub```까지 접속
## DNS Register
```ICANN(비영리 단체)```
- ```a.root-servers.net```
- ```root name server```
- ```.```점을관리
- ```com NS a.gtld-servers.net```을 기억 //```com```라고 하는 ```top-level domain NS(name server)```는 ```a.gtld-servers.net```에 존재

```Registry(등록소)```
- ```a.gtld-servers.net```
- ```Top-level domain```
- ```.com.```을 관리
- ```example.com NS a.iana-servers.net```을 요청으로 인해 알게됨  //```example.com```라고하는 ```Registrant(등록자)```의 ```NS(name server)```는 ```a.iana-servers.net```에 존재

```Registrar(등록대행자)```
```Registrant(등록자)```

### example.com 등록과정
- ```Registrant(등록자)```는 ```example.com```을 ```Registrar(등록대행자)```에게 요청하면 ```Registrar```은 ```Registry(등록소)```에게 요청
- ```Registry```는 수수료를 받고 ```Registrar```에게 도메인을 넘기고 ```Registrant```에게 도메인을 넘김

```authoritative name server```
- ```a.iana-servers.net```
- 사용자가 name server를 직접 만들거나 ```Registrar(등록대행자)```가 직접 제공하는 경우도 있음
- ```example.com A 12.12.12.12``` //```A: Record Type Address, example.com```의 주소는 ```12.12.12.12```임
--------------
- ```Registrant(등록자)```는 ```Registrar(등록대행자)```에게 ```example.com NS a.iana-servers.net```을 보내주면
```Registrar```은 ```Registry(등록소)```에게 ```example.com NS a.iana-servers.net```을 알려주고
```Registry```은 자신이 관리하고있는 ```Top-level domain```에게  ```example.com NS a.iana-servers.net```을 기록
- 이것을 통해 ```Top-level domain```은 ```authoritative name server```을 알게 된 상태가 됨

- 결국 Registrant는 ```example.com A 12.12.12.12``` 라고 ```authoritative name server```에게 알려주면 각 ```domain server```는 서로 연결이되어짐

### Client(사용자) 접속과정
- 통신사 인터넷이 연결되면, ```DNS Server```를 자동으로 잡음 
- 전세계 모든 ```Domain Server```는 ```Root name server```주소를 모두 알고있음
- 따라서 ```a.root-servers.net```으로 연결
- ```example.com```을 검색하면 ```DNS Server```에 요청되고 ```DNS Server```는 ```Root name server```에 요청 후 ```com NS a.gtld-servers.net```을 알려줌
- 그럼 다시 ```Top-level domain``` 에 접속하고 ```example.com NS a.iana-servers.net``` 주소를 알려줌
- ```authoritative name server```에 다시 접속하고  ```example.com A 12.12.12.12```을 알려주어 ```ip```주소를 ```DNS Server```는 알아내어 사용자는 그 ```ip```에 접속하여 인터넷이 연결됨
## nslookup 사용법
- ```nslookup example.com``` //```example.com```의 ```name server```를 찾기
- ```example.com```을 찾기 위해 초기에  ```Root name Server```, ```Top-level domain```, ```authoritative name server```에게 순서대로 요청해서 그 도메인의 ```ip```를 알아냈다면 그 다음에 요청할때는 사용자의 ```DNS Server```는 그것을 기억해서 효율적으로 알려주는데 그것을 ```Cache```라고 부름
- ```Cache```를 이용하면 ```authoritative name server```을 이용한것이 아니기 때문에, ```non-authoritative```로 나타남
- ```nslookup -type=ns example.com``` 	//```authoritative name server```서버정보알아내기, ```nslookup example.com```와 똑같이 작동
- ```nslookup example.com a.iana-servers.net```  //```authoritative name server```에 직접 요청하는것, ```Cache```를 이용하는 것이 아니며 사용자의 ```DNS Server```를 통한것이 아니라 직접 접속하게 하는것
## DNS record & CNAME
### Top-level domain
- ```dns4u.ga NS ns01.freenom.com``` 	//```DNS record``` 도메인 정보 ```NS: record type```

- ```example.com.  A 	192.0.1.1```	// 아이피로 접속
- ```www.example.com. 	CNAME 	example.com.```	// ```CNAME: record type``` = Canonical Name 도메인의 별명 또는 또다른 도메인설정, ```WWW```를 안붙여도 접속가능하게끔 설정, ```CNAME```을 통해 아이피 주소에는 영향을 미치지않게 또다른 도메인 설정가능
