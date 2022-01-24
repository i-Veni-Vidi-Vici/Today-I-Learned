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
