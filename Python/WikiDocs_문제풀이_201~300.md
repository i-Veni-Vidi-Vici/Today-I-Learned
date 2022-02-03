# 201~210
- ```python
  # 201
  # "비트코인" 문자열을 화면에 출력하는 print_coin() 함수를 정의하라.
  def print_coin():
      print("비트코인")
  # print_coin()  #정답
  ```
- ```python
  # 202
  # 201번에서 정의한 함수를 호출하라.
  # print_coin()  #정답
  ```
- ```python
  # 203
  # 201번에서 정의한 print_coin 함수를 100번호출하라.
  # i=0
  # while i<100:
  #     print_coin()
  #     print(i)
  #     i+=1  #정답
  #모범 정답 for i in range(100):
  #     print_coin()
  ```
- ```python
  # 204
  # "비트코인" 문자열을 100번 화면에 출력하는 print_coins() 함수를 정의하라.
  # def print_coin():
  #     print("비트코인\n"*100)
  # print_coin()  #정답
  # 모범 정답 def print_coins():
  # for i in range(100):
  #     print("비트코인")
  ```
- ```python
  # 205
  # 아래의 에러가 발생하는 이유에 대해 설명하라.
  # hello()
  # def hello():
  #     print("Hi")
  # 실행 예
  # NameError: name 'hello' is not defined
  # 함수 선언보다 함수 호출이 먼저 발생했기때문에 #정답
  ```
- ```python
  # 206
  # 아래 코드의 실행 결과를 예측하라.
  # def message() :
  #     print("A")
  #     print("B")
  # message()
  # print("C")
  # message()
  # A
  # B
  # C
  # A
  # B #정답
  ```
- ```python
  # 207
  # 아래 코드의 실행 결과를 예측하라. (읽기 어려운 코드의 예입니다.)
  # print("A")
  # def message() :
  #     print("B")
  # print("C")
  # message()

  # A
  # C
  # B #정답
  ```
- ```python
  # 208
  # 아래 코드의 실행 결과를 예측하라. (읽기 어려운 코드의 예입니다.)
  # print("A")
  # def message1() :
  #     print("B")
  # print("C")
  # def message2() :
  #     print("D")
  # message1()
  # print("E")
  # message2()

  # A
  # C
  # B
  # E
  # D #정답
  ```
- ```python
  # 209
  # 아래 코드의 실행 결과를 예측하라.
  # def message1():
  #     print("A")
  # def message2():
  #     print("B")
  #     message1()
  # message2()

  # B
  # A #정답
  ```
- ```python
  # 210
  # 아래 코드의 실행 결과를 예측하라.
  # def message1():
  #     print("A")
  # def message2():
  #     print("B")
  # def message3():
  #     for i in range (3) :
  #         message2()
  #         print("C")
  #     message1()
  # message3()

  #B
  #C
  #B
  #C
  #B
  #C
  #A  #정답
  ```
# 211~220
- ```python
  # 211
  # 함수의 호출 결과를 예측하라.
  # def 함수(문자열) :
  #     print(문자열)
  # 함수("안녕")
  # 함수("Hi")

  #안녕
  #Hi #정답
  ```
- ```python
  # 212
  # 함수의 호출 결과를 예측하라.
  # def 함수(a, b) :
  #     print(a + b)
  # 함수(3, 4)
  # 함수(7, 8)

  # 7
  # 15 #정답
  ```
- ```python
  # 213
  # 아래와 같은 에러가 발생하는 원인을 설명하라.
  # def 함수(문자열) :
  #     print(문자열)
  # 함수()
  # TypeError: 함수() missing 1 required positional argument: '문자열'
  # 함수호출시 함수의 인자를 생략했기 때문에 #정답
  ```
- ```python
  # 214
  # 아래와 같은 에러가 발생하는 원인을 설명하라.
  # def 함수(a, b) :
  #     print(a + b)
  # 함수("안녕", 3)
  # TypeError: must be str, not int
  # 문자열과 정수를 더할수 없다   #정답
  ```
- ```python
  # 215
  # 하나의 문자를 입력받아 문자열 끝에 ":D" 스마일 문자열을 이어 붙여 출력하는 print_with_smile 함수를 정의하라.
  # def print_with_smile():
  #     a= input()
  #     print(a+":D")
  # print_with_smile()    #정답
  ```
- ```python
  # 216
  # 215에서 정의한 함수를 호출하라. 파라미터는 "안녕하세요"로 입력하라.
  # print_with_smile()  #정답
  ```
- ```python
  # 217
  # 현재 가격을 입력 받아 상한가 (30%)를 출력하는 print_upper_price 함수를 정의하라.
  # def print_upper_price(a):
  #     print(a*1.3)
  # print_upper_price(10) #정답
  ```
- ```python
  # 218
  # 두 개의 숫자를 입력받아 두 수의 합을 출력하는 print_sum 함수를 정의하라.
  # def  print_sum(a,b):
  #     print(a+b)
  # print_sum(1,2)    #정답
  ```
