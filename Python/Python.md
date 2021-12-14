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

## 문법
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
#### 데이터 타입 변환
##### 정수변환 - ```int()```
- Convert a number or string to an integer, or return 0 if no arguments are given
- ```python
  int(x) 		# x를 정수(int) 타입으로 변환, 정수로 변환이 불가능하면 오류발생
  int("123")	# 정수 123으로 변경
  int("12a")	# 문자a로인해 정수로 타입으로 변경불가-> 오류
  int(False) 	# 0으로 정수 변환
  int(True)	# 1로 정수 변환
  ```
##### 실수변환 - ```float()```
- Convert a string or number to a floating point number, if possible
- ```python
  float()		# 0.0 return
  float(x) 		# x를 실수(float) 타입으로 변환, 실수로 변환이 불가능하면 오류발생
  float("123")  	# 실수 123.0으로 변환
  float("12a") 	# 문자a로 인해 오류
  float(False)	# 0.0 변환
  float(True)	# 1.0 변환
  ```
##### 문자열 변환 - ```str()```
- Create a new string object from the given object
- ```python
  str(x) 		# x를 문자열(str) 타입으로 변환
  str(123)		# 문자열 "123"으로 변환
  str(True)	# 문자열 "True"로 변환
  ```
##### 문자로 변환 - ```chr()```
- Return a Unicode string of one character with ordinal i (str(i))
- ```python
  chr(x)		# x를 unicode값으로 문자열로 변환
  chr(65)		# 문자열 "A"로 변환
  chr(True)	# True=1 이므로 unicode 1에 대한 값으로 변환
  ```
##### bool로 변환 - ```bool()```
- Returns True when the argument x is true, False otherwise
- ```python
  bool(x)		# x를 bool 타입으로 변환
  bool()		# False로 변환
  bool(1) 	# True로 변환
  bool(0)		# False로 변환
  bool("abc")	# True로 변환
  bool("")        # False로 변환
  bool(0.0)	# False로 변환
  bool(0.1)	# True로 변환
  ```
#### 문자열 치환 - ```replace() ```
- Return a copy with all occurrences of substring old replaced by new
- 새롭게 교체된 문자열copy를 return
- ```python
  문자열.replace(a, b, c)	# a= 변경할 문자열, b= 새 문자열, c= 횟수 기본값= -1(모두 변경)
  a = 'abd'
  a.replace('d', 'c')		# 'abc'로 교체된 copy를 return, 문자열은 수정불가
  b ='aBaaAa'
  b.replace('a', 'b', -1)	# 'bBbbAb'로 교체된 copy를 return, -1은 모두변경
  b.replace('a', 'b', 2)	# 'bBbaAa'로 교체된 cpty를 return, 2번 변경
  ```

