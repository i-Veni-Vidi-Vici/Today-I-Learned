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

### JUnit의 어노테이션
#### @Test
- 메소드 위에 해당 어노테이션을 선언해, 테스트 메소드임을 지정
#### @Test(timeout= 1000ms)
- 테스트 메소드 수행 시간을 제한할 수 있다.
- 테스트 메소드가 리턴값을 반환하는 데에 걸리는 시간이 지정된 밀리초를 넘기면 실패
#### @Test(expected= 예외)
- 지정된 예외가 발생해야 테스트가 성공
#### @Ignore**
- 해당 테스트 메서드를 실행하지 않음
#### @BeforeEach == @Before
- 각 테스트 메서드가 실행되기전 매번 실행되는 메서드 지정
- 테스트 전 리셋 또는 공통부분으로 사용
#### @AfterEach == @After**
- 각 테스트 메서드 실행이 끝난 후 실행되는 메서드 지정
#### @BeforeAll
- 테스트 클래스가 실행될 때 한 번만 수행되는 테스트 메서드 지정

#### @AfterAll
- 테스트 클래스 실행이 끝난 후 한 번만 수행되는 테스트 메서드 지정

# AssertJ
- 에러메시지와 테스트 코드의 가독성과 편의성을 높여 주는 라이브러리
- static 임포트를 통해 AssertJ의 다양한 API를 클래스 이름 생략하여 사용
- **메서드 체이닝**을 지원해, 더 직관적이고 읽기 쉬운 테스트 코드 작성 가능


## AssertJ의 assert 메서드
- AssertJ에서 모든 테스트 코드는 **assertThat()** 으로 시작
- ```assertThat(테스트).메서드1().메서드2()``` 메서드 체인ㅇ
#### isEqualTo(Object o) 
- 실제 값이 주어진 값과 같은지 확인
#### isNotEqualTo(Object o) 
- 실제 값이 주어진 값과 같지 않은지 확인

#### isInstanceOf(Class<?> type) , isInstanceOfAny(Class<?> ... types)
- 실제 값이 주어진 유형의 인스턴스인지 확인
#### asList()
- 실제 값이 List의 인스턴스인지 확인하고 ```list Assertion```을 반환
#### asString() 
- ```toString()```으로 실제 값에 대한 문자열을 반환
#### isSameAs(Object o) 
- ```==비교```를 사용해 실제 값이 주어진 값과 동일한지 확인
#### isZero() 
- 값이 0인지 확인
#### isBetween(start, end)
- 값이 ```start```와 ```end``` 값 사이에 있는지 확인 
#### as("설명") 
- ```"설명"```이 테스트 결과에 출력
- as()는 assertion 메소드들을 호출하기 전에 사용

#### assertThrows(예외 클래스, 예외 발생문)
- 지정된 예외 클래스가 예외 발생문에서 발생하면 성공하며 예외를 반환
- ```
  // 2번째 람다식으로 인해 첫번째 오류가 발생하면 test성공
  assertThrows(IllegalStateException.class, ()-> memberService.join(member2));
  ```


### 예제 - 문자열 테스트
- ```java
  assertThat("Hello, world! Nice to meet you.") // 주어진 "Hello, world! Nice to meet you."라는 문자열은
                  .isNotEmpty() // 비어있지 않고
                  .contains("Nice") // "Nice"를 포함하고
                  .contains("world") // "world"도 포함하고
                  .doesNotContain("ZZZ") // "ZZZ"는 포함하지 않으며
                  .startsWith("Hell") // "Hell"로 시작하고
                  .endsWith("u.") // "u."로 끝나며
                  .isEqualTo("Hello, world! Nice to meet you."); // "Hello, world! Nice to meet you."과 일치합니다.

  assertThat(3.14d) // 주어진 3.14라는 숫자는
                  .isPositive() // 양수이고
                  .isGreaterThan(3) // 3보다 크며
                  .isLessThan(4) // 4보다 작습니다
                  .isEqualTo(3, offset(1d)) // 오프셋 1 기준으로 3과 같고
                  .isEqualTo(3.1, offset(0.1d)) // 오프셋 0.1 기준으로 3.1과 같으며
                  .isEqualTo(3.14); // 오프셋 없이는 3.14와 같습니다
  ```