- ```python
  # 219
  # 두 개의 숫자를 입력받아 합/차/곱/나눗셈을 출력하는 print_arithmetic_operation 함수를 작성하라.
  # print_arithmetic_operation(3, 4)
  # 3 + 4 = 7
  # 3 - 4 = -1
  # 3 * 4 = 12
  # 3 / 4 = 0.75
  # def print_arithmetic_operation(a,b):
  #     print(f'{a} + {b} = {a+b}')
  #     print(f'{a} - {b} = {a-b}')
  #     print(f'{a} * {b} = {a*b}')
  #     print(f'{a} / {b} = {a/b}')
  # print_arithmetic_operation(3, 4)  #정답
  ```
- ```python
  # 220
  # 세 개의 숫자를 입력받아 가장 큰수를 출력하는 print_max 함수를 정의하라. 단 if 문을 사용해서 수를 비교하라.
  # def print_max(a, b, c):
  #     if a>b and a>c:
  #         print(a)
  #     if b>c and b>a:
  #         print(b)
  #     if c>b and c>a:
  #         print(c)
  # print_max(1,2,3)  #정답
  # 정답 
  # def print_max(a, b, c) :
  #     max_val = 0
  #     if a > max_val :
  #         max_val = a
  #     if b > max_val :
  #         max_val = b
  #     if c > max_val :
  #         max_val = c
  #     print(max_val)
  ```
# 221~230
- ```python
  # 221
  # 입력된 문자열을 역순으로 출력하는 print_reverse 함수를 정의하라.
  # print_reverse("python")
  # nohtyp
  # def print_reverse(a):
  #     print(a[::-1])
  # print_reverse("python")   #정답
  ```
- ```python
  # 222
  # 성적 리스트를 입력 받아 평균을 출력하는 print_score 함수를 정의하라.
  # print_score ([1, 2, 3])
  # 2.0
  # def print_score(a):
  #     print(sum(a)/len(a))
  # print_score ([1, 2, 3])   #정답
  ```
- ```python
  # 223
  # 하나의 리스트를 입력받아 짝수만 화면에 출력하는 print_even 함수를 정의하라.
  # print_even ([1, 3, 2, 10, 12, 11, 15])
  # 2
  # 10
  # 12
  # def print_even(a):
  #     for i in a:
  #         if i%2 == 0:
  #             print(i)
  # print_even ([1, 3, 2, 10, 12, 11, 15])    #정답
  ```
- ```python
  # 224
  # 하나의 딕셔너리를 입력받아 딕셔너리의 key 값을 화면에 출력하는 print_keys 함수를 정의하라.
  # print_keys ({"이름":"김말똥", "나이":30, "성별":0})
  # 이름
  # 나이
  # 성별
  # def print_keys(a):
  #     for i in a:
  #         print(i)
  # print_keys ({"이름":"김말똥", "나이":30, "성별":0})   #정답
  ```
- ```python
  # 225
  # my_dict에는 날짜를 키값으로 OHLC가 리스트로 저장돼 있다.
  my_dict = {"10/26" : [100, 130, 100, 100],
             "10/27" : [10, 12, 10, 11]}

  # my_dict와 날짜 키값을 입력받아 OHLC 리스트를 출력하는 print_value_by_key 함수를 정의하라.
  # print_value_by_key  (my_dict, "10/26")
  # [100, 130, 100, 100]
  # def print_value_by_key(a,b):
  #     if b in a:
  #         print(a[b])
  # print_value_by_key(my_dict, "10/26")  #정답
  ```
- ```python
  # 226
  # 입력 문자열을 한 줄에 다섯글자씩 출력하는 print_5xn(string) 함수를 작성하라.
  # print_5xn("아이엠어보이유알어걸")
  # 아이엠어보
  # 이유알어걸
  # def print_5xn(string):
  #     a= ''
  #     x= 0
  #     for i in string:
  #         a+=i
  #         x +=1
  #         if x==5:
  #             print(a)
  #             x= 0
  #             a=''
  #     if x !=0:
  #         print(a)
  # print_5xn("아이엠어보이유알어걸") #정답
  # 정답 def print_5xn(line):
  #     chunk_num = int(len(line) / 5)
  #     for x in range(chunk_num+1) :
  #         print(line[x * 5: x * 5 + 5])
  ```
- ```python
  # 227
  # 문자열과 한줄에 출력될 글자 수를 입력을 받아 한 줄에 입력된 글자 수만큼 출력하는 print_mxn(string) 함수를 작성하라.
  # printmxn("아이엠어보이유알어걸", 3)
  # 아이엠
  # 어보이
  # 유알어
  # 걸
  # def print_mxn(string,b):
  #     for i in range(int(len(string)/b)):
  #         print(string[i*b:i*b+b])
  #     if len(string)%b:
  #         print(string[int(len(string)/b)*b::])
  # print_mxn("아이엠어보이유알어걸", 3)  #더 완벽한 정답
  # 정답 def print_mxn(line, num):
  #     chunk_num = int(len(line) / num)
  #     for x in range(chunk_num + 1) :
  #         print(line[x * num: x * num + num])
  # print_mxn("아이엠어보이유알어걸", 3)
  ```
