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



