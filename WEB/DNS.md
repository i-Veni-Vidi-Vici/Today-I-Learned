# DNS
- ```Domain Name System```
## host 
- 네트워크에 연결되어있는 장치들 ```ex) 컴퓨터```
- ```hosts```라는 파일을 통해 도메인에 대한 ```ip```가 기록되어 있어 도메인을 통해 접속가능
- ```hosts``` 파일을 찾아 ```192.168.123.111 web1.com```수정가능
  - ```hosts``` 파일을 통해 해킹이가능함
  - 그러나 ```https```를 입력하면 피싱을 막을수 있음
  - 따라서 ```htpps```를 통해 접근하는것을 항상 생각해야함
# Public DNS
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
