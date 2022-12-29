출처:https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8
(인프런 스프링 핵심 원리 강의, 김영한)

##### orm
- 자바객체를 db에 편하게 저장하고 꺼내는 기술, 쿼리사용안함

## 스프링 부트
- 단독으로 실행할 수 있는 스프링 애플리케이션을 쉽게 생성하며, Tomcat 같은 웹 서버를 내장해서 별도의 웹 서버 설치가 필요없음
- 손쉬운 빌드 구성을 위한 starter 종속성 제공
  - 라이브러리를 묶어서 가져와야하는 것들을 starter가 편리하게 제공
- 스프링과 3rd parth(외부) 라이브러리 자동구성
  - 스프링 버전에 따른 지원하는 주요 외부라이브러리를 버전을 고려할 필요가 없음

- 메트릭, 상태확인, 외부 구성 같은 프로덕션 준비 기능 제공
  - 모니터링 기능 편리하게 제공
- 관례에 의한 간결한 설정
  - 대부분 디폴트로 설정되어있어, 수정이 거의 필요 없음

# 스프링 단어?
- 스프링이라는 단어는 문맥에 따라 다름
- 스프림 DI 컨테이너 기술
- 스프링 프레임워크
- 스프링 부트, 스프링 프레임워크 등을 모두 포함한 스프링 생태계

### 스프링 왜 만들었을까?
스프링의 핵심
- 스프림은 자바 언어 기반의 프레임워크
- 자바언어의 가장 큰 특징이 객체 지향언어이고, 스프링은 객체 지향 언어가 가진 강력한 특징을 살려내는 프레임워크
- 스프링은 좋은 객체 지향 애플리케이션을 개발할 수 있게 도와주는 프레임워크

### 객체 지향 특징
- 추상화
- 캡슐화
- 상속
- 다형성

### 객체 지향 프로그래밍
- 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러개의독립된 단위, 즉 객체들의 모임으로 파악하고자 하는 것
- 각 객체는 메시지를 주고받고, 데이터를 처리
- 프로그램을 유연하고 변경이 용이하게 만들어 대규모 소프트웨어 개발에 많이 사용


# 다형성
예
- 운전자 - 자동차(테슬라, 벤츠, k9)
- 공연 무대 로미오(원빈, 강동원) -줄리엣(송혜교, 김태희)
- 키보드, 마우스, 세상의 표준 인터페이스들
- 할인 정책 로직 
- 정렬 알고리즘

## 역할과 구현을 분리
- 역할과 구현으로 구분하면 세상이 단순해지고, 유연해지며 변경도 편리
장점
- 클라이언트는 대상의 역할(인터페이스)만 알면 된다.
- 클라이언트는 구현 대상의 내부 구조를 몰라도 된다.
- 클라이언트는 구현 대상의 내부 구조가 변경되어도 영향을 받지 안흔다.
- 클라이언트는 구현 대상 자체를 변경해도 영향을 받지 않는다.

### 자바 언어
- 자바 언어의 다형성을 활용
- 역할= 인터페이스, 구현= 인터페이스를 구현한 클래스, 구현 객체
- 객체를 설계할 때 역할과 구현을 명확히 분리
- 객체 설계시 역할(인터페이스)을 먼저 부여하고, 그 역할을 수행하는 구현 객체 만들기 -역할이 훨씬 중요

### 자바 언어의 다형성
- 오버라이딩은 자바 기본 문법
- 오버라이딩 된 메서드가 실행
- 다형성으로 인터페이스를 구현한 객체를 실행 시점에 유연하게 변경할 수 있음
- 클래스 상속관계도 다형성, 오버라이딩 적용 가능

#### 다형성의 본질
- 인터페이스를 구현한 객체 인스턴스를 실행 시점에 유연하게 변경가능
- 다형성의 본질을 이해하려면 협력이라는 객체사이의 관계에서 시작해야함
- 클라이언트를 변경하지 않고, 서버의 구현 기능을 유연하게 변경할 수 있음
- ex) 클라이언트(운전자)-> 구현체1(아반떼), 구현체2(테슬라)
## 객체의 협력이라는 관계부터 생각
- 혼자 있는 객체는 없다
- 클라이언트: 요청, 서버: 응답
- 수 많은 객체 클라이언트와 객체 서버는 협력 관계를 가짐
정리
- 실세계의 역할과 구현이라는 편히한 컨셉을 다형성을 통해 객체 세상으로 가져올 수 있음
- 유연하고 변경이 용이
- 확장 가능한 설계 
- 클라이언트에 영향을 주지 않는 변경 가능
- 인터페이스를 안정적으로 잘 설계하는 것이 중요 - 변경이 일어나지 않도록
한계
- 역할(인터페이스) 자체가 변하면, 클라이언트, 서버 모두에 큰 변경이 발생
- 자동차를 비행기로 변경시, 대본자체가 변경시, USB 인터페이스가 변경시

## 스프링과 객체 지향
- 다형성이 가장 중요
- 스프링은 다형성을 극대화해서 이용할 수 있게 도와줌
- 스프링에서 이야기하는 제어의 역전(IoC), 의존관계 주입(DI)은 다형성을 활용해서 역할과 구현을 편리하게 다룰 수 있도록 지원
- 스프링을 사용하면 마치 레고 블럭 조립하듯이, 공연 무대의 배우를 선택하듯이, 구현을 편리하게 변경할 수 있음

### 좋은 객체 지향 설계의 5가지 원칙(SOLID)
- 클린코드로 유명한 로버트 마틴이 좋은 객체 지향 설계의 5가지 원칙을 정리
##### SRP 단일 책임원칙(single responsibility principle)
- 한 클래스는 하나의 책임만 가져야 한다
- 하나의 책임이라는 것은 모호하며, 클 수 있고 작을 수 도 있고, 문맥과 상황에 따라 다름
- 중요한 기준은 변경이다, 변경이 있을 때 파급효과가 적으면 단일 책임 원칙을 잘 따른 것
ex) UI 변경, 객체의 생성과 사용을 분리

##### OCP 개방-폐쇄 원칙(Open/cloesd princiole)
- 소프트웨어 요소는 확장에는 열려있으나 변경에는 닫혀 있어야 한다.
- 다형성을 활용
- 인터페이스를 구현한 새로운 클래스를 하나 만들어서 새로운 기능을 구현(기존 코드에 대한 변경이 필요 없음)
###### 문제점
- 클라이언트가 구현 클래스를 직접 선택
- ```java
	car c = new 아반떼(); //기존
	car c = new 테슬라(); // 변경
	```
- > 구현 객체를 변경하려면 클라이언트 코드를 변경해야 한다.
- 분명 다형성을 사용했지만, OCP 원칙을 지킬 수 없다.
-> 문제 해결하기 위해서는 객체를 생성하고, 연관관계를 맺어주는 별도의 조립, 설정자가 필요 -> 스프링의 역할

##### LSP 리스코프 치환 원칙 (Liskov substitution principle)
- 프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀수 있어야 함
- 다형성에서 하위 클래스는 인터페이스 규약을 다 지켜야 한다는 것, 다형성을 지원하기 위한 원칙, 인터페이스를 구현한 구현체는 믿고 사용하려면, 이 원칙이 필요
- 단순히 컴파일 성공을 넘어서는 이야기
ex) 자동차 인터페이스의 엑셀은 앞으로 가라는 기능, 뒤로 가게 구현하면 LSP 위반, 느리더라도 앞으로 가야함

