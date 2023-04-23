솔리디티
- 이더리움에서 제공하는 스마트 컨트랙트 개발 언어

기본적인 스마트 컨트랙트 구조
- ```Solidity
  //1. SPDX-License-Identifier: MIT

  //2. Version Pragma
  pragma solidity >=0.8.0 < 0.9.0;

  //3. 배포할 컨트랙트
  contract Ex1{

  }
  ```

1. SPDX 라이센스 식별자
- 모든 소스 파일은 라이센스를 나타내는 주석으로 시작

2. Version Pragma
- 솔리디티 버전을 선언
- 새로운 컴파일러 버전이 나와도 기존 코드가 깨지는 것을 방지

3. contract
- 배포할 컨트랙트 코드를 작성

솔리디티의 3가지 변수 타입 
- ```Solidity
  // SPDX-License-Identifier: MIT

  pragma solidity >=0.8.0 < 0.9.0;

  contract Ex1{
      //상태변수
      uint public a =1;
      function b() public {
          //지역변수
          uint c =3;
          a=c;
      uint d = block.timestamp;
      }
  }
  ```

지역 변수(local)
- 함수 안에서 선언, 블록체인에 기록되지 않음

상태 변수(state)
- 함수 밖에서 선언
- 블록체인에 저장됨

전역 변수(global)
- 블록체인에 관한 정보를 제공

자료형
- 값 타입과 참조타입으로 나뉨

값 타입(Value Type)
- 값이 할당되거나 함수의 인자로 활용될시, 해당 값자체가 복사됨
- 솔리디티는 정수형 타입만 지원하고, 소수점 있는 숫자 지원x

정수 타입
- uint, 와 int형이 있고 부호여부 차이

바이트 타입
- 고정크기와 동적크기 바이트로 나뉨
- 고정크기 바이트는 값타입이며, 동적크기 바이트는 참조 타입

주소 타입
- 값타입으로 20바이트로 고장된 바이트 배열로 표현됨



참조타입(Reference Type)
- 값의 주소만 복사됨
- 참조형 타입은 데이터를 어디에 저장할지 명시해야함 (storage, memory,callata, stack)

문자열 타입 
- string으로 참조탑입인 동적 크기를 가짐

배열 
- 참조타입이며 여러개의 값을 순차적으로 저장
- 동적과 정적으로 나뉨

동적배열
- 크기가 가변됨
- ```uint[] pubilc arr;```

동적배열
- 선언시 크기가 결정
- ```uint[3] public arr;```

상수 선언
- 값이 명시된 이후 수정 불가, 변수 타입 앞에 명시
- ```uint constant a=5;```

솔리디티 함수
가시성 제한자
- 변수나 함수의 공개 범위를 제한

public 
- 외부와 내부에서 접근 가능
- 외부는 주로 배포되었을때 함수나 변수에 접근하는 위치 컨트랙트 밖, 내부는 해당 컨트랙트안을 의미 
- 솔리디티는 내부적으로 getter 메서드를 자동으로 생성하여 이 데이터에 접근 할때 사용함
external
- 선언된 컨트랙트 외부에서만 접근 가능
private
- 오직 선언된 컨트랙트 내부에서만 접근 간으
internal 
- 내부와 이를 상속받은 컨트랙트 내부에서 접근 가능

함수의 정의
- function 함수명(매개변수)  public returns(반환값 자료형){} 순으로 정의
- 리턴값있을시 반드시 returns키워드 명시해야함

모디파이어(Modifier)
- 가시성 지정자 다음에 명시하여 함수 로직에 제약을 줌

pure
- 함수 밖에 선언된 변수를 함수 내부로 가져오지 못하게 하는 키워드
- 함수 내부에서 정의된 변수나 전달받은 매개변수만 사용가능

view
- 함수 외부의 변수 읽기 가능,변경 불가
- ```Solidity
  // SPDX-License-Identifier: MIT

  pragma solidity >=0.8.0 < 0.9.0;


  contract Ex1{

      function getTwoNumbers() public pure returns (uint, uint) {
          uint num1 = 10;
          uint num2 = 20;
          return (num1, num2);
      }
  }
  ```
https://www.codestates.com/blog/content/%EC%86%94%EB%A6%AC%EB%94%94%ED%8B%B0-%EB%AC%B8%EB%B2%95%EA%B3%BC-%EC%98%88%EC%A0%9C-1
https://cryptozombies.io/ko/lesson/1/chapter/7
