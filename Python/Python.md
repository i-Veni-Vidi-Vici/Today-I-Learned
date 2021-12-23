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
#### statistics
- 데이터의 수학적 통계를 계산하는 함수를 제공
- ```python
	import statistics		#statistics 모듈 불러오기
	print(statistics.mean(num))		#2출력, num의 평균
	```


#### range
- 연속적인 정수 객체를 ```return```, 주로 ```반복문(for)```과 함께 사용됨
##### range(stop)
- 기본값 ```start(0)```부터 ```stop(stop-1)```까지 연속된 정수를 생성하는 객체를 ```return 0<=x<stop```
- ```python
	range(3)	# 기본값 start(0)부터 stop(3-1)까지 연속된 정수를 생성하는 객체를 return 0<=x<3
	a = range(3) 	
	print(a) ->range(0, 3)
	print(type(a)) -><class 'range'>	# range로 생성된 정수의 객체는 일반 객체가아니라 range class 객체
	```

##### range(start, stop)
- ```start(start)```부터 ```stop(stop-1)```까지 연속된 정수를 생성하는 객체를 ```return start<=x<stop```
- ```python
	range(-1, 2) 	# start(-1)부터 stop(2-1)까지 연속된 정수를 생성하는 객체를 return -1<=x<2
	```
##### range(start, stop, step)
- ```start(start)```부터 ```stop(stop-1)```까지 ```step(증가 or 감소)```으로 연속된 정수를 생성하는 객체를 ```return start<=x<stop```
- ```python
	range(3, -2, -2)	#start(3)부터 stop(-2+1)까지 step(-2)감소로 연속된 정수를 생성하는 객체를 return 3>=x>-2 (3, 1, -1)
	for i in range(3, -2, -2):
    		print(i)	#3, 1,-1순서대로 출력
	```


#### random
- ```python
	import random	#random variable generators, 랜덤한 변수생성기인 random 모듈 불러오기
	```
##### random()
- ```python
	random.random()		#float, random() -> x in the interval [0,1), 0이상 1미만의 랜덤한 실수(0<=x<1)
	```
##### uniform(a,b)
- ```python
	random.uniform(a,b)	#float, Get a random number in the range [a, b) or [a, b] depending on rounding, 반올림에따라 a이상 b이하의 랜덤한 실수(a<=x<=b)
	```

##### randint()
- ```python
	random.randint(a,b)		#int, Return random integer in range [a, b], including both end points, a이상 b이하의 랜덤한 정수(a<=x<=b)
	```

##### randrange()
- ```python
	random.randrange(a,b)	#int, choose a random item from range[x,y), a이상 b미만사이의 랜덤한 정수(a<=x<b)
	random.randrange(b)	#int, 0이상 b미만의 랜덤한 정수(0<=x<b)
	```

##### choice()
- ```python
	random.choice()		#Choose a random element from a non-empty sequence, sequence data type= 문자열(string), 리스트(list), 튜플(tuple), range(b) 중 랜덤한 원소
	```
- ```python
	random.choice('abcd')	#문자열(string), 'abcd'문자열중 랜덤한 문자
	random.choice([1,5,'a'])	#리스트(list), 1,5,'a'중 랜덤한 원소	
	random.choice((1,5,'a'))	#튜플(tuple), 1,5,'a'중 랜덤한 원소
	random.choice(range(b))	#range(b) 0이상 b미만의 랜덤한 정수 (0<=x<b)
	random.choice(range(a,b))	#range(a,b) a이상 b미만의 랜덤한 정수 (a<=x<b)
	```

##### sample()
- ```python
	random.sample(a,k)	#Chooses k unique random elements from a population sequence or set, a= sequence or set, k= 랜덤하게 뽑을 인자의 개수, a인자의 개수>=k
	random.sample('abcd',k)	#문자열(string), 'abcd'문자열 중 랜덤하고 고유한 k개의 인자, k=2->[d,a] 
	random.sample({1,2,3,(5,6)},k)	#집합(set), 1,2,3,(5,6) 중 랜덤하고 고유한 k개의 인자, k=3->[2,(5,6),1]
	```

##### shuffle()
- ```python
	random.shuffle(x)		#Shuffle list x in place, and return None, x는 sequence data type 중 내부인자를 변경할 수 있는 list만 가능하며, data의 순서를 랜덤하게 바꿈
	```