- ```python
  # 228
  # 연봉을 입력받아 월급을 계산하는 calc_monthly_salary(annual_salary) 함수를 정의하라. 회사는 연봉을 12개월로 나누어 분할 지급하며, 이 때 1원 미만은 버림한다.
  # calc_monthly_salary(12000000)
  # 1000000
  # def calc_monthly_salary(annual_salary):
  #     print(int(annual_salary/12))
  # calc_monthly_salary(12000000)   #정답
  ```
- ```python
  # 229
  # 아래 코드의 실행 결과를 예측하라.
  # def my_print (a, b) :
  #     print("왼쪽:", a)
  #     print("오른쪽:", b)
  # my_print(a=100,b=200)
  # 왼쪽: a=100
  # 오른쪽: b=200 오답
  # 정답 왼쪽: 100
  # 오른쪽: 200
  ```
- ```python
  # 230
  # 아래 코드의 실행 결과를 예측하라.
  def my_print (a, b) :
      print("왼쪽:", a)
      print("오른쪽:", b)
  my_print(b=100, a=200)
  # error 오답
  # 정답 왼쪽: 200
  # 오른쪽: 100
  ```
# 231~240
- ```python
  # 231
  # 아래 코드를 실행한 결과를 예상하라.
  # def n_plus_1 (n) :
  #     result = n + 1
  # n_plus_1(3)
  # print (result)
  # error 함수내부변수는 함수 밖에서 접근 불가능 #정답
  ```
- ```python
  # 232
  # 문자열 하나를 입력받아 인터넷 주소를 반환하는 make_url 함수를 정의하라.
  # make_url("naver")
  # www.naver.com
  # def make_url(a):
  #     return print(f'www.{a}.com')
  # make_url("naver")     # 정답
  ```
- ```python
  # 233
  # 문자열을 입력받아 각 문자들로 구성된 리스트로 반환하는 make_list 함수를 정의하라.
  # make_list("abcd")
  # ['a', 'b', 'c', 'd']
  # def make_list(string):
  #     return print(list(string))
  # make_list(string='abcd')  #정답
  ```
- ```python
  # 234
  # 숫자로 구성된 하나의 리스트를 입력받아, 짝수들을 추출하여 리스트로 반환하는 pickup_even 함수를 구현하라.
  # pickup_even([3, 4, 5, 6, 7, 8])
  # [4, 6, 8]
  # def pickup_even(list1):
  #     list2=[]
  #     for x in list1:
  #         if x%2 == 0:
  #             list2.append(x)
  #     return print(list2)
  # pickup_even([3, 4, 5, 6, 7, 8])   #정답
  ```
- ```python
  # 235
  # 콤마가 포함된 문자열 숫자를 입력받아 정수로 변환하는 convert_int 함수를 정의하라.
  # convert_int("1,234,567")
  # 1234567
  # def convert_int(string):
  #     return print(int(string.replace(',', '')))
  # convert_int("1,234,567")      #정답
  ```
- ```python
  # 236
  # 아래 코드의 실행 결과를 예측하라.
  # def 함수(num) :
  #     return num + 4
  # a = 함수(10) 
  # b = 함수(a) 
  # c = 함수(b) 
  # print(c)
  # 22 정답
  ```
- ```python
  # 237
  # 아래 코드의 실행 결과를 예측하라.
  # def 함수(num) :
  #     return num + 4
  # c = 함수(함수(함수(10)))
  # print(c)
  # 22 정답
  ```
- ```python
  # 238
  # 아래 코드의 실행 결과를 예측하라.
  # def 함수1(num) :
  #     return num + 4
  # def 함수2(num) :
  #     return num * 10
  # a = 함수1(10)
  # c = 함수2(a)
  # print(c)
  # 140 정답
  ```
- ```python
  # 239
  # 아래 코드의 실행 결과를 예측하라.
  # def 함수1(num) :
  #     return num + 4
  # def 함수2(num) :
  #     num = num + 2
  #     return 함수1(num)
  # c = 함수2(10)
  # print(c)
  # 16 정답
  ```
- ```python
  # 240
  # 아래 코드의 실행 결과를 예측하라.
  # def 함수0(num) :
  #     return num * 2
  # def 함수1(num) :
  #     return 함수0(num + 2)
  # def 함수2(num) :
  #     num = num + 10
  #     return 함수1(num)
  # c = 함수2(2)
  # print(c)
  # 28 정답
  ```
# 241~250
- ```python
  # 241 현재시간
  # datetime 모듈을 사용해서 현재 시간을 화면에 출력해보세요.
  #import datetime
  # a= datetime()
  # print(a)    # 오답
  # 정답 import datetime
  # now = datetime.datetime.now()
  # print(now)
  # print (f'{now.year}년 {now.month}월 {now.day}일 {now.hour}시 {now.minute}분 {now.second}초')
  ```
