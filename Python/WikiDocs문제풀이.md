# 001~010

- ```python
  # 001 print 기초
  # 화면에 Hello World 문자열을 출력하세요
  print("Hello World")
  print('Hello World')
  # 문자열은 큰 따음표, 작은 따음표 둘다 표현 가능
  ```
- ```python
  # 002 print 기초
  # 화면에 Mary's cosmetics을 출력하세요. (중간에 '가 있음에 주의하세요)
  print("Mary's cosmetics")
  # 문자열 내에 작은따음표가 존재하기때문에, 큰따음표로 문자열 표현
  ```
- ```python
  # 003 print 기초
  # 화면에 아래 문장을 출력하세요. (중간에 "가 있음에 주의하세요.)
  # 신씨가 소리질렀다. "도둑이야".
  print('신씨가 소리질렀다. "도둑이야".')
  # 문자열내에 큰따음표가 존재하기 때문에, 작은따음표로 문자열 표현
  ```
- ```python
  # 004 print 기초
  # 화면에 "C:\Windows"를 출력하세요.
  print('"C:\Windows"')
  # 문자열에 큰따음표가 있기 때문에, 작은따음표로 문자열 표현
  ```
- ```python
  # 005 print 탭과 줄바꿈
  # 다음 코드를 실행해보고 \t와 \n의 역할을 설명해보세요.
  print("안녕하세요.\n만나서\t\t반갑습니다.")
  # \n = Enter 기능, \t= 5칸 띄어쓰기 
  # 정답: \n = 줄바꿈 \t =tab
  ```
- ```python
  # 006 print 여러 데이터 출력
  # print 함수에 두 개의 단어를 입력한 예제입니다. 아래 코드의 출력 결과를 예상해봅시다.
  print ("오늘은", "일요일")
  # 오늘은 일요일
  # 정답: 여러값을 출력하기위해 print 함수에서 쉼표로 구분하고, 출력시 값사이 공백이 하나 추가
  ```
- ```python
  # 007 print 기초
  # print() 함수를 사용하여 다음과 같이 출력하세요.
  # naver;kakao;sk;samsung
  print('naver;kakao;sk;samsung')
  # 정답: print 함수의 sep 인자로 ";"세미콜론을 입력하면 출력되는 값들 사이에 한칸 공백대신 세미콜론 출력
  # print("naver", "kakao", "samsung", sep=";") ★★공부필요->완료
  ```
- ```python
  # 008 print 기초
  # print() 함수를 사용하여 다음과 같이 출력하세요.
  # naver/kakao/sk/samsung
  print('naver','kakao','sk','samsung',sep="/") #정답
  ```
- ```python
  # 009 print 줄바꿈
  # 다음 코드를 수정하여 줄바꿈이 없이 출력하세요. (힌트: end='') print 함수는 두 번 사용합니다. 세미콜론 (;)은 한줄에 여러 개의 명령을 작성하기 위해 사용합니다.
  print("first");print("second")
  # 정답 : print("first", end="");print("second") ★★공부필요-> 완료
  ```
- ```python
  # 010 연산 결과 출력 
  # 5/3의 결과를 화면에 출력하세요.
  print(5/3) #정답
  ```
  
#  011~020

- ```python
  # 011 변수 사용하기
  # 삼성전자라는 변수로 50,000원을 바인딩해보세요. 삼성전자 주식 10주를 보유하고 있을 때 총 평가금액을 출력하세요.
  삼성전자=50000
  print(삼성전자*10) #정답
  # 정답 삼성전자 = 50000
  # 총평가금액 = 삼성전자 * 10
  # print(총평가금액)
  ```
- ```python
  #012 변수 사용하기
  # 다음 표는 삼성전자의 일부 투자정보입니다. 변수를 사용해서 시가총액, 현재가, PER 등을 바인딩해보세요.
  # 항목	값
  # 시가총액	298조
  # 현재가	50,000원
  # PER	15.79
  시가총액 ="298조"
  현재가="50,000원"
  PER= 15.79
  print(시가총액, 현재가 ,PER) #정답
  ```
- ```python
  # 013 문자열 출력
  # 변수 s와 t에는 각각 문자열이 바인딩 되어있습니다.
  # >> s = "hello"
  # >> t = "python"
  # 두 변수를 이용하여 아래와 같이 출력해보세요.
  # 실행 예:
  # hello! python
  s = "hello"
  t = "python"
  print(s,t,sep="! ") #정답
  #정답 s = "hello"
  # t = "python"
  # print(s+"!", t)
  ```
- ```python
  # 014 파이썬을 이용한 값 계산
  # 아래 코드의 실행 결과를 예상해보세요.
  # >> 2 + 2 * 3
  8 # 정답
  ```
- ```python
  # 015 type 함수
  # type() 함수는 데이터 타입을 판별합니다. 변수 a에는 128 숫자가 바인딩돼 있어 type 함수가 int (정수)형임을 알려줍니다.
  # >> a = 128
  # >> print (type(a))
  # <class 'int'>
  # 아래 변수에 바인딩된 값의 타입을 판별해보세요.
  # >> a = "132"
  a = "132"
  print(type(a)) # 정답
  ```
- ```python
  # 016 문자열을 정수로 변환
  # 문자열 '720'를 정수형으로 변환해보세요.
  # >> num_str = "720"
  num_str = "720"
  # 정답 num_str = "720"  #형변환 ★★ 공부필요 완료
  # num_int = int(num_str) 
  # print(num_int+1, type(num_int))
  ```
- ```python
  # 017 정수를 문자열 100으로 변환
  # 정수 100을 문자열 '100'으로 변환해보세요.
  # num = 100
  num =100
  num = str(num)
  print(num, type(num))   #정답
  ```
- ```python
  # 018 문자열을 실수로 변환
  # 문자열 "15.79"를 실수(float) 타입으로 변환해보세요.
  str1= "15.79"
  flo= float(str1)
  print(flo, type(flo)) # 정답
  ```
- ```python
  # 019 문자열을 정수로 변환
  # year라는 변수가 문자열 타입의 연도를 바인딩하고 있습니다. 이를 정수로 변환한 후 최근 3년의 연도를 화면에 출력해보세요.
  # year = "2020"
  year = "2020"
  year = int(year)
  print(year-1,year,year+1)   #정답
  ```
- ```python
  # 020 파이썬 계산
  # 에이컨이 월 48,584원에 무이자 36개월의 조건으로 홈쇼핑에서 판매되고 있습니다. 총 금액은 계산한 후 이를 화면에 출력해보세요. (변수사용하기)
  x = 48584
  result= x*36
  print(result) #정답
  ```