#### 변수
- ```python
	name = 'se'	#변수 지정
	message = 'hi '+name+' bye '+name+'.'	#변수를 문자열에 넣기
	print(message)
	```

#### input & output
- ```python
	name = input('name: ')	#input se입력
	print(name) ->se		#input된 값 출력
	```

##### print()
- Prints the values to a stream, or to sys.stdout by default
- 출력함수
###### print() option
###### end
- 마지막 출력값 다음 출력할 문자
- 기본값은 줄바꿈(개행)
- ```python
	print(12, end="3") # 123출력
	print("abc"); print("d") 
	# abc
	# d 출력
	```
- ```python
	print("abc", end=""); print("d") # abcd 출력, 기본값인 줄바꿈이 변경됨
	```
##### seq
- 출력값 사이를 구분할 구분자
- 기본값은 띄어쓰기(공백)
- ```python
	print(1,2,3) # 1 2 3출력
	print(1,2,3, sep="") #123출력
	```

#### 문자열 formatting
- 문자열안에 변수를 넣어 편리하게 사용하게하는것
##### format()
- ```python
	'{0}, {1}'.format(data1,data2)  	# {0}자리에 data1, {1}자리에 data2 대입, {}안 0,1은 format의 인자 순서, 인자 순서 생략시 인자 순서대로 대입
	print('num: {}, {1}'.format(1,2)) 	# error format 인자의 순서가 생략되면 다 생략되어야함
	print('num: {}, {}'.format(1,2)) 	# num: 1, 2 출력, 인자순서 생략
	print('num: {1}, {0}'.format(1,2))	# num: 2, 1 출력, 인자순서입력 
	```
##### 중괄호
- ```python
	print('중괄호 {{중괄호}}'.format(1))	# 중괄호 {중괄호} 출력, 중괄호 입력방법
	print('중괄호 {{{}}}'.format(1))	# 중괄호 {1} 출력, 중괄호안에있는 데이터출력
	```
#### 정렬
##### 왼쪽
- ```python
	{index:<n}	# n만큼의 자리에서 {index}의 위치인 format 인자 값을 왼쪽정렬(<), 나머지는 기본값 공백으로 채움
	print('s{0:<6}e s{1:<10}e'.format('left6','left10'))	# sleft6 e sleft10    e 출력, {0}값을 6(:<6)자리에서 왼쪽 정렬(<), {1}값을 10자리(:<10)에서 왼쪽정렬(<)
	```
##### 오른쪽
- ```python
	{index:>n}	# n만큼의 자리에서 {index}의 위치인 format 인자 값을 오른쪽정렬(>), 나머지는 기본값 공백으로 채움
	print('s{0:>7}e s{1:>10}e'.format('right7','right10'))	# s right7e s   right10e 출력, {0}값을 7(:>7)자리에서 오른쪽 정렬(>), {1}값을 10자리(:>10)에서 오른쪽정렬(>)
	```
##### 가운데
- ```python
	{index:^n}	# n만큼의 자리에서 {index}의 위치인 format 인자 값을 가운데정렬(^), 나머지는 기본값 공백으로 채움 , 가운데 정렬시 n자리개수에따라 양쪽 공백의 개수가 다를 수 있음
	print('s{0:^9}e s{1:^13}e'.format('center9','center13'))	# s center9 e s  center13   e 출력, {0}값을9(:^9)자리에서 가운데정렬(^), {1}값을13(:^13)자리에서 가운데정렬(^) 가운데 정렬시 양쪽공백의 개수가 동일하지않으면 완벽한 가운데 정렬이 되지않음
	```
##### 공백 대신 다른값으로 채우기
- ```python
	print('s{0:.<6}e s{1:.<10}e'.format('left6','left10'))	# sleft6.e sleft10....e 출력, 공백대신 다른 값으로 채우기, 문자1개만 가능
	```
#### 자리수 표현
##### 자리수
- ```python
	{index:0Nd}	# 0= 정수의 자리수가 N보다 작을때 0으로 앞자리가 채워짐 0없을시 공백으로 채워짐, N= 자리수, d= 정수
	print('3자리: {0:03d}, {1:03d}'.format(123456,1))	# 3자리: 123456, 001 출력, 정수 자리수
	print(f'{변수:03d}이다')	#f'{}'형식으로도 표현가능
	```