##### ISP 인터페이스 분리 원칙(Interface segregation principle)
- 특정 클라이언트를 위한 인터페이스 여러 개가 범용 인터페이스 하나보다 낫다
- 자동차 인터페이스 -> 운전 인터페이스, 정비 인터페이스로 분리
- 사용자 클라이언트 -> 운전자 클라이언트, 정비사 클라이언트로 분리
- 분리하면 정비 인터페이스 자체가 변해도 운전자 클라이언트에 영향을 주지 않음
- 인터페이스가 명확해지고, 대체 가능성이 높아짐

##### DIP 의존관계 역전 웍칙 (Dependency inversion principle)
- 프로그래머는 "추상화에 의존해야지, 구체화에 의존하면 안된다" 의존성 주입은 이 원칙을 따르는 방법 중 하나이다.
- 구현 클래스에 의존하지 말고, 인터페이스에 의존하라는 것
- 역할에 의존하게 해야하지, 구현에 의존하게 해서는 안된다. 객체 세상도 클라이언트가 인터페이스에 의존해야 유연하게 구현체를 변경할 수 있다. 구현체에 의존하게 되면 변경이 아주 어려워짐
- 그러나 운전자는 car 인터페이스에 의존하지만, 구현클래스인 아반떼도 동시에 의존함
- 클라이언트(운전자)가 구현 클래스를 직접 선택하고 있음
- car c = new 아반떼();
-> DIP위반, 코드변경이 필요하는 문제가 생김

###### 정리
- 객체 지향의 핵심은 다형성
- 다형성만으로는 쉽게 부품을 갈아 끼우듯이 개발할 수 없다.
- 다형성만으로는 구현 객체를 변경할 때 클라이언트 코드도 함께 변경됨
- 다형성만으로는 OCP,DIP를 지킬 수 없음
-> 뭔가 더 필요함


# 객체 지향 설계와 스프링
-스프링은 다음 기술로 다형성 + OCP, DIP를 가능하게 지원
	- DI(Dependency Injection)- 의존관계, 의존성 주입
	- DI 컨테이너 제공
		- 자바 객체들을 컨테이너 안에 넣어놓고, 의존관계를 서로 연결하고 주입해주는 기능을 제공
- 클라이언트 코드의 변경없이 기능 확장
- 쉽게 부품을 교체하듯이 개발

## 스프링이 없던 시절
- 옛날 어떤 개발자가 좋은 객체 지향 개발을 하려고 OCP, DIP 원칙을 지키면서 개발을 해보니, 너무 할일이 많고 배보다 배꼽이 더 컸다. 그래서 프레임워크로 만듦
- 순수하게 자바로 OCP , DIP원칙들을 지키면서 개발을 해보면, 결국 스프링 프레임 워크를 만들게 됨
- DI개념은 말보다는 코드로 짜봐야 필요성을 알게됨

###### 정리
- 모든 설계에 역할과 구현을 분리하자
- 자동차, 공연 예를 떠올려보자
- 애플리케이션 설계도 공연을 설계 하듯이 배역만 만들어두고, 배우는 언제든지 유연하게 변경할 수 있도록 만드는 것이 좋은 객체 지향 설계임
- 이상적으로는 모든설계에 인터페이스를 부여하자

###### 실무적인 고민
- 인터페이스를 도입하면 추상화라는 비용이 발생
	- 코드가 추상화됨으로써 오는 단점들이 존재, 장점이 단점을 넘어설때 사용해야함,ex) 인터페이스코드에서 다시한번 구현코드를 열어야하는 등
- 기능을 확장할 가능성이 없다면, 구체 클래스를 직접 사용하고, 향후 꼭 필요할 때 리팩터링해서 인터페이스를 도입하는 것도 방법이다.
- 미래에 확장 가능성이 있으면 인터페이스사용

----------------------------------------------------------------------------------------------------------
##### TIP
###### IntelliJ의 Gradle 대신에 자바 직접 실행
- 최근 IntelliJ 버전은 Gradle을 통해서 실행 하는 것이 디폴트
- gradle보다 Intellij로 바꾸면, 자바로 바로 실행해서 실행속도가 더 빠름
- setting-> gradle 검색 -> 
Build and run using: IntelliJ IDEA
Run tests using: IntelliJ IDEA
로 변경

# 회원 도메인 설계

### 회원 도메인 협력 관계
- 기획자들도 볼 수 있음

### 회원 클래스 다이어그램 -정적
- 개발자가 구체화해서 클래스 다이어그램을 만듦
- 인터페이스와 구현체들이 다 모임
- 실제 서버를 실행하지 않고, 클래스만 분석해서 볼 수 있음

### 회원 객체 다이어그램 - 동적
- 서버가 실행될때, 동적으로 결정되는 리포지토리들때문에, 클래스 다이어그램만으로는 확인이 어려움
- 서버가 실제 사용하는 참조관계

##### TIP
- 실무에서 동시성 문제로 ```HashMap()```대신 ```ConCurrentHashMAp()```사용
- 구현체가 하나일경우 관례상 구현체 뒤에 ```Impl```붙임

----------------------------------------------------------------------------------------------------------
`ctrl + e // recent files`

## 제어의 역전 IoC(Inversion of Control)
- 기존 프로그램에서는 클라이언트 구현 객체가 스스로 필요한 서버 구현 객체를 생성 연결하며 실행함
- 즉, 구현 객체가 프로그램의 제어 흐름을 컨트롤함
- 개발자 입장에서도 자연스러운 흐름
- 그러나 제어의 역전이 적용되면, 구현 객체는 자신의 로직을 실행하는 역할만 담당
- 프로그램의 제어 흐름은 구현 객체가 아닌 다른 곳에서 담당
- 따라서 구현객체는 사용될지 안될지 모른채, 자기 로직만 실행하며, 프로그램 제어 흐름은 외부에서 관리
- 이렇게 프로그램의 제어 흐름을 직접 제어하는 것이 아니라, 외부에서 관리하는 것을 제어의 역전(IoC)라고 함

#### 프레임워크 vs 라이브러리
- 프레임워크는 내가 작성한 코드를 제어하고, 실행함 (JUnit)
- 라이브러리는 내가 작성한 코드가 직접 제어의 흐름을 담당하는 것을 말함

### 의존관계 주입 DI(Dependency Ingection)
- 구현 객체는 인터페이스에 의존하며, 그 구현 객체 내에서 또 어떤 구현 객체가 사용될지는 모름
- 의존관계는 정적인 클래스 의존 관계와 실행 시점에 결정되는 동적인 객체(인스턴스) 의존관계 둘을 분리해서 생각 해야 함

##### 정적인 클래스 의존 관계
- 클래스가 사용하는 import 코드만 보고도 의존관계를 쉽게 판단 가능
- 정적인 의존관계는 애플리케이션을 실행하지 않아도 분석할 수 있음(클래스 다이어 그램)
- 그러나 이러한 정적 클래스 의존관계만으로는 실제 어떤 객체가 주입될지 알 수 없다.