- ```python
  # 242 현재시간의 타입
  # datetime 모듈의 now 함수의 리턴 값의 타입을 화면에 출력해보세요.
  # import datetime
  # print(type(datetime.datetime.now()))  #정답
  ```
- ```python
  # 243 timedelta
  # datetime 모듈의 timedelta를 사용해서 오늘로부터 5일, 4일, 3일, 2일, 1일 전의 날짜를 화면에 출력해보세요.
  # import datetime
  # now = datetime.datetime.now()

  # for i in range(5,0,-1):
  #     a= datetime.timedelta(i)
  #     print(now-a)  #정답
  ```
- ```python
  # 244 strftime
  # 현재시간을 얻어온 후 다음과 같은 포맷으로 시간을 출력해보세요. strftime 메서드를 사용하세요.
  # 18:35:01 
  # import datetime
  # print(datetime.datetime.now().strftime('%X')) #정답
  ```
- ```python
  # 245 strptime
  # datetime.datetime.strptime 메서드를 사용하면 문자열 형식의 시간을 datetime.datetime 타입의 시간 값으로 만들어줍니다. "2020-05-04"의 문자열을 시간 타입으로 변환해보세요.
  # 정답
  # import datetime
  # a= datetime.datetime.strptime("2020-05-04","%Y-%m-%d")
  # print(a)
  ```
- ```python
  # 246 sleep 함수
  # time 모듈, datetime 모듈을 사용해서 1초에 한 번 현재 시간을 출력하는 코드를 작성하세요.
  # import time
  # import datetime
  # while 1:
  #     print(datetime.datetime.now())
  #     time.sleep(1) #정답
  ```
- ```python
  # 247 모듈 임포트
  # 모듈을 임포트하는 4가지 방식에 대해 설명해보세요.
  # import math, from math import factorial(이 함수만) , from math import *(모든 함수),from math import factorial as f(함수를 f함수로 사용)
  ```
- ```python
  # 248 os 모듈
  # os 모듈의 getcwd 함수를 호출하여 현재 디렉터리의 경로를 화면에 출력해보세요.
  # from os import getcwd
  # print(getcwd())
  # import os
  # print(os.getcwd())    #정답
  ```
- ```python
  # 249 rename 함수
  # 바탕화면에 텍스트 파일을 하나 생성한 후 os 모듈의 rename 함수를 호출하여 해당 파일의 이름을 변경해보세요.
  # 정답  import os
  # os.rename("C:/Users/hyunh/Desktop/before.txt", "C:/Users/hyunh/Desktop/after.txt"   
  ```
- ```python
  # 250 numpy
  # numpy 모듈의 arange 함수를 사용해서 0.0 부터 5.0까지 0.1씩 증가하는 값을 화면에 출력해보세요.
  # import numpy
  # for x in numpy.arange(0.0 , 5.1, 0.1):
  #     print(x)  # 정답
  ```
# 251~260

- ```python
  # 251 클래스, 객체, 인스턴스
  # 클래스, 객체, 인스턴스에 대해 설명해봅시다.
  # 클래스는 함수의 집합이라고도 말할수있는 무한히 재사용가능한 틀이다
  # 객체는 클래스를 무한히 재사용할수있는 사용자또는 클래스의 결과물이라고 할수있다. 
  # 인스턴스는 객체와 비슷한 용어로 객체와 클래스와 연관지어 설명할때 사용된다. 객체는 클래스의 인스턴스다
  ```
- ```python
  # 252 클래스 정의
  # 비어있는 사람 (Human) 클래스를 "정의" 해보세요.
  # class Human:
  #     pass  #정답
  ```
- ```python
  # 253 인스턴스 생성
  # 사람 (Human) 클래스의 인스턴스를 "생성" 하고 이를 areum 변수로 바인딩해보세요.
  # class Human:
  #     pass
  # areum = Human() #정답
  ```
- ```python
  # 254 클래스 생성자-1
  # 사람 (Human) 클래스에 "응애응애"를 출력하는 생성자를 추가하세요.
  # >>> areum = Human()
  # 응애응애
  # class Human:
  #     def __init__(self):
  #         print("응애응애")
  # areum = Human()   # 정답  
  ```
- ```python
  # 255 클래스 생성자-2
  # 사람 (Human) 클래스에 (이름, 나이, 성별)을 받는 생성자를 추가하세요.
  # >>> areum = Human("아름", 25, "여자")
  # class Human:
  #     def __init__(self, 이름, 나이, 성별):
  #         self.name = 이름
  #         self.age = 나이
  #         self.gender =성별
  # areum =Human("아름", 25, "여자")
  # print(areum.name)     #정답
  ```
- ```python
  # 256 인스턴스 속성에 접근
  # 255에서 생성한 인스턴스의 이름, 나이, 성별을 출력하세요. 인스턴스 변수에 접근하여 값을 출력하면 됩니다.
  # 이름: 조아름, 나이: 25, 성별: 여자
  # 인스턴스 변수에 접근하여 값을 가져오는 예
  # >>> areum.age
  # 25
  # class Human:
  #     def __init__(self, 이름, 나이, 성별):
  #         self.name = 이름
  #         self.age = 나이
  #         self.gender =성별
  # areum =Human("아름", 25, "여자")
  # print(f'이름: {areum.name}, 나이: {areum.age}, 성별: {areum.gender}') #정답
  ```
