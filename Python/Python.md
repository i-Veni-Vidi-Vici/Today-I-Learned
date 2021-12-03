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
##### 가변인자 - packing
###### positional arguments
- ```python
  def a(*arg):
    print(arg)
  b =[1,2,3,4]
  a(b)		#([1, 2, 3, 4],)출력, tuple에 저장됨
  ```
###### keyword arguments
- ```python
  def a(**arg):
    print(arg)
  a(ab='b',ac='c')	# {'ab': 'b', 'ac': 'c'}출력, dict에 저장됨
  ```
##### unpacking
- ```python
  a= [1,2,3]
  def b(*num):
      print(num)
  b(*a)		#(1, 2, 3) 출력, tuple에 [1,2,3]이 저장되는게 아니라 하나의 원소씩 저장됨	
  ```
- ```python
  a= {'a':'a', 'b':'b'}
  def b(**num):
      print(num)
  b(**a)		#{'a': 'a', 'b': 'b'} 출력
  ```

- ```python
  num= [1,2,3]
  *a, =num
  print(a)		#[1, 2, 3]출력
  *a,b =num
  print(a)		#[1, 2]출력
  a,*b =num
  print(b)		#[2, 3]출력
  a,*b,c=num
  print(b)		#[2]출력
  ```

#### math

- ```python
  import math	# 수학과 관련된 함수를 가지고 있는 math 모듈 불러오기
  math.sqrt(x) 	# Return the square root of x, 제곱근
  math.pow(x,y)	# Return x**y(x to the power of y), x의y제곱 or x의y승
  ```

#### 문자열(string) data type
- 수정 불가
- ```python
  print('abc') #abc출력,문자열
  print("abc") #abc출력,똑같은 문자열
  a ='abc'
  print(a[-1])	#c출력, [-1]마지막문자 c를가르킴, a[2]와 같은표현
  print('''		#줄바꿈 가능한 문자열, """text"""로도 가능
  a	      #a 출력
  b	      #b 출력
  c	      #c 출력
  ''')
  ```

##### 이스케이프 코드
- 문자열 내부에서 특수하게 사용할수 있게 약속된 코드
- ```\\``` = 역슬래시(\)  
- ```\'``` = 작은따옴표(')
- ```\"``` = 큰따옴표
- ```\n``` = 줄바꿈(개행)
- ```\t``` = Tap간격
##### 결합 연산자
- ```python
  print('1'+'1') #11출력, 문자열의 덧셈 연산자
  print('Hello world'*1000) #Hellop world 1000번 출력,문자열의 곱셈 연산자
  ```