##### 동적인 객체 인스턴스 의존관계
- 애플리케이션 실행 시점에 실제 생성된 객체 인스턴스의 참조가 연결된 의존 관계(객체 다이어 그램)
- 애플리케이션 실행 시점(런타임)에 외부에서 실제 구현 객체를 생성하고 클라이언트에 전달해서 클라이언트와 서버의 실제 의존관계가 연결 되는 것을 의존관계 주입이라 함
- 객체 인스턴스를 생성하고, 그 참조값을 전달하여 연결됨
- DI 사용시, 클라이언트 코드를 변경하지 않고도 클라이언트가 호출하는 대상의 타입 인스턴스를 변경가능
- DI 사용시, 정적인 클래스 의존관계를 전혀 변경시키지 않고, 동적인 객체 인스턴스 의존관계만 쉽게 변경하면 됨

### IoC 컨테이너, DI 컨테이너
- 객체를 생성하고 관리하면서 의존관계를 연결해 주는 것을 Ioc컨테이너 또는 DI컨테이너라고 함
- 의존관계 주입에 초점을 맞춰 주로 DI 컨테이너라고 함(스프링이 DI 컨테이너로 불림)
- 애플리케이션 전체를 조립한다는 의미에서 어셈블러, 오브젝트 팩토리 등으로 불리기도 함

# 스프링 컨테이너
- 기존에는 개발자가 직접 객체를 생성하고 DI를 했지만, 스프링 컨테이너를 통해서 사용할 수 있음

### @Configuration
- 스프링 컨테이너는 ```@Configuration```붙어있는 것을 설정정보로 사용함
- ```java
	@Configuration AppConfig(){}
	```
### @Bean
- 설정정보의 메소드에 각각 적어줌
- ```@Bean```이 적힌 메서드를 모두 호출해서 반환된 객체를 스프링 컨테이너에 등록함
- 이렇게 스프링 컨테이너에 등록된 객체를 스프링 빈이라 함
- 스프링 빈은 ```@Bean```이 붙은 메서드의 명을 스프링 빈의 이름으로 사용
- 이름 변경 가능 ```@Bean(name = "new")```
- ```java
	@Bean
	    public MemberService memberService(){}
   	```

### ApplicationContext
- 스프링 컨테이너
- 스프링은 항상 ```ApplicationContext```으로 시작
- ```@Bean``` 메서드를 다 관리해줌
- 이전에는 개발자가 필요한 객체를 직접 조회했지만, 이제는 스프링 컨테이너를 통해 필요한 스프링 빈(객체)를 찾아야 함
- 스프링 빈은 ```applicationContext.getBean()``` 메서드를 사용해 찾을 수 있음
- 기존에 개발자가 직접 자바코드로 모든 것을 했지만, 스프링 컨테이너를 이용하면 객체를 스프링 빈으로 등록하고, 스프링 컨테이너에서 스프링 빈을 찾아서 사용하도록 변경됨
- ```java
 	ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);
	//AppConfig에 있는 @Bean 메서드를 컨테이너에 객체 생성, 관리를함
	MemberService memberService = applicationContext.getBean("Bean 에 등록된 메서드 이름", 타입);
 	```
----------------------------------------------------------------------------------------------------




### 웹 애플리케이션과 싱글톤
- 스프링은 기업용 온라인 서비스 기술을 지원하기 위해 탄생함
- 대부분의 스프링 애플리케이션은 웹 애플리케이션이고, 웹이 아닌 애플리케이션 개발도 가능함
- 웹 애플리케이션은 보통 여러 고객이 동시에 요청

### 스프링 없는 DI 컨테이너
- 요청할때 마다 객체를 새로 생성
- 고객 트래픽이 초당 1000이 나오면 초당1000개 객체가 생성, 소멸됨 -> 메모리 낭비 심함
- 해결방안은 해당 객체를 1개만 생성하여, 이를 공유하도록 설계 -> 싱글톤 패턴

# 싱글톤 패턴
- 클래스의 인스턴스가 1개만 생성되는 것을 보장하는 디자인 패턴
- 싱글톤 패턴을 적용하면 고객의 요청이 올 때마다 객체를 생성하는 것이 아니라, 이미 만들어진 객체를 공유해서 효율적으로 사용할 수 있음
- 객체 인스턴스를 2개 이상 생성하지 못하도록 막으며, private 생성자를 사용해 외부에서 임의로 new 키워드를 사용하지 못하도록 막아야 함

## 싱글톤 패턴 구현
- 구현하는 방법은 여러가지 있지만, 객체를 미리 생성해두는 가장 단순하고 안전한 방법을 선택
#### 1.static 영역에 객체를 미리하나 생성해서 올림
#### 2. 이 객체 인스턴스가 필요하면 오직 메서드를 통해서 조회하게 만듦, 항상 같은 인스턴스를 반환
#### 3. 오직 1개의 객체 인스턴스만 존재해야 하므로, 생성자를 private로 막아서 외부에서 객체 인스턴스가 생성되는것을 막음

### 싱글톤 패턴 문제점
- 싱글톤 패턴을 구현하는 코드 자체가 많이 들어감
- 의존관계상 클라이언트가 구체 클래스에 의존 ->DIP 위반
- 클라이언트가 구체 클래스에 의존해서 OCP 원칙을 위반할 가능성이 높음
- 테스트하기 어려움
- 내부속성을 변경하거나 초기화 하기 어려움
- `private` 생성자로자식 클래스를 만들기 어려움
- 결론적으로 유연성이 떨어짐
- 안티패턴으로 불리기도 함

# 싱글톤 컨테이너
- 스프링 컨테이너는 싱글톤 패턴의 문제점을 해결하면서, 객체 인스턴스를 싱글톤으로 관리함
- 스프링 빈이 바로 싱글톤으로 관리되는 빈
- 스프링 컨테이너는 싱글톤 패턴을 적용하지 않아도, 객체 인스턴스를 싱글톤으로 관리
- 스프링 컨테이너는 싱글톤 컨테이너 역할을 하고, 이렇게 싱글톤 객체를 생성하고 관리하는 기능을 싱글톤 레지스트리라고 함
- 스프링 컨테이너의 이런 기능 덕분에 싱글톤 패턴의 모든 단점을 해결하면서 객체를 싱글톤으로 유지할 수 있음
- 싱글톤 패턴을 위한 지저분한 코드가 들어가지 않아도 됨
- `DIP`, `OCP`, 테스트, `private` 생성로 부터 자유롭게 싱글톤 사용가능
- 스프링의 기본 빈 등록 방식은 싱글톤이지만, 요청할 때 마다 새로운 객체를 생성해서 반환하는 기능도 제공

`Extend Selection`
- `ctrl+ w`

### 싱글톤 방식의 주의점
- 싱글톤 패턴이든, 스프링 같은 싱글통 컨테이너를 사용하든, 객체 인스턴스를 하나만 생성해서 공유하는 싱글톤 방식은 여러 클라이언트가 하나의 같은 객체 인스턴스를 공유하기 때문에 싱글톤 객체는 상태를 유지하게 설계하면 절대 안됨
- 무상태(stateless)로 설계해야 함
	- 특정 클라이언트에 의존적인 필드가 있으면 안됨
	- 특정 클라이언트가 값을 변경할 수 있는 필드가 있으면 안됨
	- 가급적 읽기만 가능해야 함
	- 필드 대신에 자바에서 공유되지 않는 지역변수, 파라미터,  ThreadLocal 등을 사용해야함
