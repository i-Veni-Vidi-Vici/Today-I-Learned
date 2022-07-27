# Optional 클래스
- 객체를 포장해 주는 래퍼(Wrapper class)로 null 예외를(NullPointerException) 간편하게 처리할 수 있게 해준다.

## Optional 메서드
**of()**
- null이 아닌 명시된 값을 가지는 Optional 객체를 반환

**ofNullable()**
- null일 가능성이 있을때 사용하며, null이 아니면 Optional 객체를 반환하며, 명시된 값이 null이면 비어있는 Optional 객체를 반환

**get()**
- Optional 객체에 저장된 값을 반환
- Optional 객체에 저장된 값이 null이면, NoSuchElementException 예외가 발생
- 따라서 get() 메서드를 호출하기 전에 isPresent()를 사용하여 Optional 객체에 저장된 값이 null인지 아닌지를 먼저 확인한 후 호출하는것이 좋음

**empty()**
- 비어있는 Optional 객체를 반환

**orElse()**
- 저장된 값을 반환하고, 존재하지 않으면 인수로 전달된 값을 반환

**orElseGet()**
- 저장된 값을 반환하고, 존재하지 않으면 인수로 전달된 람다 표현식의 결과값을 반환

**orElseThrow()**
- 저장된 값을 반환하고, 존재하지 않으면 인수로 전달된 예외를 발생시킴

**isPresent()**
- 저장된 값이 존재할 때 true 반환

**filter()**
- 인수로 받은 람다식이 참이면, Optional 객체를 그대로 통과시키고, 거짓이면 Optional.empty()를 반환

**map()**
- Optional 객체의 값을 수정해서 다른값으로 변경하는 메서드

**ifPresent()**
- 람다식을 인수로 받아 값이 존재하면 그 값에 람다식을 적용, 값이 없으면 람다식 실행x

**or()**
- 메서드 체인중간에 Optional.empty()가 되었을 때,  Optional.empty() 대신 다른 Optinal 객체를 만들어 해당 부분에 전달해줌

**ifPresentOrElse()**
- 첫번째 인수로 받은 람다식은 Optional 객체에 값이 존재하는 경우 실행, 두번째 인수로 받은 람다식은 Optinal객체가 비어있을 때 실행