- ```python
  # 257 클래스 메소드 - 1
  # 사람 (Human) 클래스에서 이름, 나이, 성별을 출력하는 who() 메소드를 추가하세요.
  # >>> areum.who()
  # 이름: 조아름, 나이: 25, 성별: 여자
  # class Human:
  #     def __init__(self, 이름, 나이, 성별):
  #         self.name = 이름
  #         self.age = 나이
  #         self.gender =성별
  #     def who(self):
  #         print(f'이름: {self.name}, 나이: {self.age}, 성별: {self.gender}')
  # areum =Human("아름", 25, "여자")
  # areum.who() #정답
  ```
- ```python
  # 258 클래스 메소드 - 2
  # 사람 (Human) 클래스에 (이름, 나이, 성별)을 받는 setInfo 메소드를 추가하세요.
  # >>> areum = Human("모름", 0, "모름")
  # >>> areum.setInfo("아름", 25, "여자")
  # class Human:
  #     def __init__(self, 이름, 나이, 성별):
  #         self.name = 이름
  #         self.age = 나이
  #         self.gender =성별
  #     def setInfo(self, 이름, 나이, 성별):
  #         self.name = 이름
  #         self.age = 나이
  #         self.gender =성별
  #     def who(self):
  #         print(f'이름: {self.name}, 나이: {self.age}, 성별: {self.gender}')
  # areum = Human("모름", 0, "모름")
  # areum.who() 
  # areum.setInfo("아름", 25, "여자")
  # areum.who()   #정답
  ```
- ```python
  # 259 클래스 소멸자
  # 사람 (human) 클래스에 "나의 죽음을 알리지 말라"를 출력하는 소멸자를 추가하세요.
  # >>> areum = Human("아름", 25, "여자")
  # >>> del areum
  # 나의 죽음을 알리지 말라
  # class Human:
  #     def __init__(self, 이름, 나이, 성별):
  #         self.name = 이름
  #         self.age = 나이
  #         self.gender =성별
  #     def __del__(self):
  #         print("나의 죽음을 알리지 말라")
  # areum = Human("아름", 25, "여자")
  # del areum #정답
  ```
- ```python
  # 260 에러의 원인
  # 아래와 같은 에러가 발생한 원인에 대해 설명하세요.
  # >>> >>> myStock = OMG()
  # >>> myStock.print()
  # TypeError Traceback (most recent call last)
  # <ipython-input-233-c85c04535b22> in <module>()
  # ----> myStock.print()
  # TypeError: print() takes 0 positional arguments but 1 was given
  # 함수에 self인자가 없어서 객체가 self로 전달되지않았기때문에 메소드를 단독으로 사용불가 #정답
  ```
# 261~270

- ```python
  # 261 Stock 클래스 생성
  # 주식 종목에 대한 정보를 저장하는 Stock 클래스를 정의해보세요. 클래스는 속성과 메서드를 갖고 있지 않습니다.
  # class Stock:
  #     pass  #정답
  ```
- ```python
  # 262 생성자
  # Stock 클래스의 객체가 생성될 때 종목명과 종목코드를 입력 받을 수 있도록 생성자를 정의해보세요.

  # 삼성 = Stock("삼성전자", "005930")
  # class Stock:
  #     def __init__(self, 종목명, 종목코드):
  #         self.name= 종목명
  #         self.code = 종목코드
  # 삼성 = Stock("삼성전자", "005930")
  # print(삼성.name, 삼성.code)   #정답
  ```
- ```python
  # 263 메서드
  # 객체에 종목명을 입력할 수 있는 set_name 메서드를 추가해보세요.
  # a = Stock(None, None)
  # a.set_name("삼성전자")
  # class Stock:
  #     def __init__(self, 종목명, 종목코드):
  #         self.name= 종목명
  #         self.code = 종목코드
  #     def set_name(self, 종목명):
  #         self.name= 종목명
  # a = Stock(None, None)
  # a.set_name("삼성전자")
  ```
- ```python
  # 264 메서드
  # 객체에 종목코드를 입력할 수 있는 set_code 메서드를 추가해보세요.
  # a = Stock(None, None)
  # a.set_code("005930")
  # class Stock:
  #     def __init__(self, 종목명, 종목코드):
  #         self.name= 종목명
  #         self.code = 종목코드
  #     def set_name(self, 종목명):
  #         self.name= 종목명
  #     def set_code(self, 종목코드):
  #         self.code= 종목코드
  # a = Stock(None, None)
  # a.set_code("005930")
  # print(a.code) #정답
  ```
