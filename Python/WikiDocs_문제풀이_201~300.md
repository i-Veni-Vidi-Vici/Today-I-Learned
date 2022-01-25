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

