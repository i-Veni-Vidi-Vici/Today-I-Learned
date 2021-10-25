# OAuth
- User의 요청에의해 ```Google```이나 ```Facebook```에서 ```accessToken```을 제3자 서비스에 제공하여 
제3자 서비스가 ```accessToken```을 통해 ```Google```에 필요한 데이터에 접근해 불러오고 생성 수정 삭제가 가능하게끔 하는것
- 회원정보 관리에 대한 안정성 증가

## 역할
- ```Google```  	//Resource Server
- ```Authorization Server``` 	  //인증과 관련된서버
- ```User```  	//Resource Owner
- ```제3자 서비스```	  //Client

## 등록과정
 ```최종 결과```
- ```
  Client
  Cilent id : 1
  Client Secret : 2
  access token=4    
  ```
- ```
  Resource Server	
  Cilent id : 1
  Client Secret : 2
  redirect URL
  :https://client/callback
  authorization code: 3
  A, B, C, D 중 B, C만 사용
  ```
- ```
  user id:1
  scope:b,c
  access token=4
  ```

### Owner의 승인 과정
- ```Resource Owner```가 요청을 하면,
```
  https://resource.server/
  ?client_id=1
  &scope=B,C
  &redirect_url=https://client/callback
  ```
라는 주소를 제공
- 이 후 ```Resource Server```는 로그인 유무에따라 ```Resource Owner```에게 로그인창을 띄움
- 로그인이 성공하면, ```Resource server```는 ```clinet``` 값과 같은 ```id```를 확인하고 ```redirect URL```주소가 같은지 확인을 하고 다르면 작업을 끝냄, 같다면 Owner에게 scope에 해당하는 권한을 client에게 부여할것인지 메시지를 전달. 
허용버튼을 누르면 ```Server```로 전달
- ```server```는 ```user id:1 scope:b,c```을 저장
- ```
  //URLDECODE.ORG사이트를 통해 링크를 쉽게 볼수있다.
  //decode를 누르면 보기 편하게된다.
  ```

### Server의 승인 과정
- ```access token```을 발급하기전 임시비밀번호를 주는데 그것을```authorization code```라고 함
- ```Server```는 ```authorization code: 3```을 ```Owner```에게 전송
- ```Location: https://client/callback?code=3``` //헤더에 ```Location```은 ```redirect```라는뜻으로 ```Server```가 ```Owner```에게 이 주소로 이동하라고 명령함
- ```Owner```가 그 주소로 이동하면 ```Clinet```는 ```authorization code: 3```라는 값을 얻게된다.
- 이때 ```Client```는 ```Server```에게 ```authorization code: 3```와 ```Clinet_secret```을 결합한 정보를 보냄으로써  ```accesstoken```을 얻게됨
- ```Server```는 ```Client```에게 받은 정보를 일치하는지 비교
- 모든 정보가 일치하면 ```Access token```발급

### Access token 발급
- ```Server```는 ```access token=4```을 ```client```에게 발급 ```client```는 ```token```을 저장
- ```token```은 ```user id:1```에 대해 데이터```b,c```에 대해서 ```access token=4```를 가진사람에게 허용하는것을 의미
### Refresh Token
- ```access token```의 수명이 다했을때, ```refresh token```을 발급받는다.

#### API
- ```Application Programming Interface```
- ```Cilent```가 ```Access token```을통해 ```Server```를 조작할수 있는 장치를 ```API```라고 한다.
- Restful, JSON, XML