- ```python
  # 265 메서드
  # 종목명과 종목코드를 리턴하는 get_name, get_code 메서드를 추가하세요. 해당 메서드를 사용하여 종목명과 종목코드를 얻고 이를 출력해보세요.
  # 삼성 = Stock("삼성전자", "005930")
  # class Stock:
  #     def __init__(self, 종목명, 종목코드):
  #         self.name= 종목명
  #         self.code = 종목코드
  #     def set_name(self, 종목명):
  #         self.name= 종목명
  #     def set_code(self, 종목코드):
  #         self.code= 종목코드
  #     def get_name(self):
  #         return self.name
  #     def get_code(self):
  #         return self.code
  # 삼성 = Stock("삼성전자", "005930")
  # print(삼성.get_name())
  # print(삼성.get_code())    # 정답
  ```
- ```python
  # 266 객체의 속성값 업데이트
  # 생성자에서 종목명, 종목코드, PER, PBR, 배당수익률을 입력 받을 수 있도록 생성자를 수정하세요. PER, PBR, 배당수익률은 float 타입입니다.
  # class Stock:
  #     def __init__(self, 종목명, 종목코드, PER, PBR, 배당수익률):
  #         self.name= 종목명
  #         self.code = 종목코드
  #         self.PER = float(PER)
  #         self.PBR = float(PBR)
  #         self.배당수익률 = float(배당수익률)
  #     def set_name(self, 종목명):
  #         self.name= 종목명
  #     def set_code(self, 종목코드):
  #         self.code= 종목코드   #정답
  ```
- ```python
  # 267 객체 생성
  # 266번에서 정의한 생성자를 통해 다음 정보를 갖는 객체를 생성해보세요.
  # 항목	정보
  # 종목명	삼성전자
  # 종목코드	005930
  # PER	15.79
  # PBR	1.33
  # 배당수익률	2.83
  # class Stock:
  #     def __init__(self, 종목명, 종목코드, PER, PBR, 배당수익률):
  #         self.name= 종목명
  #         self.code = 종목코드
  #         self.PER = float(PER)
  #         self.PBR = float(PBR)
  #         self.배당수익률 = float(배당수익률)
  #     def set_name(self, 종목명):
  #         self.name= 종목명
  #     def set_code(self, 종목코드):
  #         self.code= 종목코드  
  # a= Stock('삼성전자', '005930',15.79,1.33,2.83)
  # print(a.PER)  #정답
  ```
- ```python
  # 268 객체의 속성 수정
  # PER, PBR, 배당수익률은 변경될 수 있는 값입니다. 이 값을 변경할 때 사용하는 set_per, set_pbr, set_dividend 메서드를 추가하세요.
  class Stock:
      def __init__(self, 종목명, 종목코드, PER, PBR, 배당수익률):
          self.name= 종목명
          self.code = 종목코드
          self.PER = float(PER)
          self.PBR = float(PBR)
          self.배당수익률 = float(배당수익률)
      def set_name(self, 종목명):
          self.name= 종목명
      def set_code(self, 종목코드):
          self.code= 종목코드  
      def set_per(self, PER):
          self.PER= PER  
      def set_pbr(self, PBR):
          self.PBR= PBR  
      def set_dividend(self, 배당수익률):
          self.배당수익률= 배당수익률   #정답
  ```
- ```python
  # 269 객체의 속성 수정
  # 267번에서 생성한 객체에 set_per 메서드를 호출하여 per 값을 12.75로 수정해보세요.
  # a= Stock('삼성전자', '005930',15.79,1.33,2.83)
  # a.ser_per(12.75)  #정답
  ```
- ```python
  # 270 여러 종목의 객체 생성
  # 아래의 표를 참조하여 3종목에 대해 객체를 생성하고 이를 파이썬 리스트에 저장하세요. 파이썬 리스트에 저장된 각 종목에 대해 for 루프를 통해 종목코드와 PER을 출력해보세요.

  # 종목명	종목코드	PER	PBR	배당수익률
  # 삼성전자	005930	15.79	1.33	2.83
  # 현대차	005380	8.70	0.35	4.27
  # LG전자	066570	317.34	0.69	1.37
  # 삼성전자= Stock('삼성전자', '005930',15.79,1.33,2.83)
  # 현대차= Stock('현대차', '005380',8.70,	0.35,	4.27)
  # LG전자= Stock('LG전자', '066570',317.34,	0.69,	1.37)
  # list1= [삼성전자, 현대차 ,LG전자]
  # for x in list1:
  #     print(x.code, x.PER)  #정답
  ```
# 271~280

- ```python
  # 271 Account 클래스
  # 은행에 가서 계좌를 개설하면 은행이름, 예금주, 계좌번호, 잔액이 설정됩니다. Account 클래스를 생성한 후 생성자를 구현해보세요. 생성자에서는 예금주와 초기 잔액만 입력 받습니다. 은행이름은 SC은행으로 계좌번호는 3자리-2자리-6자리 형태로 랜덤하게 생성됩니다.
  # 은행이름: SC은행
  # 계좌번호: 111-11-111111
  # import random
  # class Account:
  #     def __init__(self, 예금주, 초기잔액):
  #         self.bankname= 'SC은행'
  #         code1= random.randint(000,999)
  #         code2= random.randint(000,99)
  #         code3= random.randint(000,999999)
  #         self.code= f'{code1:03d}-{code2:02d}-{code3:06d}'
  #         self.name= 예금주
  #         self.money =초기잔액
  # a= Account('나',300)
  # print(a.code) #정답
  ```