#### 문자열 분할 - ```split()```
- Return a list of the words in the string, using sep as the delimiter string
- ```문자열.split(sep='a', maxsplit='b')	```
	-  ```sep``` : 구분자, 기본값(없음)은 공백에따라 분할, ```sep``` 생략가능
	-  ```maxsplit``` :  최대 분할 수, 기본값(-1)은 최대로 분할, ```maxsplit``` 생략가능하지만 ```maxsplit```이 기본값이 아니면 ```sep```가 존재해야함
	-  ```sep```의 구분자``a```를 기준으로 문자열을 ```b```번 분할
- ```python
  c='ab,ac,ad'
  print(c.split(sep= ',', maxsplit=2))	->['ab', 'ac', 'ad']출력 # 구분자','으로 문자열c를 2번 분할
  d= 'a b c'
  print(d.split(maxsplit=1))	->['a', 'b c']출력 	# 기본값 구분자' '(공백)으로 문자열d를 1번분할
  print(d.split())	->['a', 'b', 'c']출력 	#기본값 구분자' '(공백)으로 문자열d를 기본값(-1) 최대분할
  print(d.split(1))->error	#maxsplit가 기본값이 아니면, sep가 존재해야함
  ```
#### 문자열의 길이 - ```len()```
- Return the number of items in a container
- ```python
	print(len('Hello world'*1000))		# 문자열의 길이
	```
#### 문자열 공백 제거 - ```strip()```
- Return a copy of the string with leading and trailing whitespace removed
- 앞 뒤 공백이 제거된 문자열 copy를 return
- ```python
	print('1    1    1'.strip(),'2')		# 1    1    1 2출력, 그대로
	print('    1    '.strip(),'2')		# 1 2 출력, 앞 뒤 공백 제거
	print('    1    '.lstrip(),'2')		# 1     2 출력, 앞 공백만 제거
	print('    1    '.rstrip(),'2')		#     1 2 출력, 뒤 공백만 제거
	```

#### 문자열 대문자로 변경 - ```upper()```
- Return a copy of the string converted to uppercase
- 대문자로 변경된 문자열 copy를 return
- ```python
	print('abc'.upper())	# ABC 출력, 모든 소문자를 대문자로 변경후 출력
	```
#### 문자열 소문자로 변경 - ```lower()```
- Return a copy of the string converted to lowercase
- 소문자로 변경된 문자열 copy를 return
- ```python
	print('ABC'.lower())	# abc 출력, 모든 대문자를 소문자로 변경후 출력 
	```
#### 문자열 대문자 확인 - ```isupper()```
- Return True if the string is an uppercase string, False otherwise
- 모든 문자열이 대문자이면 ```True```, 하나라도 소문자가 있다면 ```False```, 한개 이상의 알파벳이 전부 대문자이고 한글이나 숫자, 기호 등이 있으면 ```True```, 대문자 알파벳이 한개도 없고 한글이나 숫자 기호가 있으면 ```False```
- ```python
	print('ABc'.isupper())	# False 출력, c 소문자
	print('ABC'.isupper())	# True 출력, 모두 대문자
	print('A과'.isupper())	# True 출력, A가 대문자이기 때문에
	print('과'.isupper())	# False 출력, 대문자 알파벳이 하나도 없기때문에
	```
#### 문자열 소문자 확인 - ```islower()```
- Return True if the string is a lowercase string, False otherwise
- 모든 문자열이 소문자이면 ```True```, 하나라도 대문자가 있다면 ```False```, 한개 이상의 알파벳이 전부 소문자이고 한글이나 숫자, 기호 등이 있으면 ```True```, 소문자 알파벳이 한개도 없고 한글이나 숫자 기호가 있으면 ```False```
- ```python
	print('Abc'.islower())	# False 출력, A 대문자
	print('abc'.islower())	# True 출력, 모두 소문자
	print('a과 '.islower())	# True 출력, a가 소문자이기 때문에
	print('과 '.islower())	# False 출력, 소문자 알파벳이 하나도 없기때문에
	```
	
#### 문자열 첫문자 대문자 변경 - ```capitalize()```
- Return a capitalized version of the string
- 첫문자를 대문자로 변경
- ```python
	print('abc'.capitalize())	# Abc출력, 첫문자만 대문자로 변경후 출력
	print('abcapple apple,apple.app6appㄱapp'.title())	#Abcapple Apple,Apple.App6AppㄱApp출력, 공백, 기호, 숫자, 한글이 알파벳사이에있으면 한 단어로취급
	```

#### 문자열 단어의 첫문자를 대문자 변경 - ```title()```
- Return a version of the string where each word is titlecased
- 문자열의 단어들의 첫문자를 대문자로 변경
- ```python
	print('abc'.title())		# Abc출력, 단어의 첫문자를 대문자로 변경후 출력
	```
#### 문자열 접미사 확인 - ```endswith()```
- Return True if S ends with the specified suffix, False otherwise
- 문자열의 접미사를 확인하여 같으면 ```True```, 틀리면 ```False``` Return
- ```python
	print('abcdefg'.endswith('efg'))	# True 출력, 처음부터 끝까지의 접미사
	print('abcdefg'.endswith('efg',4))	# True 출력, 문자열[4]자리부터 끝까지'efg'의 접미사
	print('abcdefg'.endswith('efg',5))	# False 출력, 문자열[5]자리부터 끝까지'fg'의 접미사
	print('abcdefg'.endswith('efg',4,7))	# True 출력, 문자열[4]~[7-1]까지'efg'의 접미사
	print('abcdefg'.endswith('efg',4,6))	# False 출력, 문자열[4]~[6-1]까지'ef'의 접미사
	```

#### 문자열 접두사 확인 - ```startswith()```
- Return True if S starts with the specified prefix, False otherwise
- 문자열의 접두사를 확인하여 같으면 ```True```, 틀리면 ```False``` Return
- ```python	
	print('abcdefg'.startswith('abc'))	# True 출력, 처음부터 끝까지의 접두사
	print('abcdefg'.startswith('abc',0))	# True 출력, 문자열[0]부터 끝까지의 접두사
	print('abcdefg'.startswith('abc',1))	# False 출력, 문자열[1]부터 끝까지'bcdefg'의 접두사
	print('abcdefg'.startswith('abc',0,2))	# False 출력, 문자열[0]~[2-1]까지'ab'의 접두사
	print('abcdefg'.startswith('abc',0,3))	# False 출력, 문자열[0]~[3-1]까지'abc'의 접두사
	```

### list data type
- Built-in mutable sequence
- 수정가능
- 데이터의 순서를 정해 데이터를 관리하는 data type
- ```python
	example = [1, 2, 'abc']		#1,2,'abc' = 원소(element), list
	print(example[0]) ->1	#[0] 첫번째원소인 1출력
	print(example[-1]) ->abc	#[-1]은 마지막원소 'abc'를 가르킴,example[2]과 같음
	print(example[-2]) ->2	#[-2]는 두번째원소 2를 가르킴 example[1]과 같음
	print(example[-1][1]) ->b
	print(len(example)) ->3	#원소 개수인 3출력
	num =[2,1,3]		#원소가 int형식인 list
	print(min(num))	->1	#num의 원소중 최솟값
	print(max(num)) ->3	#num의 원소중 최댓값
	print(sum(num)) ->6	#num의 원소 합계	 sum(x, start)	= start(초기값) + x데이터들의 합
	print(sum([2,3],1))		#6 출력, 2+3+1
	```
#### list 연산
##### 덧셈
- ```python
	a=[1,2,3]
	b=[4,5]
	print(a+b) # [1, 2, 3, 4, 5]출력,덧셈
	```
##### 곱셈
- ```python
	a= [1,2]
	print(a*2) # [1, 2, 1, 2]출력, 곱셈
	```


#### list 슬라이싱
- ```list``` 자르기
- ```python
	[start : stop : step]	#start = 슬라이싱 시작 위치, stop = 슬라이싱 끝나는위치 stop은 포함하지 않음, step = 양수일때 왼쪽부터 step에 따라 포함, 음수일때 오른쪽부터 step에 따라 포함
	a= [1,2,3]
	print([a[1:2]]) ->[2]	//[1]부터[2-1]까지
	print(a[1:]) ->[2,3]	//[1]부터 끝까지
	print(a[:1]) ->[1]		//[1-1]부터 처음까지
	print(a[::2]) ->[1,3]	//전체범위에서 왼쪽부터 index+2마다 출력
	print(a[::-1]) ->[3, 2, 1]	#전체 범위에서 오른쪽부터 index-1마다 출력
	print(a[0::-1]) ->[1]	# [0]부터 끝까지 오른쪽부터 index-1마다 출력
	print(a[2:0:-1]) -> [3, 2]	# [2]부터 [0+1]까지 오른쪽부터 index-1마다 출력
	```
#### list 값 수정
- ```python
	a= [1, 2, 2]
	a[2] =3		#두번째 원소 수정
	print(a) ->[1,2,3]	
	```

#### list 값 삭제 - ```del()```
- ```python
	del a[x]		# x번째 원소삭제, 범위삭제가능 파이썬 자체 함수 = del(a[x])
	a= [1,2,4]
	del a[2:] 	# [2]부터 끝까지 삭제 = del(a[2:])
	print(a)	# [1, 2] 출력	
	```
#### list 값 추가 - ```append()```
- Append object to the end of the list
- ```python
	list.append(x)	# list 끝에 값x을 추가
	a =[1, 2]
	a.append(3)	#a list 끝에 3을 추가
	print(a) # [1, 2, 3]
	```

#### 특정위치에 값 추가 - ```insert(x,y)```
- Insert object before index
- ```python
	list.insert(x, y)	#list[x]앞에 값 y를 추가
	a= [1, 3]
	a.insert(1,2)	#[1]앞에 2를 추가, 즉 위치[1]에 2를 추가
	print(a) #[1, 2, 3]
	```

#### list 특정값 삭제 - ```remove(x)```
- Remove first occurrence of value
- Raises ValueError if the value is not present
- ```python
	list.remove(x)	#list의 첫번째로 나오는 값x를 삭제, 존재하지 않으면 에러발생
	a =[1, 2, 4, 3, 4]
	a.remove(4)	#a[2]의 값4가 삭제
	print(a) #[1, 2, 3, 4]
	```

#### list 값 반환후 삭제 - ```pop()```
- Remove and return item at index (default last)
- Raises IndexError if list is empty or index is out of range
- ```python
	list.pop()	#list의 마지막 원소를 return하고 삭제
	list.pop(x)	#list의 [x]원소를 return하고 삭제
	```
- ```python
	a =[1, 2, 3]
	print(a.pop()) 	#3출력, 마지막 원소인 a[2]를 return후 삭제
	print(a) #[1,2]
	```
- ```python
	a =[1, 2, 3]
	print(a.pop(1)) #2출력, a[1]원소를 return후 삭제
	print(a) #[1, 2]	
	```

#### list 확장 - ```extend()```
- Extend list by appending elements from the iterable
- ```python
	list.extend(x)	#list끝에 x리스트를 연결,list덧셈과는 달리 list에 저장됨
	a= [1, 2, 3]
	b= [4, 5, 6]
	a.extend(b)	#a끝에 b리스트를 연결
	print(a)	#[1, 2, 3, 4, 5, 6]
	```
- ```python
	a= [1, 2, 3]
	b= [4, 5, 6]
	a.extend(b[:2])	#a끝에 b[2-1]부터 처음까지 리스트를 연결
	print(a)	#[1, 2, 3, 4, 5]
	```
- ```python	
	a= [1, 2, 3]
	a.extend('abc')	#a끝에 'abc'를 연결
	print(a)	#[1, 2, 3, a, b, c]
	```
#### list 복사 - ```copy()```
- Return a shallow copy of the list
- ```python
	list.copy()	#list 복사후 return
	a= [1,2,3]
	print(a.copy()) ->[1, 2, 3]	#a list 복사후 return
	id(a) 와 id(a.copy()) 값이 다름, copy를 통해 새로운 list가 생성
	print(a[1:].copy) ->[2,3]	#a[1]부터 끝까지 복사후 return
	```

#### list 순서 뒤집기 - ```reverse()```
- Reverse *IN PLACE*
- ```python
	list.reverse()	#list 순서 뒤집기
	a=[1, 2, 3]
	a.reverse()	#a list 순서 뒤집기
	print(a) ->[3, 2, 1]
	```

#### list 정렬 - ```sort()```
- Sort the list in ascending order and return None
- ```python
	list.sort(reverse= False) 	#list를 오름차순으로 정렬,(reverse= False)기본값으로 생략가능, list원소의 data type이 동일해야함
	list.sort(reverse= True)	#list를 내림차순으로 정렬
	a= [3, 2, 1]
	a.sort()		//a list를 오름차순으로 정렬
	a.sort(reverse= False)		#a list를 오름차순으로 정렬
	print(a) ->[1, 2, 3]
	a.sort(reverse= True)		#a list를 내림차순으로 정렬
	print(a) 	# [3, 2, 1]
	```
- ```python
	a= ['c', 'a', 'ad']
	a.sort()		#a list를 오름차순으로 정렬
	print(a) ->['a', 'ad', 'c']
	```
- ```python
	a= [[3], [1, 4 ,5], [1]]
	a.sort()		#a list를 오름차순으로 정렬
	print(a) ->[[1], [1, 4, 5], [3]]
	```

#### list 값x의 개수 - ```count(x)```
- Return number of occurrences of value
- ```python
	list.count(x)	#list의 x값 개수 return
	a = [1, 2, 3, 1, '1', "1", "12", 12]
	print(a.count(1)) ->2	#a list의 1값 개수 return
	print(a.count('1')) ->1	#a list의 '1'값 개수 return
	```

#### list 값x의 위치 - ```index(x)```
- Return first index of value
- Raises ValueError if the value is not present
- ```python	
	list.index(x)	#list의 x값의 위치를 return
	a =[1, 2, 3, 1]
	print(a.index(1)) ->0 #a list의 첫번째 값1의 위치 return
	```
#### list 원소 전체 삭제 - ```clear()```
- Remove all items from list
- ```python
	list.clear()	#list 원소 전부삭제
	a=[1, 2, 3]
	a.clear()		#a list 원소 전부삭제
	print(a) -> []
	```

#### list 문자열로 합치기 - ```join()```
- Concatenate any number of strings
- list를 문자열로 연결
- ```python
	'구분자'.join(list)
	print(''.join([1,2,3,'abc'])) 	# error list안은 오직 문자열만 있어야함
	print(''.join(['a','b','c',]))	# abc 출력
	print(' '.join(['a','b','c',]))	# a b c 출력
	print('.'.join(['a','b','c',]))	# a.b.c 출력
	```
### tuple
- Built-in immutable sequence
- ```tuple```의 값 변경 불가
- ```()```를 사용, 생략가능
- 인수가 한개일때 ```(1, )```처럼 콤마```(,)```를 반드시 붙여야함
- ```tuple```의 값 변경은 불가능하지만, ```tuple``` 값 변경이 아닌 ```인덱싱```, ```슬라이싱```, ```len()```, ```더하기``` 등은 가능
- ```python
	t1 = 1, 2, 3
	t2 = 1,
	t3 = (1, 2, 3)
	t4 = (1, )
	print(t1, t2, t3, t4) -> (1, 2, 3) (1,) (1, 2, 3) (1,)
	```
#### tuple 언팩킹
- ```python
	a,b,c = ('d','e','f')
	print(a,b,c)	# d e f 출력, tuple의 unpacking 기능으로 하나씩 값을 받을수 있음
	```
#### tuple 데이터 타입 변환
- ```tuple```과 ```list```는 형변환이 양쪽다 가능
- ```iterable```한 객체 ```리스트```, ```딕셔너리```, ```집합```, ```문자열```등이 ```tuple```로 변환 가능

### 딕셔너리 - ```dictionary```
- ```python
	{'Key':'Value'}	#딕셔너리는 index 대신 immutable한 Key값을 사용하고 Key로 그 'Key'에 대한  'Value'에 접근 Key값에는 mutable한 list,set는 불가
	```
#### 딕셔너리 ```Key``` 추가
- ```python
	a = {'a':'a','b':'b'}
	a['c']= 'c'
	print(a)		#{'a': 'a', 'b': 'b', 'c': 'c'} 출력
	```
#### 딕셔너리 ```Value``` 변경
- ```python
	a = {'a':'a','b':'b'}
	a['b']= 'c'
	print(a)		#{'a': 'a', 'b': 'c'} 출력
	print(a['b'])	#c출력 	
	```

#### 딕셔너리 ```Key``` 유무확인 - ```in```
- ```python
	a = {'a':'c','b':'d'}
	if 'b'  in a:
    		print('Yes')	# Yes 출력
	else:
    		print('No')	# No 출력
	```

#### 딕셔너리 ```Value``` 유무확인 - ```in```
- ```python
	a = {'a':'c','b':'d'}
	if 'd'  in a.values():
    		print('Yes')	# Yes 출력
	else:
    		print('No')	# No 출력
	```
#### 딕셔너리 ```Key```집합 - ```.keys()```
- D.keys() -> a set-like object providing a view on D's keys
- ```python
	a = {'a':'c','b':'d'}
	print(a.keys())	#dict_keys(['a', 'b']) 출력
	```

#### 딕셔너리 ```Value```집합 - ```.values()```
- D.values() -> an object providing a view on D's values
- ```python
	a = {'a':'c','b':'d'}
	print(a.values())	#dict_values(['c', 'd']) 출력
	```

#### 딕셔너리 ```Key```, ```Value``` 한쌍으로 나타내기	- ```.items()```
- D.items() -> a set-like object providing a view on D's items
- ```python
	a = {'a':'c','b':'d'}
	print(a.items())	# dict_items([('a', 'c'), ('b', 'd')]) 출력
	```

#### 딕셔너리 ```Key```에 해당하는 ```Value```  - ```.get()```
- ```python
	a = {'a':'c','b':'d'}
	print(a.get('a'))	# c출력
	print(a.get('c'))	# None 출력
	```

#### 딕셔너리 한쌍의 ```Key```, ```Value``` 삭제 - ```del```
- ```python
	a = {'a':'c','b':'d'}
	del a['a']
	print(a)	# {'b': 'd'} 출력
	```

#### 딕셔너리 모든 ```Key```, ```Value``` 삭제 - ```.clear()```
- D.clear() -> None. Remove all items from D
- ```python
	a = {'a':'c','b':'d'}
	a.clear()
	print(a)
	```

#### 딕셔너리 병합 -  ```.update()```
- ```python
	a.update(b)	# 딕셔너리 a 뒤에 b를 연결
	a ={'a':'a','b':'b'}
	b ={'c':'c'}
	a.update(b)	# {'a': 'a', 'b': 'b', 'c': 'c'}출력 
	```
#### 자료형 생성 - ```zip()```
- The zip object yields n-length tuples, where n is the number of iterables passed as positional arguments to zip()
- This continues until the shortest argument is exhausted
- 자료형의 같은 index의 값을 묶어 생성
- ```python
	print(list(zip('abcdefg', range(3), range(4))))	#[('a', 0, 0), ('b', 1, 1), ('c', 2, 2)] 출력, list자료형으로 tuple로 같은 index끼리 묶어 생성
	a= ['a','b','c']
	b= [1,2]
	print(dict(zip(a,b)))		# {'a': 1, 'b': 2} 출력, 짝이없는 값은 사용되지않음
	```
