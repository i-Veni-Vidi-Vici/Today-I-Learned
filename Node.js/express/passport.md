## 설치
- ```npm install -s passport```&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	//```passprot```설치
- ```npm install -s passport-local```&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 	//```username & Password```를 이용하는 모듈 설치
## 사용
##### passport.js
- ```javascript
  var passport = require('passport')		//모듈 불러오기,  passport는 session을 사용하기 때문에, session 코드 다음에 작성함
    , LocalStrategy = require('passport-local').Strategy;
    app.post('/auth/login_process',
    passport.authenticate('local', {		//local= username & password, notlocal= facebook,google
          successRedirect: '/',	 	//성공하면,'/'로 주소이동
          failureRedirect: '/auth/login' 		//실패하면 '/auth/login'로 주소이동
    }));
    ```

- ```javascript
  passport.use(new LocalStrategy(
      {
        usernameField: 'email',			//로그인시 설정된 이름으로 req.body에서 값을 읽는데 기본값인 username, password로 설정되어있기때문에 form에서 input태그의 name이 기본값과 다르게 설정하면  값을 변경해주어야함
        passwordField: 'pwd'
      },
      function(username, password, done) {	//done 콜백함수
        console.log('LocalStrategy',username, password);
    if(username === authData.email){

           if(password === authData.password){

              return done(null, authData);  //authData = false가 아닌값은 true, done의 첫번째 인자를 사용하는 경우는 서버에서 에러가 발생했을 때이고, 두번째 인자로 로그인 여부를 passport에게 알려줌 false시 로그인 실패, 로그인 데이터인 authData를 넘기면 로그인 성공, 세번째 인자는 객체로 로그인 실패한이유등 메세지를 출력할 수 있음
            } else{

              return done(null, false, { message: 'Incorrect password.' });
            }
         } else {

            return done(null, false, { message: 'Incorrect username.' }); //username이 일치하지 않을때

        }

      }
   ));
   ```
##### passport.js session이용
- ```javascript
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(function(user, done) {	 //로그인이 성공하면,passport.use의 done의 두번째인자로 리턴된 authData를 콜백함수의 첫번째 인자로 받음
    console.log('serializeUser', user); 
    done(null, user.email);	 // 두번째 인자로 각각의 사용자를 식별할 수 있는 식별자를 지정하면, 식별자는 session안의 passport안의 user값으로 저장, session에 가능한 적은 데이터를 저장해 session 크기를 작게 유지하기 위해 하나의 데이터만 저장
    //done(null, user.id);
  });
  passport.deserializeUser(function(id, done) { 	//로그인이 되었을 때 페이지에 방문할때마다 콜백함수가 호출됨, session store에 저장된 식별자를 통해 그 식별자 사용자의 필요한 정보를 불러옴
    done(null,authData);	//done의 두번째인자인 authData는 request.user로 전달됨
    console.log('deserializeUser', id);
  });
  ```
##### passport 로그인 확인
###### /lib/auth.js
- ```javascript
  module.exports = {
      isOwner:function(request, response){
          if(request.user){ 	  //로그인이 되어있을시 user객체가 존재해서 true
            return true;
          } else {
            return false;
          }
        }, statusUI:function(request, response){
          var authStatusUI = '<a href="/auth/login">login</a>'
          if(this.isOwner(request, response)){
            authStatusUI = `${request.user.nickname} | <a href="/auth/logout">logout</a>`;	//로그인이 되어있을시 request.user.nickname을 불러옴
          }
          return authStatusUI;
        }
  }
  ```
##### 로그아웃
- ```javascript
  router.get('/logout', function(request, response){
     request.logout();		  //로그아웃
     request.session.save(function(){
    request.session.destroy();	  //session 삭제
       response.redirect('/')		  //파일 store에 저장이끝난후 주소이동
     })
  });
  ```
### flash message
- ```npm install -s connect-flash```	&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp; ```flash message```설치
- ```var flash = require('connect-flash);```	&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp; ```flash message``` 모듈 불러오기
- ```app.use(flash());```	&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;```session```을 사용하기때문에 ```app.use(session({```다음에 코드 작성 
###### 예제
- ```javascript
  app.get('/flash', function(req, res){
    req.flash('msg', 'Flash is back!!'); 	 //session store에 flash message 추가
    res.send('flash');
  });
  app.get('/flash-display', function(req, res){
    var fmsg =  req.flash();	//session store에 flash message 저장, flash message는 1회용 message이여서 데이터를 사용하면 삭제됨
    console.log(fmsg);	
    res.send(fmsg);
  });
  ```
###### 구현
- ```javascript
   app.post('/auth/login_process',
    passport.authenticate('local', {  
        successRedirect: '/',                           
        failureRedirect: '/auth/login',
        failureFlash:true 	// 인증하는 과정에서 오류 발생시 플래시 메세지가 오류메세지로 전달
        successFlash:true   // 인증하는 과정에서 성공시 플래시 메세지가 성공메세지로 전달
    })
   )
   ```
###### routes/auth.js
- ```javascript
  router.get('/login', function(request, response){
     var fmsg =request.flash();		
     var feedback = '';
     if(fmsg.error){	//error가 존재하면
       feedback = fmsg.error[0];	//feedback에 flash message 값만 저장
     }
    var html = template.HTML(title, list, `
    <div style="color:red;">${feedback}</div>	//flash message 1번만 출력
    ```