##### 소수점 자리수
- ```python
	{index:0.Nf}	# 0= 생략가능, 0n.Nf일때 총 자리수가 n보다 작을때 정수 앞부분에 0으로 채워짐, 0없을시 공백으로 채워짐, 0.= 생략가능, .N= 소수점 자리수(N)와 함께 입력,  N=  소수점 자리수를 N만큼 출력 소수점 자리수가 N보다 작을시 뒤에0으로 채워짐, 소수점 자리수가 N보다 클때 반올림되어 N자리만큼 표현됨
	print('1자리: {0:0.1f}, 2자리: {1:0.2f}'.format(123.456,1)) 		# 1자리: 123.5, 2자리: 1.00 출력, {0}값은 1자리수까지 반올림되어 출력, {1}값은 2자리수까지 공백은0으로 채워져 출력 
	print('6자리: {0:010f}, 6자리: {1:010f}'.format(123.456,1))		# 6자리: 123.456000, 6자리: 001.000000 출력, (.)소수점이 없기 때문에, 기본값 소수점 자리 6자리와 총 자리수가 10보다 작으면 앞정수부분을 0으로 채움
	print('6자리: {0:f}, 6자리: {1:f}'.format(123.456,1))		# 6자리: 123.456000, 6자리: 1.000000 출력, 기본 소수점자리 6자리까지 출력
	```

#### % formatting
##### 정수
- ```python
	'%d' % x	# 정수타입(d)의  변수x(정수, 실수도 가능)를 %d에 정수로 대입
	print('age: %d'%3)	# age: 3 출력, %d자리에 정수(d)3을 대입
	```
##### 실수
- ```python
	'%f' % x		# 실수타입(f)의  변수x(정수, 실수도 가능)를 %f자리에 실수로 대입
	print('float: %f, %f'%(3, 1.23))  	#float: 3.000000, 1.230000 출력, 변수 2개 소수점 자리 기본6자리 출력
	print('float: %0.1f, %0.2f'%(3,1.23))	#float: 3.0, 1.23 출력, 각각 소수점자리 1, 2자리 출력
	```
##### 문자열
- ```python
	'%s' % x	# 문자열타입(s)의  변수x(정수, 실수도 가능)를 문자열로 %s자리에 대입
	print('str: %s'%'abc')	# str: abc 출력
	```
##### 기타
- ```%%``` = 문자```%```표현
	- ```python	
		print('%d%%할인'%50)	# 50%할인 출력, % formatting 사용시 % 단독으로 사용불가
		```
- ```%o``` = 8진수, ```%x``` = 16진수, ```%c``` = 문자1개

##### f-string formatting
- ```python
	f'{x}'	# 문자열 앞에 f를 붙이면, {}를 이용해 문자열 안에 변수(x)를 넣어서 사용할 수 있음
	a = 'abc'
	print(f'name: {a}') 	# name: abc 출력, 문자열 안에 변수를 넣어 출력
	print(f'name: 1{a:.^10}1')	# name: 1...abc....1 출력, 변수 a를 10자리에서 가운데 정렬, 공백대신(.)으로 채움
	```

##### etc
###### tutorial
- 입문자에게 적합
###### library reference
- 라이브러리 소개
- ```Built-in Functions(내장 함수)```
###### language reference
- 언어 설명 
- 입문자가 보기 어려움
###### 디버깅
- 코드를 한줄 한줄 실행하여 오류를 체계적으로 잡을수 있음
###### pypi
###### pandas
- ```pip install pandas``` 	&nbsp;&nbsp;&nbsp;//&nbsp;pandas 설치
- ```python
	import pandas		#pandas 불러오기	
	house= pandas.read_csv('house.csv')		#house.csv를 pandas csv로 읽기
	print(house)	
	print(house.head(n))	#Return the first n rows, default =5, 원하는 행만큼 return
	print(house.describe())	#Generate descriptive statistics, 파일을 통계적으로 분석
	```

### 제어문
- ```python
	if 조건:
		실행부분
	```