- ```python
  # 272 클래스 변수
  # 클래스 변수를 사용해서 Account 클래스로부터 생성된 계좌 객체의 개수를 저장하세요.
  # 정답 import random
  # class Account:
  #     num1=0
  #     def __init__(self, 예금주, 초기잔액):

  #         self.bankname= 'SC은행'
  #         code1= random.randint(000,999)
  #         code2= random.randint(000,99)
  #         code3= random.randint(000,999999)
  #         self.code= f'{code1:03d}-{code2:02d}-{code3:06d}'
  #         self.name= 예금주
  #         self.money =초기잔액
  #         Account.num1 +=1 
  # a= Account('나',300)
  # b= Account('나',3000)
  # print(Account.num1) #정답
  ```
- ```python
  # 273 클래스 변수 출력
  # Account 클래스로부터 생성된 계좌의 개수를 출력하는 get_account_num() 메서드를 추가하세요.
  # import random
  # class Account:
  #     num1=0
  #     def __init__(self, 예금주, 초기잔액):

  #         self.bankname= 'SC은행'
  #         code1= random.randint(000,999)
  #         code2= random.randint(000,99)
  #         code3= random.randint(000,999999)
  #         self.code= f'{code1:03d}-{code2:02d}-{code3:06d}'
  #         self.name= 예금주
  #         self.money =초기잔액
  #         Account.num1 +=1 
  #     def get_account_num(self):
  #         return print(Account.num1)
  # a= Account('나',300)
  # a.get_account_num()   #정답
  ```
- ```python
  # 274 입금 메서드
  # Account 클래스에 입금을 위한 deposit 메서드를 추가하세요. 입금은 최소 1원 이상만 가능합니다.
  # import random
  # class Account:
  #     num1=0
  #     def __init__(self, 예금주, 초기잔액):

  #         self.bankname= 'SC은행'
  #         code1= random.randint(000,999)
  #         code2= random.randint(000,99)
  #         code3= random.randint(000,999999)
  #         self.code= f'{code1:03d}-{code2:02d}-{code3:06d}'
  #         self.name= 예금주
  #         self.money =초기잔액
  #         Account.num1 +=1 
  #     def get_account_num(self):
  #         return print(Account.num1)
  #     def deposit(self, 입금):
  #         if 입금>=1:
  #             self.money+=입금
  # a= Account('나',300)
  # a.deposit(1)
  # print(a.money)    #정답
  ```
- ```python
  # 275 출금 메서드
  # Account 클래스에 출금을 위한 withdraw 메서드를 추가하세요. 출금은 계좌의 잔고 이상으로 출금할 수는 없습니다.
  # import random
  # class Account:
  #     num1=0
  #     def __init__(self, 예금주, 초기잔액):

  #         self.bankname= 'SC은행'
  #         code1= random.randint(000,999)
  #         code2= random.randint(000,99)
  #         code3= random.randint(000,999999)
  #         self.code= f'{code1:03d}-{code2:02d}-{code3:06d}'
  #         self.name= 예금주
  #         self.money =초기잔액
  #         Account.num1 +=1 
  #     def get_account_num(self):
  #         return print(Account.num1)
  #     def deposit(self, 입금):
  #         if 입금>=1:
  #             self.money+=입금
  #     def withdraw(self, 출금):
  #         if 출금>self.money:
  #             print("잔액이 부족합니다")
  #         else:
  #             self.money-=출금
  # a= Account('나',300)
  # a.withdraw(30)
  # print(a.money)    #정답
  ```
- ```python
  # 276 정보 출력 메서드
  # Account 인스턴스에 저장된 정보를 출력하는 display_info() 메서드를 추가하세요. 잔고는 세자리마다 쉼표를 출력하세요.
  # 은행이름: SC은행
  # 예금주: 파이썬
  # 계좌번호: 111-11-111111
  # 잔고: 10,000원
  # import random
  # class Account:
  #     num1=0
  #     def __init__(self, 예금주, 초기잔액):

  #         self.bankname= 'SC은행'
  #         code1= random.randint(000,999)
  #         code2= random.randint(000,99)
  #         code3= random.randint(000,999999)
  #         self.code= f'{code1:03d}-{code2:02d}-{code3:06d}'
  #         self.name= 예금주
  #         self.money =초기잔액
  #         Account.num1 +=1 
  #     def get_account_num(self):
  #         return print(Account.num1)
  #     def deposit(self, 입금):
  #         if 입금>=1:
  #             self.money+=입금
  #     def withdraw(self, 출금):
  #         if 출금>self.money:
  #             print("잔액이 부족합니다")
  #         else:
  #             self.money-=출금
  #     def display_info(self):
  #         print(f'은행이름: {self.bankname}')
  #         print(f'예금주: {self.name}')
  #         print(f'계좌번호: {self.code}')
  #         self.stmoney= ''
  #         print(len(str(self.money)))
  #         for x in range(len(str(self.money))):
  #             if (x%3) ==0 and x!=0:
  #                 self.stmoney+=','
  #             self.stmoney+=str(self.money)[x]

  #         print(f'잔고: {self.stmoney}원')
  # a= Account('나',3000)
  # a.display_info()  #정답
  ```
