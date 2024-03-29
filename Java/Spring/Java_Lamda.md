# 람다 표현식
- 함수 정의 없이 실행가능한 함수
- 함수를 따로 만들지 않고 코드 한줄에 함수를 써서 호출하는 방식
- 자바에서 클래스 선언과 동시에 객체를 생성하므로, 단 하나의 객체만을 생성하는 클래스를 **익명클래스**라고 함
- **람다 표현식**은 **익명클래스**와 같다고 할 수 있다.
- **(매개변수1,  매개변수 2)-> {실행문}**
- **매개변수 -> 실행문**
- 코드가 간결하고 가독성이 향상됨
- 함수를 만드는 시간이 줄어들어 생산성 향상
- 람다식으로 선언된 함수는 1급 객체이기 때문에 Stream API의 매개변수로 전달이 가능
- 1급 객체란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킴
### 람다 표현식 작성법
- 매개변수 타입을 추론할 수 있는 경우 타입 생략 가능
- 매개변수가 하나인 경우 괄호(()) 생략 가능
- 함수 몸체가 하나의 명령문만으로 이루어진 경우 중괄호({}) 생략가능
- 함수의 몸체가 하나의 return 문으로만 이루어진 경우에는 중괄호를 생략할 수 없음
- return문 대신 표현식을 사용할 수 있으며, 반환값은 표현식의 결과값이 됨
