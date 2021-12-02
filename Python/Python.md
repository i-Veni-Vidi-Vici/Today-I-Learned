#### 실행방법
##### shell
- 다시 실행할 필요가 없는 간단한 작업에 편리함
##### file
- 자주 사용하거나, 복잡한 작업을 할때 사용함
#### 실행 과정
- ```python```언어-> ```shell```, ```File``` -> ```python interpreter``` ->```운영체제```-> ```컴퓨터```

## Python Shell
- ```interactive mode```
- 휘발성 작업
### 실행 
- ```cmd```-> ```python```입력
- ```print(1+1)``` ->2출력, ```2+2``` -> 4출력	//```Shell```에서는 ```print``` 생략가능
- ```len("12345")``` 	-> 	5출력	//```len("word") = word```의 길이
- ```
  a=1
  b=1
  a+b	// 2출력
  ```
 
- ```a=1;b=1;a+b	->	2출력``` 	&nbsp;&nbsp;&nbsp;//한줄에 작성가능
- ```
  a=1;\	//\실행 유보
  b=1;\		//\실행 유보
  a+b	->2출력	//실행
  ```
- 키보드 위아래 방향으로 이전에 작성한 코드 불러옴
### 종료
- ```exit()```
## Python File
- 복잡한 작업을 위해 필요
#### 실행방법
##### vscode 터미널
- 첫번째 방법: ```python 파일명.py```		&nbsp;&nbsp;&nbsp;//python 실행
- 두번째 방법: ```vscode``` 오른쪽위 세모표시 클릭```(run python file)```	&nbsp;&nbsp;&nbsp;//```python``` 실행

### 문법
#### data type
- ```data type```에 따라 ```data``` 연산방법이 다르기 때문에 ```data type```을 엄격히 구분

##### 숫자형 data type
- ```int x``` 	&nbsp;&nbsp;&nbsp;//```integer data type```, 정수
- ```float x``` 	&nbsp;&nbsp;&nbsp;//```float data type```, 실수

###### 산술 연산자
- ```python
  print(1+1) ->2	//덧셈
  print(2-1) ->1	//뺄셈
  print(2*2)	 ->4	//곱셈
  print(4/2) ->2	//나누기
  print(2**4) ->16	//제곱
  print(7//3) ->2 	//정수 몫
  print(7%3) ->1	//나머지
  ```

##### star expression - Asterisk(*)
###### 곱셈
- ```python
  print(2*3)	#6출력
  ```
###### 제곱
- ```python 
  print(2**3)	#8출력
  ```
###### 데이터 반복 확장
- ```python
  d =[1,2]*10
  print(d)		#[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2] 출력
  a =(1,)*10
  print(a)		#(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)출력
  ```