- 스프링 빈의 필드에 공유 값을 설정하면 정말 큰장애가 발생할 수 있음
- 공유되는 필드를 클라이언트가 값을 변경하게되면 심각한 오류가 발생함
- 공유필드는 조심해야하며 스프링 빈은 항상 무상태로 설계

### `@Configuration`과 싱글톤
- `Appconfig` 코드에서 `memberService` 빈을 만드는 코드를 보면 `memberRepository()`를 호출 ->`new MemoryMemberRepository()` 를 호출
- `orderService` 빈을 만드는 코드도 동일하게 `memberRepository()` 를 호출 -> `new MemoryMemberRepository()` 를 호출
- 결과적으로 각각 다른 2개의 `MemoryMemberRepository`가 생성되면서 싱글톤이 깨지는 것 처럼 보임
- 그러나 스프링 컨테이너는 싱글톤 유지

#### @Configuration과 바이트코드 조작
- 스프링 컨테이너는 싱글톤 레지스트리이므로, 스프링 빈이 싱글톤이 되도록 보장해주어야 함
- 그러나 스프링이 자바코드까지 조작하기는 어렵고, 스프링은 클래스의 바이트코드를 조작하는 라이브러리를 사용함
- ```java
	@Test
	void configurationDeep() {
	 	ApplicationContext ac = new
		AnnotationConfigApplicationContext(AppConfig.class);
		 //AppConfig도 스프링 빈으로 등록된다.
		 AppConfig bean = ac.getBean(AppConfig.class);

		 System.out.println("bean = " + bean.getClass());
		 //출력: bean = class hello.core.AppConfig$$EnhancerBySpringCGLIB$$bd479d70
	}
	```
- `AnnotationConfigApplicationContext`에 파라미터로 넘긴 값은 스프링 빈으로 등록됨
- 따라서 `AppConfig`도 스프링 빈이되는데 클래스 정보 출력시 순수한 클래스명뒤에 `CGLIB`등이 붙음
- 즉, 사용자가 만든 클래스가 아니라 스프링이 `CGLIB`라는 바이트코드 조작 라이브러리를 사용해서 `AppConfig` 클래스를 상속받은 임의의 다른 클래스를 만들어 스프링 빈에 그것을 등록한 것임
- 이러한 임의의 다른 클래스가 싱글톤이 보장되도록 해줌

