# Branch & Conflict.md
- ```git log --all --graph --oneline``` 	//시각적으로 로그를 한줄로 표현
- ```git branch 이름```		//branch 생성
- ```git branch```	//branch 목록보기
- ```git checkout apple```		//branch apple로 전환
- ```git merge o2``` 		//병합 o2에 추가된 것들을 master에 합치고 싶을때 master가 헤드여야함
- ```git reset --hard master id```	//병합된것을 취소하려면 주인공인 master를 취소
- 같은파일을 브랜치로 나눠서 합치면 git은 서로 다른부분을 합쳐줌

- ```git add work.txt``` 	//충돌이후, 충돌을 해결한후 입력하면 해결 했다는 의미

## 2 way merge
- ```
  a	a	=a  
  h	b	=?
  c	t	=?
  h	t	=?
  ```
## 3 way merge
- ```
  base 	here 	there
  a       a       a     = a
  b       h       b     = h
  c       c       t     = t
  d       h       t     = ?
  ```

## git mergetool
- ```p4merge``` 다운
- ```
  git config --global merge.tool p4merge
  git config --global mergetool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
  git config --global mergetool.prompt false
  ```
  - ```p4mergetool``` 등록  
- ```cat ~/.gitconfig```		//등록되었는지 확인
- ```git mergetool```  	//실행


## checkout & reset 이해
- 저장소를 만들면 ```HEAD```가 생기고 그 ```HEAD```는 ```master```를 가르킴
- ```version 1```을 만들면 ```master```는 ```version 1```을 가르킴
- ```version 2```를 만들면 부모는 ```version 1```이며 ```master```는 ```version 2``` 를 가르킴
- 새로운 ```branch```를 만들면 ```master```가 가르키는 ```version 2```를 가르킴
- ```checkout```으로 새로운```branch```를 가리키면 ```head```도 새로운 branch로 바뀜
- ```version 3```을 만들면, ```head```가 가르키는 새로운 ```branch```가 ```version 3```을 가르킴
- ```checkout```은 결국 ```head```값을 바꾸는 역활

- ```checkout```이 버전을 가르킬수도 있음 	//```detached``` 상태에있다고 말함

- ```checkout```은 ```head```를 바꿈
- ```reset```은 ```head```가 가르키는 ```branch```나 ```version```을 가르킴
- ```reset master```는```head```가 가르키는 ```branch```가 ```master```가 가르키는 ```version 2```번을 가르키게 변경
- 따라서 ```version 3```번은 사라지게 느끼게됨 결국 ``` reset 1```을 하면 새로운```branch```는 ```version 1```을 가르킴
