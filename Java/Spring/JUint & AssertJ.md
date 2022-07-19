# JUint 
- 자바를 위한 단위 테스트 라이브러리 
- 자바 애플리케이션의 단위 테스트를 쉽게 해주는 테스트용 프레임워크
## 단위테스트(Unit Test)
- 모든 함수와 메소드에 대한 테스트 케이스를 작성하는 절차
- 소스코드의 특정 모듈이 의도대로 동작하는지 검증
- system.out.println()으로 동작 결과를 확인하는 과정을 쉽게 해줌

### JUnit의 assert 메소드
#### assertEquals(A, B) 
- 객체 A와 B가 같은 값을 가지는지 확인
#### assertEquals(A, B, C) 
- 객체 A와 B가 같은 값을 가지는지 확인, C는 오차범위
#### assertSame(A, B)
- 객체 A와 B가 같은 객체인지 확인
#### assertArrayEquals(A, B)
- 배열 A와 B가 일치하는지 확인
#### assertTrue(A) 
- 조건 A가 참인지 확인
#### assertNull(A)
- 객체A가 Null인지 확인