#### `AppConfig@CGLIB` 예상 코드
- ```java
	@Bean
	public MemberRepository memberRepository() {

		 if (memoryMemberRepository가 이미 스프링 컨테이너에 등록되어 있으면?) {
			return 스프링 컨테이너에서 찾아서 반환;
		 } else { 
			//스프링 컨테이너에 없으면 기존 로직을 호출해서 MemoryMemberRepository를 생성하고 스프링 컨테이너에 등록
			return 반환
		 }
	}
- `@Bean`이 붙은 메서드마다 이미 스프링 빈이 존재하면 존재하는 빈을 반환하고, 스프링 빈이 없으면 생성하여 스프링빈으로 등록하고 반환하는 코드가 동적으로 만들어짐
- `AppConfig@CGLIB`는 `AppConfig`의 자식타입이므로 `AppConfig`타입으로 조회하면 자식타입까지 전부 조회되기에 `AppConfig@CGLIB`자식이 출력되는 것임
- 이로인해 싱글톤이 보장됨

### `@Configuration` 을 적용x
- `@Bean`만 적용시, `CGLIB` 기술 없이 순수한 `AppConfig`로 스프링 빈에 등록되어 각각 다른 인스턴스들이 생성됨
- `@Bean`만 사용해도 스프링 빈으로 등록되지만, 싱글톤을 보장하지 않음
	- 의존관계 주입이 필요하여 메서드를 직접 호출할 때 싱글톤을 보장하지 않ㅇ므
- 스프링 설정정보는 항상 `@Configuration`을 사용하는 것을 권장

# 컴포넌트 스캔

### 컴포넌트 스캔 & 의존관계 자동 주입
- 스프링 빈을 등록할때 자바 코드 `@Bean`이나 `XML`의 `<bean>`등을 통해서 설정 정보에 직접 등록함
- 그러나 이렇게 등록해야 할 스프링 빈이 수십, 수백개가 되면 일일이 등록하기도 귀찮고, 설정 정보도 커지고 누락하는 문제도 발생
- 스프링은 설정 정보가 없어도 자동으로 스프링 빈을 등록하는 컴포넌트 스캔이라는 기능을 제공
- 의존관계도 자동으로 주입하는 `@Autowired`라는 기능도 함께 제공

**AutoAppConfig.java**
- ```java
	@Configuration
	@ComponentScan(
	 	excludeFilters = @Filter(type = FilterType.ANNOTATION, classes =
		Configuration.class))
	public class AutoAppConfig {
	}
	```

- 컴포넌트 스캔을 사용하기 위해 `@ComponenetScan`을 설정정보에 붙여주어야 함
- 기존 설정정보와 다르게 `@Bean`으로 등록한 클래스x
- 컴포넌트 스캔을 사용하면 `@Configuration`이 붙은 설정 정보도 자동으로 등록됨
	- `@Configuration` 소스코드에 `@Component` 애노테이션이 존재함
- 컴포넌트 스캔은 `@Component` 애노테이션이 붙은 클래스를 스캔해서 스프링 빈으로 등록함

##### excludeFilters
- 컴포넌트 스캔 대상에서 제외 가능

### @ComponentScan
- `@Component`가 붙은 모든 클래스를 스프링 빈으로 등록
- 스프링 빈의 기본 이름은 클래스명을 사용하고 맨 앞글자만 소문자를 사용
- 빈 이름 디폴트: `MemberService` -> `memberService`
- 빈 이름 직접 지정: `@Component("memberService2")`

### `@Autowired` 의존관계 자동 주입
- 생성자에 `@Autowired`를 지정하면, 스프링 컨테이너가 자동으로 해당 스프링 빈을 찾아서 주입
- 디폴트 조회 방법은 타입이 같은 빈을 찾아서 주입
	- `getBean(MemberRepository.class)`기능과 동일

### 탐색 위치와 기본 스캔 대상

### 탐색할 패키지의 시작 위치 지정
- 모든 자바클래스를 모두 컴포넌트 스캔하면 시간이 오래 걸림
- 꼭 필요한 위치만 탐색하도록 시작 위치를 지정
- 기본값(지정 안할 시)은 `@CompnenetScan`이 붙은 설정 정보클래스의 패키지가 시작위치가 됨


##### 1. basePackages
- 탐색할 패키지의 시작 위치를 지정
- 해당 패키지를 포함하여 하위 해키지를 모두 탐색
###### 단일 시작 위치 지정
- ```java
	@ComponentScan(
	 	basePackages = "hello.core",
	}
	```

###### 다중 시작 위치 지정
- ```java
	@ComponentScan(
	 	basePackages = {"hello.core", "hello.service"}
	}
	```

##### 2. basePackageClasses
- 지정한 클래스의 패키지를 탐색 시작 위치로 지정
- ```java
	@ComponentScan(
	 	basePackageClasses = AutoAppConfig.class
	}
	```
##### 권장 방법
- 패키지 위치를 지정하지 않고, 설정 정보 클래스의 위치르르 프로젝트 최상단에 두는 것임
- 최근 스프링 부트도 이 방법을 기본으로 제공
ex)
- ```java
	com.hello
	com.hello.serivce
	```

- 이와 같이 프로젝트 구성시, `com.hello`에 메인설정 정보를 두고, 따로 위치 지정을 설정하지 않음
- `com.hello`를 포함한 하위는 모두 자동으로 컴포넌트 스캔 대상이 됨
- 프로젝트 메인설정정보는 프로젝트를 대표하는 정보이기 때문에 시작 루트 위치에 두는 것을 선호
- 스프링 부트 사용시 스프링 부트 대표 시작 정보인 `@SpringBootApplication`를 이 프로젝트 시작 루트 위치에 두는 것이 관례임(이 설정정보에 `@ComponentScan`이 포함)

### 컴포넌트 스캔 기본 대상
- 컴포넌트 스캔은 `@Component`뿐만 아니라 다음내용도 추가로 대상에 포함
- 해당 클래스 소스코드에 `@Component`를 포함함
- 애노테이션에는 상속관계가 없지만, 애노테이션이 특정애노테이션을 들고 있는 것을 인식하게 하는 것은 스프링이 지원하는 기능임
- `useDefaultFilters`옵션은 기본으로 켜져 있고, 이 옵션을 끄면 기본 스캔 대상들이 제외됨

##### @Component 
- 컴포넌트 스캔에서 사용
##### @Controller
- 스프링 MVC 컨트롤러로 인식
##### @Service
- 스프링 비즈니스 로직에서 사용, 특별한 처리기능은 없고, 개발자들이 핵심 비즈니스 로직으로 인식하게끔 문구역할
##### @Repository
- 스프링 데이터 접근 계층으로 인식하고, 데이터 계층의 예외를 스프링 예외로 변환해줌
##### @Configuration
- 스프링 설정정보로 인식하고, 스프링 빈이 싱글톤을 유지하도록 추가처리를 함

### 필터
- `@Component`면 충분하기 때문에, `includeFilters`를 사용할 일은 거의 없음
- `excludeFilters`는 간혹 사용할때는 있음
- 특히 최근 스프링 부트는 컴포넌트 스캔을 기본으로 제공하는데, 개인적으로 옵션을 변경하면서 사용하기보다는 스프링의 기본 설정에 최대한 맞추어 사용하는것을 권장하고, 선호하는 편임
##### includeFilters
- 컴포넌트 스캔 대상을 추가로 지정
##### excludeFilters
- 컴포넌트 스캔에서 제외할 대상을 지정

#####  FilterType 옵션 5가지
###### ANNOTATION
- 기본값, 애노테이션을 인식해서 동작

###### ASSIGNABLE_TYPE
- 지정한 타입과 자식 타입을 인식해서 동작
###### ASPECTJ
- `AspectJ` 패턴 사용
###### REGEX
- 정규 표현식
###### CUSTOM
- `TypeFilter` 이라는 인터페이스를 구현해서 처리

### 중복 등록과 충돌
- 컴포넌트 스캔에서 같은 빈 이름 등록시 발생 상황
##### 1. 자동 빈 등록 vs 자동 빈 등록
- 컴포넌트 스캔에 의해 자동으로 스프링 빈이 등록되는데, 그 이름이 같은 경우 스프링은 오류를 발생시킴
- `ConflictingBeanDefinitionException`예외 발생
##### 2. 수동 빈 등록 vs 자동 빈 등록
- 수동 빈 등록이 우선권을 가짐( 수동 빈이 자동 빈을 오버라이딩을 함)
- ```java
	Overriding bean definition for bean 'memoryMemberRepository' with a different
	definition: replacing
	```
- 개발자가 의도적으로 이런 결과를 기대했다면, 자동보다 수동이 우선권을 가지는 것이 좋지만, 의도적인 상황보다 여러 설정들이 꼬여서 이런 결과가 만들어지는 경우가 대부분임
-> 그렇게되면, 잡기 매우 어려운 애매한 버그가 발생함
- 최근 스프링 부트에서는 수동 빈 등록과 자동 빈 등록이 출돌나면 오류가 발생하도록 기본 값을 바꿈

###### 수동 빈 등록, 자동 빈 등록 오류시 스프링 부트 에러
- ```java
	Consider renaming one of the beans or enabling overriding by setting
	spring.main.allow-bean-definition-overriding=true
	```
## 의존관계 자동 주입


#### 의존관계 주입 방법
- 의존관계 자동 주입은 컨테이너가 관리하는 스프링 빈이어야 작동함
###### 1. 생성자 주입
###### 2. 수정자 주입(setter 주입)
###### 3. 필드 주입
###### 4. 일반 메서드 주입

### 생성자 주입
- 생성자를 통해서 의존 관계를 주입 받는 방법
- 생성자 호출시점에 딱 1번만 호출되는 것이 보장됨
- 불변, 필수 의존관계에 사용
- 생성자가 오직 1개만 있는 경우 `@Autowired`를 생략해도 자동 주입 됨(스프링 빈에만 해당)

- ```java
	@Component
	public class OrderServiceImpl implements OrderService {
		 private final MemberRepository memberRepository;
		 private final DiscountPolicy discountPolicy;
		 @Autowired
		 public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy
		discountPolicy) {
			 this.memberRepository = memberRepository;
			 this.discountPolicy = discountPolicy;
		 }
	}
	```

### 수정자 주입(setter 주입)
- `setter`라 불리는 필드의 값을 변경하는 수정자 메서드를 통해서 의존관계를 주입하는 방법
- 선택, 변경 가능성이 있는 의존관계에 사용
- 자바빈 프로퍼티 규약의 수정자 메서드 방식을 사용하는 방법
- ```java
	@Component
	public class OrderServiceImpl implements OrderService {
		 private MemberRepository memberRepository;
		 private DiscountPolicy discountPolicy;
		 @Autowired
		 public void setMemberRepository(MemberRepository memberRepository) {
			 this.memberRepository = memberRepository;
		 }
		 @Autowired
		 public void setDiscountPolicy(DiscountPolicy discountPolicy) {
			 this.discountPolicy = discountPolicy;
		 }
	}
	```
- `@Autowired`의 기본 동작은 주입할 대상이 없으면 오류가 발생함
- 주입할 대상이 없어도 동작하게 하려면 `@Autowired(required = false)`로 지정
- 자바빈 프로퍼티, 자바에서는 과거부터 필드의 값을 직접 변경하지 않고, `setXxx`, `getXxx`라는 메서드를 통해서 값을 읽거나 수정하는 규칙을 만들었는데, 그것이 자바빈 프로퍼티 규약임

### 필드 주입
- 코드가 간결하지만, 외부에서 변경이 불가능해서 테스트 하기 어려움
- DI 프레임워크가 없으면 아무것도 할 수 없음
- 애플리케이션의 실제코드와 관계없는 테스트 코드, 스프링 설정을 목적으로하는 `@Configuration`같은 곳에서만 특별한 용도로 사용
- 순수한 자바 테스트 코드에는 `@Autowired`가 동작하지 않음 
	- `@SpringBootTest`처럼 스프링 컨테이너를 테스트에 통합한 경우에만 사용 가능

### 일반 메서드 주입
- 일반 메서드를 통해서 주입 받을 수 있음
- 한번에 여러 필드를 주입 받을 수 있음
- 일반적으로 잘 사용하지 않음

## 옵션 처리
- 주입할 스프링 빈이 없어도 동작해야할 경우가 있음
- `@Autowired`만 사용시 `required`옵션의 기본값이 `true`로 되어 있어서 자동 주입 대상이 없으면 오류가 발생함

#### 자동 주입 대상을 옵셩으로 처리하는 방법
##### `@Autowired(required=false)`
- 자동 주입할 대상이 없으면 수정자 메서드 자체가 호출 안됨
##### `org.springframework.lang.@Nullable`
- 자동 주입할 대상이 없으면 null이 입력됨
##### `Optional<>`
- 자동 주입할 대상이 없으면 Optional.empty
- ```java
	//호출 안됨
	//Member는 스프링 빈이 아님
	//setNoBean1()은 @Autowired(required=false) 이므로 호출 자체가 안됨
	@Autowired(required = false)
	public void setNoBean1(Member member) { 
	 	System.out.println("setNoBean1 = " + member);
	}
	//null 호출
	@Autowired
	public void setNoBean2(@Nullable Member member) {
		 System.out.println("setNoBean2 = " + member);
	}
	//Optional.empty 호출
	@Autowired(required = false)
	public void setNoBean3(Optional<Member> member) {
		 System.out.println("setNoBean3 = " + member);
	}
	```


## 생성자 주입을 선택하기
- 과거에는 수정자 주입과 필드 주입을 많이 사용했지만, 최근에는 스프링을 포함한 DI프레임워크 대부분이 생성자 주입을 권장함

### 특징
##### 불변
- 대부분의 의존관계 주입은 한번 일어나면 애플리케이션 종료시점까지 의존관계를 변경할 일이 없음
- 오히려 대부분의 의존관계는 애플리케이션 종료 전까지 변하면 안됨(불변해야 함)
- 수정자 주입을 사용하면 `setXxx` 메서드를 `public`으로 열어두어야 하는데, 누군가 실수로 변경할 수 도 있고, 변경하면 안되는 메서드를 열어두는 것은 좋은 설계 방식이 아님
- 생성자 주입은 객체를 생성할 때 딱 1번만 호출되므로 이후에 호출되는 일이 없음, 따라서 불변하게 설계할 수 있음

##### 누락
- ```java
	@Test
	void createOrder() {
		 OrderServiceImpl orderService = new OrderServiceImpl();
		 orderService.createOrder(1L, "itemA", 10000);
	}
	```
- 프레임워크 없이 순수한 자바 코드를 단위테스트 하는 경우에 수정자 의존관계 사용시, 실행은 되지만, `NPE`가 발생함
- `memberRepository`, `discountPolicy` 모두 의존관계 주입이 누락
- 생성자 주입을 사용하면 주입 데이터를 누락했을 때 컴파일 오류가 발생하고 실행전부터 오류가 발생했음을 알 수 있음
- ```java
	@Test
	void createOrder() {
		 OrderServiceImpl orderService = new OrderServiceImpl();
		 orderService.createOrder(1L, "itemA", 10000);
	}
	```

### final 키워드
- 생성자 주입을 사용하면 필드에 `final` 키워드를 사용할 수 있음
- 그러면 생성자에서 값이 설정되지 않는 오류를 컴파일 시점에 막아줌
- 수정자 주입을 포함한 나머지 주입 방식은 모두 생성자 이후에 호출되므로, 필드에 `final` 키워드를 사용할 수 없다. 오직 생성자 주입 방식만 키워드를 사용할 수 있음
- 생성자 주입 방식을 선택하는 이유 중 하나는 프레임워크에 의존하지 않고, 순수한 자바언어의 특징을 잘 살리는 방법임
- 기본으로 생성자 주입을 사용하고, 필수 값이 아닌 경우에는 수정자 주입 방식을 옵션으로 부여함
- 생성자 주입과 수정자 주입을 동시에 사용가능
- 항상 생성자 주입을 선택하고, 가끔 옵셩이 필요한 경우 수정자 주입을 선택할 수 있지만, 필드 주입은 권장하지 않음
- ```java
	@Component
	public class OrderServiceImpl implements OrderService {
		 private final MemberRepository memberRepository;
		 private final DiscountPolicy discountPolicy; // 오류발생 java: variable discountPolicy might not have been initialized
		 @Autowired
		 public OrderServiceImpl(MemberRepository memberRepository, DiscountPolicy
		discountPolicy) {
			 this.memberRepository = memberRepository;
		 }
		 //...
	}
	```
### `lombok` 라이브러리 적용 방법
##### 1. build.gradle 에 라이브러리 및 환경 추가
- ```java
	plugins {
		 id 'org.springframework.boot' version '2.3.2.RELEASE'
		 id 'io.spring.dependency-management' version '1.0.9.RELEASE'
		 id 'java'
	}
	group = 'hello'
	version = '0.0.1-SNAPSHOT'
	sourceCompatibility = '11'
	//lombok 설정 추가 시작
	configurations {
		 compileOnly {
		 extendsFrom annotationProcessor
		 }
	}
	//lombok 설정 추가 끝
	repositories {
		 mavenCentral()
	}
	dependencies {
		 implementation 'org.springframework.boot:spring-boot-starter'
		 //lombok 라이브러리 추가 시작
		 compileOnly 'org.projectlombok:lombok'
		 annotationProcessor 'org.projectlombok:lombok'
		 testCompileOnly 'org.projectlombok:lombok'
		 testAnnotationProcessor 'org.projectlombok:lombok'
		 //lombok 라이브러리 추가 끝
		 testImplementation('org.springframework.boot:spring-boot-starter-test') {
		 exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
		 }
	}
	test {
		 useJUnitPlatform()
	}
	```
##### 2. Preferences(윈도우 File Settings) plugin lombok 검색 설치 실행 (재시작)
##### 3. Preferences Annotation Processors 검색 Enable annotation processing 체크 (재시작)

#### @Getter, @Setter 
- 애노테이션 만으로도 메서드가 자동으로 생성됨
- ```java
	@Getter
	@Setter
	@ToString
	public class HelloLombok {
	    private String name;
	    private int age;

	    public static void main(String[] args) {
		HelloLombok helloLombok = new HelloLombok();
		helloLombok.setName("aaa");
		String name = helloLombok.getName();
		System.out.println("helloLombok = " + helloLombok);
	    }
	}
	```
	
#### @RequiredArgsConstructor
- `final` 필드를 파라미터로 받는 생성자 생성
- ```java
	@RequiredArgsConstructor
	public class OrderServiceImpl implements OrderService {
	    private final MemberRepository memberRepository;
	    private final DiscountPolicy discountPolicy;
	    //...
	}
	```

### 조회 빈이 2개 이상일 경우
##### `@Autowired`
- 타입으로 조회하기 때문에, 다음 코드와 유사하게 동작
- `ac.getBean(DiscountPolicy.class)` // 하위클래스까지 모두 가져옴
- 타입으로 조회하면, 선택된 빈이 2개 이상일 때 문제가 발생함
- `DiscountPolicy`의 하위타입인 `FixDiscountPolicy`, `RateDiscountPolicy` 둘다 스프링 빈으로 등록될시 문제가 발생
- ```java
	@Component
	public class FixDiscountPolicy implements DiscountPolicy {}
	////
	@Component
	public class RateDiscountPolicy implements DiscountPolicy {}
	```
- ```java
	@Autowired
	private DiscountPolicy discountPolicy //NoUniqueBeanDefinitionException 오류가 발생
	```
- ```java
	NoUniqueBeanDefinitionException: No qualifying bean of type
	'hello.core.discount.DiscountPolicy' available: expected single matching bean
	but found 2: fixDiscountPolicy,rateDiscountPolicy
	```
- 하나의 빈을 기대했지만, 2개가 발견되었다고 알려줌
- 하위 타입으로 지정할 수 도 있지만, 하위 타입으로 지정하는 것은 `DIP`를 위배하고 유연성이 떨어지고, 이름만 다르고, 같은 타입의 스프링 빈이 2개 있을 경우는 해결이 안됨
- 스프링 빈을 수동등록해서 문제를 해결해도 되지만, 의존관계 자동 주입에서 해결하는 여러 방법이 존재함

### 조회 빈이 2개 이상일 경우 해결방법
##### `@Autowired` 필드 명 매칭
- `@Autowired`는 타입 매칭을 시도하고, 이때 여러 빈이 존재하면 필드 이름, 파라미터 이름으로 빈 이름을 추가 매칭함
- 1. 타입매칭-> 2. 타입 매칭 결과가 2개 이상일 때, 필드명 파라미터 명으로 빈 이름을 매칭
- ```java
	//기존 코드
	@Autowired
	private DiscountPolicy discountPolicy
	```
- ```java
	//필드 명을 빈 이름으로 변경
	@Autowired
	private DiscountPolicy rateDiscountPolicy
	```
- 필드명이 `rateDiscountPolicy` 이므로 빈이 여러개일시 `rateDiscountPolicy`가 주입됨
- 필드명 매칭은 먼저 타입 매칭을 시도하고, 여러 빈이 존재할때, 추가로 동작하는 기능임

##### @Qualifier 사용
- `@Qualifier`는 추가 구분자를 붙여주는 방법
- 주입시 추가적인 방법을 제공하는 것이지 빈 이름을 변경하는 것이 아님을 주의
- 빈 등록시 `@Qualifier`를 붙이고, 주입시에 `@Qualifier`를 붙여주고 등록한 이름을 적어줌
- `@Qualifier`로 주입시, `@Qualifier("이름")`을 못찾을시, `"이름"`으로 등록된 스프링 빈을 추가로 찾음
- `@Qualifier`는 `@Qualifier`를 찾는 용도로만 사용하는게 명확하고 좋음
- 수동 빈 등록시에서도 `@Qualifier` 동일하게 사용 가능
- 1. `@Qualifier`끼리 매칭 -> 2. 빈 이름 매칭 -> 3. `NoSuchBeanDefinitionException` 예외 발생
- ```java
	//자동 등록
	@Component
	@Qualifier("mainDiscountPolicy")
	public class RateDiscountPolicy implements DiscountPolicy {}
	@Component
	@Qualifier("fixDiscountPolicy")
	public class FixDiscountPolicy implements DiscountPolicy {}
	```
- ```java
	//수동 등록
	@Bean
	@Qualifier("mainDiscountPolicy")
	public DiscountPolicy discountPolicy() {
	 	return new ...
	}
	```
- ```java
	//생성자 자동 주입
	@Autowired
	public OrderServiceImpl(MemberRepository memberRepository,
	 	@Qualifier("mainDiscountPolicy") DiscountPolicy
	discountPolicy) {
		 this.memberRepository = memberRepository;
		 this.discountPolicy = discountPolicy;
	}
	```

##### @Primary 사용
- `@Primary`는 우선순위를 정하는 방법
- `@Autowired` 시에 여러 빈이 매칭되면 `@Primary`가 우선권을 가짐
- `@Qualifier`의 단점은 주입 받을 때 코드에 `@Qualifier`를 붙여주어야 한다는 점
- 반면에 `@Primary`를 사용하면 `@Qualifier` 를 붙일 필요가 없음
- ```java
	@Component
	public class FixDiscountPolicy implements DiscountPolicy {}
	@Component
	@Primary
	public class RateDiscountPolicy implements DiscountPolicy {} //우선권을 가짐
	```
- ```java
	//생성자
	@Autowired
	public OrderServiceImpl(MemberRepository memberRepository,
	 DiscountPolicy discountPolicy) {
		 this.memberRepository = memberRepository;
		 this.discountPolicy = discountPolicy;
	}
	```

### @Primary, @Qualifier 활용
- 코드에서 자주 사용하는 메인 데이터베이스의 커넥션을 획득하는 스프링 빈이 있고, 코드에서 특별한
기능으로 가끔 사용하는 서브 데이터베이스의 커넥션을 획득하는 스프링 빈이 있을 경우
	- 메인데이터베이스의 커넥션을 획득하는 스프링 빈은 `@Primary` 를 적용해서 조회하는 곳에서 `@Qualifier` 지정 없이 편리하게 조회하고, 서브 데이터베이스 커넥션 빈을 획득할 때는 `@Qualifier` 를 지정해서 명시적으로 획득 하는 방식으로 사용하면 코드를 깔끔하게 유지할 수 있음
	- 이때 메인 데이터베이스의 스프링 빈을 등록할 때 `@Qualifier`를 지정해주는 것은 상관없음
##### 둘 중 우선순위 
- `@Primary` 는 기본값 처럼 동작하는 것이고, `@Qualifier`는 매우 상세하게 동작
- 스프링은 자동보다는 수동이, 넒은 범위의 선택권 보다는 좁은 범위의 선택권이 우선순위가 높음
- 따라서, `@Qualifier`가 우선순위가 높음

## 애노테이션 직접 만들기
- `@Qualifier("mainDiscountPolicy")`처럼 문자를 적으면 컴파일시 타입 체크가 정확히 안됨
- 이러한 문제점은 애노테이션을 직접 만들어서 문제를 해결할 수 있음

- ```java
	@Target({ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER,
	ElementType.TYPE, ElementType.ANNOTATION_TYPE})
	@Retention(RetentionPolicy.RUNTIME)
	@Documented
	@Qualifier("mainDiscountPolicy")
	public @interface MainDiscountPolicy {
	}
	```
- ```java
	@Component
	@MainDiscountPolicy
	public class RateDiscountPolicy implements DiscountPolicy {}