- ```python
	a= 1
	if a ==1:		#a=1이기 때문에, if문 true
		print(a) 	#1출력, 다른언어와 달리 들여쓰기(Indentation)로 if문 영역을 구분
	elif a == 2:	#false
		print(2)
	else:		#false
		print(3)
#### 비교연산자
- ```python
	==	#같다
	!= 	#다르다
	<	#우항이 크다
	>	#좌항이 크다
	>=	#우항이 크거나 같다
	<=	#좌항이 크거나 같다
	```
#### 논리 연산자
- ```python
	a and b	#a와 b가 둘다 true일때 true
	a or b	#a 또는 b 둘중 하나만 true이면 true
	not a 	#a가 아닐때 true
	in	#특정 자료형(리스트, 튜플, 문자열) 안에 특정원소가 있으면 true
	not in	#특정 자료형(리스트, 튜플, 문자열) 안에 특정원소가 없으면 true
	```
- ```python
	if 1 in [1, 2, 3]:	#true
		print('true')  	#true출력
	```
- ```python
	if 1 not in [2, 3, 4]:	#true
		print('true') 	#true출력
	```
### 반복문
#### for
- ```python
	for 변수 in 문자열, 리스트, 튜플:	#python의 for문은 초기식, 조건식, 증감식의 반복이 아닌 문자열, 리스트, 튜플안의 원소값을 순서대로 가져오는 반복문
		실행부분		#들여쓰기(Indentation) tab으로 for문의 실행부분을 구분
	```
- ```python
	for i in [1, 2, 3]:		#리스트 1,2,3을 i에 차례대로 대입하면서 for문 실행 i=1 -> print(1), i=2 -> print(2) 
		print(i) 		#차례대로 1 2 3 출력 
	```
##### enumerate
- Return an enumerate object
- 두번째 인자```index(defalut = 0)```와 enumerate함수 첫번째 인자의 데이터를 ``tuple``형태로 ```Return```, 반복문과 함께 사용
- ```python
	enumerate(Iterable[str], start) 	# start= index 시작지점 return = (indexN, Iterable[str])
	```
- ```python	
	a =('a', 'b', 'c')
	for data in enumerate(a):
		print(data)	#(0, 'a') 출력, 기본값 0부터시작
				#(1, 'b') 출력
				#(2, 'c') 출력
	```
- ```python
	a ='abc'
	for data in enumerate(a[1:],1):	#index 시작지점= 1
		print(data)
		#(1, 'b')출력, 설정값 1부터 시작
		#(2, 'c')출력
	```
#### while
- ```python
	while 조건문:	#조건문이 True일때 실행부분을 계속해서 반복, 조건문이 false일때 while문 종료
		실행부분		#들여쓰기 tab으로 while문의 실행부분을 구분
	```
- ```python	
	i = 0
	while i<3:	#조건 i가 3보다 작을때까지만 반복
		print(i)	#i값 출력
		i= i+1	#i값 1씩 증가
	```
#### break
- (특정한 조건을 만족할때) 반복문을 중단시키는 기능
##### for
- ```python
  num =0		#문자위치
  for i in 'abcde':
    num=num +1	
    if i =='c':	#i=='c'일때 
        print(num)	#'c'의 문자위치를 출력하고
        break	# 반복문 중단
  else:		#반복문이 break되지 않으면 실행됨
        print('not break')	#실행x
	```
##### while
- ```python
	i =0
	stop = 2
	while i<3:	#i<3일때까지 반복
	    if i == stop:	#i ==stop일때
		print(i, stop)		#i값과 stop값을 출력하고
		break		#반복문 종료
	    i= i+1
	else:
	    print('not break')	#break되지 않으면 실행됨
	```

#### continue
- (특정한 조건을 만족할때) continue 아래 실행부분을 건너뛰고 해당 반복문의 시작부분으로 올라가서 실행
##### for
- ```python
	num = 0
	for i in [1, 3, 5, 3, 3 ,7 ,2]:
	    num = num +1
	    if i>4:		#i>4(살) 일때 
		print("Limited to over 5 years old :", num)	#출입제한된 번호출력
		continue	#아래 실행부분을 건너뛰고 for문 시작부분으로 이동
	    print("pass :", num)	#출입허가된 번호출력
	```

##### while
- ```python
	i = 0
	a= [1, 3, 5, 3, 3 ,7 ,2]
	while i<len(a):	#i가 a의 원소개수보다 작을때까지 반복
	    i= i+1		#list a의 원소 번호는 1부터 부여
	    if a[i-1] >4:	#a의 원소가 4보다 클때
		print("Limited to over 5 years old :", i)	#출입제한된 번호출력
		continue	#아래 실행부분을 건너뛰고 while문 시작부분으로 이동
	    print("pass :", i)		#출입허가된 번호출력
	```
### 함수
- 입력값을 통해 정의된 로직으로 결과값을 출력하는 것
- 무한히 재사용 가능한 로직
- ```매개변수(parameter)``` = 함수에서 입력값을 받는 변수 
	- 정의 ```def f (a, b, c):```에서 ```a, b, c```가 매개변수
- ```인수(arguments)``` = 함수의 입력값
	- 호출 ```f(1, 2, 3)```에서 ```1, 2, 3``` 이 인수 

#### 함수의 형태
###### 입력값, 반환값 둘 다 x
- ```python
	def f1():  # 함수 선언, 입력,반환값 둘다 없음
	    print("hi")	# hi 출력 x
	f1()    # 함수 호출 hi출력o
	```

###### 입력값만 존재
- ```python
	def f2(a,b,c):  # 함수 선언, 입력값 존재
	    print(a*b*c)
	f2(1,2,3)	#6출력
	```

###### 반환값만 존재
- ```python
	def f3():   # 함수 선언, 반환값 존재
	    return "a"  #a값 return
	str= f3()	# return된 값a 저장
	print(str)	#a 출력
	```

###### 입력값, 반환값 둘다 존재
- ```python
	def f4(a, b, c):	# 함수 선언, 입력,반환값 존재
	    return a*b*c
	b= f4(1,2,3)
	print(b)	# 6출력
	```

#### default 매개변수
- 매개변수에 ```default```값을 지정해주면, 그 매개변수를 사용하지 않을때 ```default```값이 사용됨
- ```python
	def f5(a, b, c=3):	  	# 마지막 매개변수에 default값 3으로 지정
	    return a*b*c
	b= f5(1,2)	# 마지막 인수가 없기 때문에, 매개변수 default 값 3이 사용됨
	print(b) 		# 6출력
	```

##### default error
- ```python
	def f6(a= 1, b, c):	  	# 첫번째 매개변수에 default값 1으로 지정 error
	    return a*b*c
	b= f6(2, 3)	# error
	print(b) 		# error
	b= f6( ,2,3)	# error
	print(b) 		# error
