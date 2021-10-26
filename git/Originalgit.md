# Git
- 버전관리
- 백업 
- 협엽

## Git Cli
### 입력키
- ```pwd``` //위치
- ```mkdir hello-git-cli```		    
   - ```hello-git-cli```폴더 만들기
- ```ls -al``` 	    //파일목록
- ```
  git init .
  ```	
  - ```git``` 버전관리 시작 ```.```점 현재 폴더를의미 
  - ```.git```이 생성되는데 삭제하면 안됨
- ```git init manual-merge```	    //```manual-merge```폴더에서 시작 없으면 생성
- ```nano hello1.txt```	    // ```hello1.txt``` 파일만들기 파일 들어가기
- ```Ctrl + x``` 		    //나가기
- ```cat hello1.txt``` 	    //파일 내용 출력
- ```git status```		    //상태표시
- ```
   git add hello1.txt
   ``` 	    
  - ```hello1.txt Working tree```파일을 버전으로 만들고 ```Staging Area``` 에 올리기 
  - 버전이 관리되거나, 전혀 받지않은거나 ```Staging Area```에 올릴려면 무조건 이것을 사용해야함
- ```git add .``` 		    //현재 폴더안의 모든파일을 추가
- ```git add 폴더```	    //그 폴더안의 모든파일 추가
- ```git commit -am```	    //a는 add의 약자 add와 commit둘다 하지만 add가 한번도 안된 파일은 사용이 안됨
- ```git commit```	    //버전을 제출해 추후 설정이필요함 여러줄로 사용가능
- ```git commit -m "Message 1"```	    //버전 제출할때 설정하는것 Repository로 이동
- ```git commit --amend```	    // 해당 버전이름 수정가능
- ```git log``` 		    //version 보기 
- ```git log --stat```	    //하나의 버전에 관련된것들을 볼수 있음
- ```git diff```	    //차이점 간단히 보기
- ```git reset --hard```    	//마지막 버전이후에 버전을 관리하지 않았을때 삭제하고싶을때 다시 마지막 버전으로 돌릴수있음
- ```git log -p```		    //전체파일 내용과 마지막 버전에서 변경사항을 알려줌
- ```q``` 	    //나가기
- ```git checkout 566668acdce1f874c315cebed49a2b601c467c9f```      // 커밋아이디가 가리키는 시점으로 돌아간다.
- ```git checkout master``` 	    //최신버전으로 돌아가기
- ```git config --global core.editor "nano"``` 	    //나노에디터로변경하기
- ```git revert	리버트할커밋아이디```		    //그해당 전단계로 돌아감 반드시 역순으로 해야함




### 용어 
- ```--global``` 	//컴퓨처전체
- ```master```	//최신버전이라고 보자
- ```Changes not staged for commit:```	// Staging에 있지않고 Working tree에 있기
- ```Changes to be committed``` 	//버전이될 파일들
- ```Untracked files``` 	//git이 한번도 관리하지않는 파일
- ```No commits yet```	//아직 버전이 없음
- ```Repository``` // 버전 저장소 .git을 의미
- ```Working tree``` // 버전으로 만들어지기 전단계, 파일을 수정하는곳
- ```Staging Area``` // 버전을 만들려고하는 파일들

### 기타
- diff tool
  - 차이점을 정겨하게 비교가능
- .gitignore
  - 버전관리를 안하고싶을때
- branch
  - 저장소에서 다양한 작업을 가능
- tag
  - commit id에 이름을 붙여서 쉽게 관리가능
- backup
  - 파일 백업