- ```java
	//생성자 자동 주입
	@Autowired
	public OrderServiceImpl(MemberRepository memberRepository,
	 @MainDiscountPolicy DiscountPolicy discountPolicy) {
	 this.memberRepository = memberRepository;
	 this.discountPolicy = discountPolicy;
	}
	```
- 애노테이션에는 상속개념이 없음
- 여러 애노테이션을 모아서 사용하는 기능은 스프맅이 지원해주는 기능임
- `@Qulifier` 뿐만 아니라 다른 애노테이션들도 함께 조합해서 사용할 수 있음
- 스프링이 제공하는 기능을 뚜렷한 목적 없이 무분별하게 재정의하는 것은 유지보수에 혼란만 가중할 수 있음

## 조회 빈이 모두 필요할 때, `List`, `Map`
- 해당 타입의 스프링 빈이 모두 필요한 경우가 있음
- 할인서비스 제공시, 클라이언트가 할인의 종류(rate, fix)를 선택할 수 있다고 가정시 빈이 모두 필요
- 스프링을 사용하면 소위 말하는 전략 패턴을 매우 간단하게 구현 가능
- ```java
	public class AllBeanTest {
		 @Test
		 void findAllBean() {
			 ApplicationContext ac = new
			AnnotationConfigApplicationContext(AutoAppConfig.class, DiscountService.class);
			 DiscountService discountService = ac.getBean(DiscountService.class);
			 Member member = new Member(1L, "userA", Grade.VIP);
			 int discountPrice = discountService.discount(member, 10000,
			"fixDiscountPolicy");
			 assertThat(discountService).isInstanceOf(DiscountService.class);
			 assertThat(discountPrice).isEqualTo(1000);
		 }
		 static class DiscountService {
			 private final Map<String, DiscountPolicy> policyMap;
			 private final List<DiscountPolicy> policies;
			 public DiscountService(Map<String, DiscountPolicy> policyMap,
			 List<DiscountPolicy> policies) {
				 this.policyMap = policyMap;
				 this.policies = policies;
				 System.out.println("policyMap = " + policyMap);
				 System.out.println("policies = " + policies);
		 	}
			 public int discount(Member member, int price, String discountCode) {
				 DiscountPolicy discountPolicy = policyMap.get(discountCode);
				 System.out.println("discountCode = " + discountCode);
				 System.out.println("discountPolicy = " + discountPolicy);
				 return discountPolicy.discount(member, price);
		 	}
		 }
	}
	```