- 매개변수 ```default```값은 마지막 값부터 사용해야함
##### 매개변수 N개
- 매개변수를 입력값의 개수에 따라 생성
- ```def f(*매개변수): ```
- ```python
	def f7(*num):	# 매개변수 개수를 입력값의 개수에따라 생성
	    a =1		# 곱셈로직을 위해 1로설정
	    for i in num:	# 반복문을 통해 인자의 값을 차례대로 받아옴
		a = i*a	# 인자의 값 곱셈
	    return a
	c= f7(1,2,3)
	print(c)		# 6출력
	c= f7(1,2,3,4)
	print(c) 		# 24출력

### 클래스 - class()
- 함수의 집합
- 중복되는 함수를 클래스로 묶어 무한히 재사용가능한 로직
- 클래스 안의 ```함수(function)```를 ```메서드(method)```라고 부름
#### 클래스 형태
- ```python
	class 이름:		#class 선언
		def 함수(self):	# class의 메서드(함수)의 첫인자에는 주로 self를 받는데, self인자는 객체를 받아 객체변수를 생성할수 있게 함, self를 변경하거나 생략 가능하기도 함
			pass	# pass는 아무것도 수행하지않을때 임시로 코드를 작성할때 사용함
	```
- ```python	
	class Cal:
		def set1(self,x1,x2):
			self.first =x1
			self.second =x2
		def add(self):
			result =self.first + self.second
			return result
	```
#### 객체 - ```object```
- 하나의 클래스를 이용하여 무수한 많은 객체를 생성가능
- ```객체= 클래스()```
- ```python
	a= Cal()	# Cal()클래스를 사용하는 a객체생성 
	a.set1(1,2)	# class Cal()의 메서드 set1(a,1,2)가 대입됨에따라 self.first =x1 -> a.first =1 ,self.second =x2 ->a.second =2 로 객체a 변수가 생성됨
	print(a.first)	#1출력, a.first = 객체a 변수
	print(a.add())	#3출력,  result =a.first +a.second -> result = 1+2
	```
#### 인스턴스- ```instance```
- 객체와 비슷한 표현
- 객체가 어떤 클래스의 객체인지를 설명할때 사용
- ```a= Cal()```
	- ```a```는 객체
	- ```a```객체는 ```Cal()```의 인스턴스
