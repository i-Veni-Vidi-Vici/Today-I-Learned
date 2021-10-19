# URL
- ```
  http://호스트:3000/main?id=HTML&page=12
  ```
  - ```http```는 ```protocol```, 웹브라우저와 웹서버가 서로 데이터를 주고받기위한 통신규칙
  - 호스트는 ```host(domain)```, 특정한 인터넷에 접속해있는 컴퓨터를 가리키는 주소
  - ```3000```은 ``port```, 한대의 컴퓨터에 여러개의서버가 있을수있다
  - ```3000```번 포트에 연결되어있는 서버와 통신하기
    - ```app.listen(3000);``` 3000번포트에 노드제이에스 실행
  - ```main```은 ```path```, 어떤 디렉토리에 어떤 파일인지
  - ```?id=HTML&page=12```은 ```query string```,  ```query string```값을 변경하면 웹서버에 데이터를 전달할수있다
  - ```query string```의 처음은 ```?```를 쓰기로 약속 그리고 값과 값사이는```&``` 값의 이름과 값은 =로 구분
# HTML-form
- ```html
  <form action="http://localhost:3000/process_create"method="post">  	//이 주소로 제출함 뒤에 method 필수기재
      <p><input type="text" name="title"></p>		//한줄 입력가능한 텍스트창 만들기 제출할때 이름 기재
      <p>
         <textarea name="description"></textarea>  	//여러줄을 입력가능한 텍스트창만들기 제출할때 이름기재
      </p>
      <p>
         <input type="submit"> 			//전송버튼 만들기
      </P>
  </form>
  ```

  - 서버에서 데이터를 가져올때 ```/?```라는 ```query string```을사용
  - 서버에 데이터를 생성하거나 수정하거나 삭제할때 필요한데이터를 ```?```인 ```url```로 보내면 안됌
  - 따라서  ```<form action="http://localhost:3000/process_create" method="post">``` 뒤에 ```method="post"```를 붙여줘야함
  - ```url```은 데이터가 길면 짤림 데이터를 가져올때는 ```method="get"``이거 생략

 
- ```html
  <input type="text" name="title" placeholder="title"></p>
  ```
  - ```placeholder```를 통해서 텍스트빈칸안에 설명서를 넣는 기능이다.


- ```html
  <form action="http://localhost:3000/create_process" method="post">
    else if(pathname === '/create_process'){
        var body = '';
        request.on('data',function(data){
            body=body+data;				
        });						//프로그램이 꺼지거나 컴퓨터에 무리가가거나 포스터로 전송되는 
						데이터양이 많을경우를 대비해서 ```data```부분은 서버에서 
						수신할때마다 콜백함수를 호출하도록 약속함 함수의 
						```data``인자를 통해 수신한정보를 줌
        request.on('end',function(){			//더이상 들어올 정보가 없으면 콜백함수를 호출
          var post = qs.parse(body);		 	//정보를 객체화
          var title = post.title;				
          var description = post.description;
          console.log(post.title);
        }); 					
        response.writeHead(200);
        response.end('good');
      }
      ```

## 파일생성과 리다이렉션
- ```html
  fs.writeFile(`data/${title}`,description, 'utf8',function(err){			// data폴더밑에에 파일이름, 파일 내용, 파일생성
            response.writeHead(302, {Location: `/?id=${title}`});	//콜백이호출되면 파일저장이끝남 302는 페이지를 다른데로 리다이렉션 시켜라
            response.end();					    //더이상 들어올 정보가 없으면 콜백함수를 호출                          
          });
   			
        

## 글 수정링크생성
- ```html
          var template = templateHTML(title, list,   `<h2>${title}</h2><p>${description}</p>`,
          `<a href="/create">create</a> <a href="/update?id=${title}">update</a>` 
          );
          ```
## 업데이트
- ```html
  else if(pathname === '/update'){
    var title = queryData.id;
    <input type="hidden" name="id" value="${title}">}	//버튼을 숨기고 name에 id와 값을 tilte로줌
  ```
- ```html
  else if(pathname === '/update_process'){ 			
   fs.rename(`data/${id}`,`data/${title}`, function(error){       //1예전파일이름id, 2새로운파일은 title로 이름을바꿔라, 3콜백함수호출
          fs.writeFile(`data/${title}`,description, 'utf8',function(err){   //파일생성
            response.writeHead(302, {Location: `/?id=${title}`});   //302는 페이지를 다른데로 리다이렉션 시켜라
            response.end();
          })
          ```

## 삭제
- ```html
        <form action="delete_process" method="post">	 	//삭제는 링크로 걸면안됌	
           <input type="hidden" name="id" value="${title}">
           <input type="submit" value="delete">.
        </form>`

        else if(pathname === '/delete_process'){
        fs.unlink(`data/${id}`,function(error){			//파일명, 콜백함수
          response.writeHead(302, {Location: `/`});			// id값이 없는 첫홈페이지로 이동시키자 
          response.end();
        })
        ```