#### 로직 분석
- `DiscountService`는 `Map`으 로 모든 `DiscountPolicy`를 주입받음`(fixDiscountPolicy ,rateDiscountPolicy)`
- `discount()` 메서드는 `discountCode`로 `fixDiscountPolicy`가 넘어오면 `map`에서`fixDiscountPolicy`스프링 빈을 찾아서 실행

#### 주입 분석
###### `Map<String, DiscountPolicy>`
- `map`의 키에 스프링 빈의 이름을 넣어주고, 그 값으로 `DiscountPolicy` 타입으로 조회한 모든 스프링 빈을 넣음
###### `List<DiscountPolicy>`
- `DiscountPolicy` 타입으로 조회한 모든 스프링 빈을 넣음
- 해당하는 타입의 스프링 빈이 없으면, 빈 컬렉션이나 `Map`을 주입

### 스프링 컨테이너를 생성하면서 스프링 빈 등록하기
- 스프링 컨테이너는 생성자에 클래스 정보를 받음
- 클래스 정보를 넘기면 해당 클래스가 스프링빈으로 자동 등록
##### `new AnnotationConfigApplicationContext(AutoAppConfig.class,DiscountService.class);`
- `new AnnotationConfigApplicationContext()`를 통해 스프링 컨테이너를 생성
- `AutoAppConfig.class , DiscountService.class`를 파라미터로 넘기면서 해당 클래스를 자동으로 스프링 빈으로 등록