- ```python
  # 277 이자 지급하기
  # 입금 횟수가 5회가 될 때 잔고를 기준으로 1%의 이자가 잔고에 추가되도록 코드를 변경해보세요.
  # import random
  # class Account:
  #     num1=0

  #     def __init__(self, 예금주, 초기잔액):

  #         self.bankname= 'SC은행'
  #         code1= random.randint(000,999)
  #         code2= random.randint(000,99)
  #         code3= random.randint(000,999999)
  #         self.code= f'{code1:03d}-{code2:02d}-{code3:06d}'
  #         self.name= 예금주
  #         self.money =초기잔액
  #         self.count =1
  #         Account.num1 +=1 
  #     def get_account_num(self):
  #         return print(Account.num1)
  #     def deposit(self, 입금):
  #         if 입금>=1:
  #             self.money+=입금
  #             self.count+=1
  #             if self.count%5 ==0:
  #                 self.money+=self.money*0.01
  #     def withdraw(self, 출금):
  #         if 출금>self.money:
  #             print("잔액이 부족합니다")
  #         else:
  #             self.money-=출금
  #     def display_info(self):
  #         print(f'은행이름: {self.bankname}')
  #         print(f'예금주: {self.name}')
  #         print(f'계좌번호: {self.code}')
  #         self.stmoney= ''
  #         print(len(str(self.money)))
  #         for x in range(len(str(self.money))):
  #             if (x%3) ==0 and x!=0:
  #                 self.stmoney+=','
  #             self.stmoney+=str(self.money)[x]

  #         print(f'잔고: {self.stmoney}원')
  # a= Account('나',3000) #정답
  ```
- ```python
  # 278 여러 객체 생성
  # Account 클래스로부터 3개 이상 인스턴스를 생성하고 생성된 인스턴스를 리스트에 저장해보세요.
  # 279 객체 순회
  # 반복문을 통해 리스트에 있는 객체를 순회하면서 잔고가 100만원 이상인 고객의 정보만 출력하세요
  # 280 입출금 내역
  # 입금과 출금 내역이 기록되도록 코드를 업데이트 하세요. 입금 내역과 출금 내역을 출력하는 deposit_history와 withdraw_history 메서드를 추가하세요.
  # import random
  # class Account:
  #     num1=0
  #     list1=[]
  #     def __init__(self, 예금주, 초기잔액):

  #         self.bankname= 'SC은행'
  #         self.de =[]
  #         self.wi =[]
  #         code1= random.randint(000,999)
  #         code2= random.randint(000,99)
  #         code3= random.randint(000,999999)
  #         self.code= f'{code1:03d}-{code2:02d}-{code3:06d}'
  #         self.name= 예금주
  #         self.money =초기잔액
  #         self.count =0
  #         self.count2 =0
  #         Account.num1 +=1 
  #         Account.list1.append(self)
  #     def get_account_num(self):
  #         return print(Account.num1)
  #     def deposit(self, 입금):
  #         if 입금>=1:
  #             self.money+=입금
  #             self.count+=1
  #             if self.count%5 ==0:
  #                 self.money+=self.money*0.01
  #             self.de.append(f'{self.count}. 입금액:{입금} 잔액:{self.money}')
  #     def deposit_history(self):
  #         print(self.de)
  #     def withdraw(self, 출금):
  #         if 출금>self.money:
  #             print("잔액이 부족합니다")
  #         else:
  #             self.money-=출금
  #             self.count2+=1
  #             self.wi.append(f'{self.count2}. 출금액:{출금} 잔액:{self.money}')
  #     def withdraw_history(self):
  #         print(self.wi)


  #     def display_info(self):
  #         print(f'은행이름: {self.bankname}')
  #         print(f'예금주: {self.name}')
  #         print(f'계좌번호: {self.code}')
  #         self.stmoney= ''
  #         print(len(str(self.money)))
  #         for x in range(len(str(self.money))):
  #             if (x%3) ==0 and x!=0:
  #                 self.stmoney+=','
  #             self.stmoney+=str(self.money)[x]

  #         print(f'잔고: {self.stmoney}원')
  # a= Account('나',3000) #정답
  # b= Account('너',1000000)
  # c= Account('니',3000)
  # print(Account.list1)
  # for x in Account.list1:
  #     if x.money>=1000000:
  #         x.display_info()
  # a.deposit(399)
  # a.withdraw(10)
  # a.deposit_history()
  # a.withdraw_history()  #정답
  ```