### 자동, 수동의 올바른 실무 운영 기준
- 편리한 자동 기능을 기본으로 사용하자
- 직접 등록하는 기술 지원 객체는 수동 등록
- 다형성을 적극 활용하는 비즈니스 로직은 수동 등록을 고민해보기

##### 편리한 자동 기능을 기본으로 사용
- 스프링이 나오고 시간이 갈수록 자동을 선호하는 추세
- 스프링은 `@Component`뿐만 아니라, `@Controller` , `@Service` , `@Repository`처럼 계층에 맞추어 일반적인 애플리케이션 로직을 자동으로 스캔할 수 있도록 지원
- 또한 최근 스프링 부트는 컴포넌트스캔을 기본으로 사용하고, 스프링 부트의 다양한 스프링 빈들도 조건이 맞으면 자동으로 등록하도록 설계함
- 설정 정보를 기반으로 애플리케이션을 구성하는 부분과 실제 동작하는 부분을 명확하게 나누는 것이
이상적이지만,개발자 입장에서 스프링 빈을 하나 등록할 때 `@Component`를 작성하면 끝나는 작업들을 `@Configuration`설정 정보에 가서 `@Bean`을 적고, 객체를 생성하고, 주입할 대상을 일일이 적어주는 과정은 상당히 번거롭고, 관리할 빈이 많으면 관리하는데 어려움
- 또한 자동 빈 등록을 사용해도 `OCP`, `DIP`를 지킬 수 있음

### 애플리케이션
- 애플리케이션은 크게 업무 로직과 기술지원 로직으로 나뉨 
##### 업무 로직 빈
- 웹을 지원하는 컨트롤러, 핵심 비즈니스 로직이 있는 서비스, 데이터 계층의 로직을 처리하는 리포지토리등이 모두 업무 로직임
- 보통 비즈니스 요구사항을 개발할 때 추가되거나 변경됨
##### 기술 지원 빈
- 기술적인 문제나 공통 관심사(AOP)를 처리할 때 주로 사용됨
- `DB`연결이나, 공통 로그 처리 처럼 업무 로직을 지원하기 위한 하부기술이나 공통 기술들


#### 수동 빈 등록 사용할 상황
- 업무 로직은 숫자도 많고, 한번 개발해야 하면 컨트롤러, 서비스, 리포지토리 처럼 어느정도 유사한패턴이 있음
- 이런 경우 보통 문제가 발생해도 어떤 곳에서 문제가발생했는지 명확하게 파악하기 쉽기 때문에, 자동 기능을 적극 사용하는 것이 좋음
- 기술 지원 로직은 업무 로직과 비교해서 그 수가 매우 적고, 보통 애플리케이션 전반에 걸쳐서 광범위하게 영향을 미침
- 업무 로직은 문제가 발생했을 때 어디가 문제인지 명확하게 잘 드러나지만, 기술 지원 로직은 적용이 잘 되고 있는지 아닌지 조차 파악하기 어려운 경우가 많음
- 따라서, 기술 지원 로직들은 가급적 수동 빈 등록을 사용해서 명확하게 드러내는 것이 좋음
- 애플리케이션에 광범위하게 영향을 미치는 기술 지원 객체는 수동 빈으로 등록해서, 설정 정보에 바로 나타나게 하는 것이 유지보수 하기 좋음

#### 비즈니스 로직 중에서 다형성을 적극 활용할 때
- 의존관계 자동 주입 - 조회한 빈이 모두 필요할 때, `List`, `Map`
- `DiscountService`가 의존관계 자동 주입으로 `Map<String, DiscountPolicy>`에 주입을 받을 때, 어떤 빈들이 주입될 지, 각 빈들의 이름은 무엇일지 코드만 보고 한번에 쉽게 파악할 수 없음
- 자동 등록을 사용하고 있기 때문에 파악하려면 여러 코드를 찾아봐야 함
	- 이런 경우 수동 빈으로 등록하거나 또는 자동으로하면 특정 패키지에 같이 묶어두는게 좋음
	- 한눈에 파악이 가능해야하도록 하는것이 좋음

#### 스프링과 스프링 부트가 자동으로 등록하는 수 많은 빈들은 예외
- 스프링 자체를 잘 이해하고 스프링의 의도대로 잘 사용하는게 중요함
- 스프링 부트의 경우 `DataSource`같은 데이터베이스 연결에 사용하는 기술 지원 로직까지 내부에서 자동으로 등록하는데, 이런 부분은 메뉴얼을 잘 참고해서 스프링 부트가 의도한 대로 편리하게 사용하면 됨
- 반면에 스프링 부트가 아니라 내가 직접 기술 지원 객체를 스프링 빈으로 등록한다면 수동으로 등록해서 명확하게 드러내는 것이 좋음





