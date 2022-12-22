# 스프링 입문

## IntelliJ Gradle 대신에 자바 직접 실행
- 최신 IntelliJ 버전은 Gradle을 통해서 실행 하는 것이 기본 설정
- 자바로 변경하여 실행하면 실행속도가 더 빠름
- Preferences- Build, Execution, Deployment -Build Tools Gradle
- Build and run using: Gradle- IntelliJ IDEA
- Run tests using: Gradle- IntelliJ IDEA

### 스프링 부트 라이브러리 
**spring-boot-starter-web**

- spring-boot-starter-tomcat 톰캣(웹서버)
- spring-webmvc 스프링 웹 MVC

**spring-boot-starter-thymeleaf 타임리프 템플릿 엔진(View)**

**spring-boot-starter(공통): 스프링 부트 + 스프링 코어 + 로깅**

- spring-boot
	- spring-core
- spring-boot-starter-logging
	- logback, slf4j

### 테스트 라이브러리 
**spring-boot-starter-test**

- juint: 테스트 프레임워크
- mockito: 목 라이브러리
- assertj: 테스트 코드를 좀 더 편하게 작성하게 도와주는 라이브러리
- spring-test: 스프링 통합 테스트지원

### View 환경설정

##### Welcome Page 만들기
- resources/static/index.html이 초기 페이지로 나타남
- ```html
  <html>
	  <head>
		   <title>Hello</title>
		   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	  </head>
	  <body>
		  Hello
		  <a href="/hello">hello</a>
	  </body>
  </html>
  ```


**controller/HelloController**
- ```java
  @Controller
  public class HelloController {
	   @GetMapping("hello")
	   public String hello(Model model) {
		   model.addAttribute("data", "hello!!");
		   return "hello";
	   }
  }
  ```
- 요청 경로를 보고 이를 애플리케이션에 정의된 매핑(예: @GetMapping컨트롤러 메서드의 주석)과 일치시켜 들어오는 HTTP 요청을 핸들러에 매핑

### thymeleaf 템플릿 엔진 사용

**resources/templates/hello.html**
- ```html
  <!DOCTYPE HTML>
  <html xmlns:th="http://www.thymeleaf.org">
	  <head>
		   <title>Hello</title>
		   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	  </head>
	  <body>
		  <p th:text="'안녕하세요. ' + ${data}" >안녕하세요. 손님</p>
	  </body>
  </html>
  ```

### 동작 과정
- 컨트롤러에서 리턴 값으로 문자를 반환하면 뷰 리졸버(viewResolver)가 화면을 찾아서 처리
- 스프링 부트 템플릿엔진 기본 ViewName 매핑
- resources:templates/ +{ViewName} +.html

###### 스프링 웹 개발 기초
- **정적 컨텐츠**
- **MVC와 템플릿 엔진(동적 컨텐츠)**
- **API(디바이스 종류와 상관없이 공통으로 데이터 처리)**
###### 정적 컨텐츠
- 기본적으로 resources/static/ 위치에서 사용
- 웹브라우저로부터 요청이 들어오면 내장 톰캣 서버가 이를 스프링 컨테이너에 넘김
- 관련된 컨트롤러를 찾고 없다면,  resources/static/ 위치에서 찾아서 넘김

**MVC와 템플릿 엔진**

- MVC: Model, View, Controller

**View**

- 화면을 그리는 데 집중


**Controller**

- 비즈니스 로직이나 내부적인 처리하는데 집중

**Model**

- 화면에 필요한 것들을 담아 View에 넘겨줌

**Controller**
- ```java
  @Controller
  public class HelloController {
	   @GetMapping("hello-mvc")
	   public String helloMvc(@RequestParam("name") String name, Model model) {
		   model.addAttribute("name", name);
		   return "hello-template";
	   }
  }
  ```
- hello-mvc에 요청된 파라미터 name 값을 String name으로 받아 만들어진 모델을 view(viewResolver)로 전달  hello-mvc?name=요청 값

**View**

resources/template/hello-template.html
- ```html
  <html xmlns:th="http://www.thymeleaf.org">
  <body>
	  <p th:text="'hello ' + ${name}">hello! empty</p>
  </body>
  ```
- Thymeleaf 템플릿 엔진 처리하여 html로 변환 후 웹브라우저에 전달
- hello! empty: 서버 없이 html을 만들어서 작업할 때 볼 수 있게 작성하는것
- 실제 서버가 작동하면  hello! empty값이 'hello ' + ${name}값으로 바뀜

**API**

###### @ResponseBody 문자 반환
- ```java
	@Controller
	public class HelloController {
		 @GetMapping("hello-string")
		 @ResponseBody
		 public String helloString(@RequestParam("name") String name) {
			 return "hello " + name;
		 }
	}
	```
- @RespondseBody를 사용하면 viewResolver를 사용하지 않고 HTTP의 BODY에 문자 내용을 직접 반환(HTML BODY TAG가 아님)

###### @ResponseBody 객체 반환

- ```java
	@Controller
	public class HelloController {
		 @GetMapping("hello-api")
		 @ResponseBody
		 public Hello helloApi(@RequestParam("name") String name) {
			 Hello hello = new Hello();
			 hello.setName(name);
			 return hello;
	 	}
		 static class Hello {
			 private String name;
			 public String getName() {
			 return name;
		 	}
			 public void setName(String name) {
				 this.name = name;
			 }
		 }
	}
	```
- @ResponseBody 를 사용하고, 객체를 반환하면 객체가 JSON으로 변환됨

##### @ResponseBody 사용원리
- @ResponseBody를 사용하면 HTTP의 BODY에 문자 내용을 직접 반환
- 웹브라우저 요청이 들어오면 톰캣서버가 스프링 컨테이너에 넘기고 컨트롤러에 있고 @ResponseBody가 있을때 viewResolver 대신에 HttpMessageConverter 가 동작
- 기본 문자처리: StringHttpMessageConverter 가 동작
- 기본 객체처리: MappingJackson2HttpMessageConverter 가 동작하여 json으로 변환 후 웹 브라우저에 전달됨
- byte 처리 등등 기타 여러 HttpMessageConverter가 기본으로 등록되어 있음

#### 회원 관리 예제 - 백엔드 개발
- 비즈니스 요구상항 정리
- 회원 도메인과 리포지토리 만들기
- 회원 리포지토리 테스트 케이스 작성
- 회원 서비스 개발
- 회원 서비스 테스트

##### 비즈니스 요구사항 정리
- 데이터: 회원ID, 이름
- 기능: 회원 등록, 조회
- 데이터 저장소가 선정되지 않음(가상의 시나리오)

##### 일반적인 웹 애플리케이션 계층 구조
- 컨트롤러-> 서비스->리포지토리->db
- 컨트롤러-> 도메인
- 서비스 -> 도메인
- 리포지토리 -> 도메인

##### 컨트롤러
- 웹 MVC 컨트롤러 역할
##### 서비스
- 핵심 비즈니스 로직 구현
##### 리포지토리 
- 데이터베이스에 접근, 도메인 객체를 DB에 저장하고 관리
##### 도메인
- 비즈니스 도메인 객체 ex) 회원, 주문, 쿠폰 등등 주로 데이터베이스에 저장하고 관리됨

#### 클래스 의존관계
MemberService-> (interface)MemberRepository <- MemoryMemberRepository
- 아직 데이터 저장소가 선정되지 않아서, 우선 인터페이스로 구현클래스를 변경할 수 있도록 설계
- 데이터 저장소는 RDB, NoSQL 등등 다양한 저장소를 고민중인 상황으로 가정
- 개발을 진행하기 위해서 초기 개발 단계에서는 구현체로 가벼운 메모리 기반의 데이터 저장소 사용

#### 회원 도메인과 리포지토리 만들기
- 회원 객체
- domain/Member
- ```java
	package hello.hellospring.domain;
	public class Member {

		 private Long id;
		 private String name;
		 public Long getId() {
			return id;
		 }
		 public void setId(Long id) {
		 	this.id = id;
		 }
		 public String getName() {
		 	return name;
		 }
		 public void setName(String name) {
		 	this.name = name;
		 }
	}
	```

#### 회원 리포지토리 인터페이스
- repository/MemberRepository
- ```java
	package hello.hellospring.repository;
	import hello.hellospring.domain.Member;
	import java.util.List;
	import java.util.Optional;
	public interface MemberRepository {
		 Member save(Member member);
		 Optional<Member> findById(Long id);
		 Optional<Member> findByName(String name);
		 List<Member> findAll();
	}
	```

#### 회원 리포지토리 메모리 구현체
- ```java
	package hello.hellospring.repository;
	import hello.hellospring.domain.Member;
	import java.util.*;
	/**
	 * 동시성 문제가 고려되어 있지 않음, 실무에서는 ConcurrentHashMap, AtomicLong 사용 고려
	 */
	public class MemoryMemberRepository implements MemberRepository {
		 private static Map<Long, Member> store = new HashMap<>();
		 private static long sequence = 0L;
		 @Override
		 public Member save(Member member) {
			 member.setId(++sequence);
			 store.put(member.getId(), member);
			 return member;
		 }
		 @Override
		 public Optional<Member> findById(Long id) {
			 return Optional.ofNullable(store.get(id));
		 }
		 @Override
		 public List<Member> findAll() {
		 	return new ArrayList<>(store.values());
		 }
		 @Override
		 public Optional<Member> findByName(String name) {
		 	return store.values().stream()
		 	.filter(member -> member.getName().equals(name))
		 	.findAny();
		 }
		 public void clearStore() {
		 	store.clear();
		 }
	}
	```
#### 회원 리포지토리 테스트 케이스 작성
- 이전에는 개발한 기능을 실행해서 테스트할 때, 자바의 main 메서드를 통해 실행하거나, 웹 애플리케이션의 컨트롤러를 통해서 해당 기능을 실행
- 이러한 방법은 준비하고 실행하는데 오래 걸리고, 반복 실행하기 어렵고 여러 테스트를 한번에 실행하기 어려움
- 자바는 **JUnit**이라는 프레임워크로 테스트를 실행해서 이러한 문제를 해결
#### 회원 리포지토리 메모리 구현체 테스트
- src/test/java하위 폴더에 생성
- ```java
	class MemoryMemberRepositoryTest {
		 MemoryMemberRepository repository = new MemoryMemberRepository();
		 @AfterEach
		 public void afterEach() {
		 	repository.clearStore();
		 }
		 @Test
		 public void save() {
			 //given
			 Member member = new Member();
			 member.setName("spring");
			 //when
			 repository.save(member);
			 //then
			 Member result = repository.findById(member.getId()).get();
			 assertThat(result).isEqualTo(member);
		 }
		 @Test
		 public void findByName() {
			 //given
			 Member member1 = new Member();
			 member1.setName("spring1");
			 repository.save(member1);
			 Member member2 = new Member();
			 member2.setName("spring2");
			 repository.save(member2);
			 //when
			 Member result = repository.findByName("spring1").get();
			 //then
			 assertThat(result).isEqualTo(member1);
		 }
		 @Test
		 public void findAll() {
			 //given
			 Member member1 = new Member();
			 member1.setName("spring1");
			 repository.save(member1);
			 Member member2 = new Member();
			 member2.setName("spring2");
			 repository.save(member2);
			 //when
			 List<Member> result = repository.findAll();
			 //then
			 assertThat(result.size()).isEqualTo(2);
		 }
	}
	```
#### @AfterEach
- 한번에 여러 테스트를 실행하면 메모리 DB에 직접 테스트의 결과가 남을 수 있음
- 다음 이전 테스트 때문에 다음 테스트가 실패할 가능성이 있음
- **@AfterEach**를 활용하여 테스트 종료 시 기능을 설정하여 실행함
- 여기서는 메모리 DB에 저장된 데이터를 삭제
- 테스트는 각각 독립적으로 실행되어야함
- **테스트 순서에 의존관계가 있는 것은 좋은 테스트가 아님**

#### 회원 서비스 개발
- ```java
	public class MemberService {
		 private final MemberRepository memberRepository = new
		 MemoryMemberRepository();
		 /**
		 * 회원가입
		 */
		 public Long join(Member member) {
			 validateDuplicateMember(member); //중복 회원 검증
			 memberRepository.save(member);
			 return member.getId();
		 }
		 private void validateDuplicateMember(Member member) {
			 memberRepository.findByName(member.getName())
			 .ifPresent(m -> {
			 throw new IllegalStateException("이미 존재하는 회원입니다.");
			 });
		 }
		 /**
		 * 전체 회원 조회
		 */
		 public List<Member> findMembers() {
			 return memberRepository.findAll();
			 }
			 public Optional<Member> findOne(Long memberId) {
			 return memberRepository.findById(memberId);
		 }
	}
	```
#### 회원 서비스 테스트
- 기존에는 회원 서비스가 메모리 회원 리포지토리를 직접 생성
- 회원 리포지토리의 코드가 회원 서비스 코드를 DI 가능하게 변경
- ```java
	public class MemberService {
		 private final MemberRepository memberRepository;
		 public MemberService(MemberRepository memberRepository) {
			 this.memberRepository = memberRepository;
		 }
		 ...
	}
	```

#### 회원 서비스 테스트
- ```java
	class MemberServiceTest {
		 MemberService memberService;
		 MemoryMemberRepository memberRepository;
		 @BeforeEach
		 public void beforeEach() {
			 memberRepository = new MemoryMemberRepository();
			 memberService = new MemberService(memberRepository);
		 }
		 @AfterEach
		 public void afterEach() {
			 memberRepository.clearStore();
		 }
		 @Test
		 public void 회원가입() throws Exception {
			 //Given
			 Member member = new Member();
			 member.setName("hello");
			 //When
			 Long saveId = memberService.join(member);
			 //Then
			 Member findMember = memberRepository.findById(saveId).get();
			 assertEquals(member.getName(), findMember.getName());
		 }
		 @Test
		 public void 중복_회원_예외() throws Exception {
			 //Given
			 Member member1 = new Member();
			 member1.setName("spring");
			 Member member2 = new Member();
			 member2.setName("spring");
			 //When
			 memberService.join(member1);
			 IllegalStateException e = assertThrows(IllegalStateException.class,
			 () -> memberService.join(member2));//예외가 발생해야 한다.
			 assertThat(e.getMessage()).isEqualTo("이미 존재하는 회원입니다.");
		 }
	}
##### assertThrows(예외 클래스, 예외 발생문)
- 지정된 예외 클래스가 예외 발생문에서 발생하면 성공하며 예외를 반환
##### @BefoeEach 
- 각 테스트 실행 전에 호출, 테스트가 서로 영향이 없도록 항상 새로운 객체를 생성하고, 의존관계도 새로 맺어줌
#### Test
- test 메서드 이름은 한글로 사용하는것이 더 편리
-3단계 원칙으로 테스트 코드 작성해보기
- ```
       //given
        
       //when
        
       //then
  	```
# 스프링 컨테이너의 생성과정

### 1. 스프링 컨테이너 생성
- `ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);`


##### ApplicationContext
- 스프링 컨테이너
- 인터페이스
- 구현체 중 하나가 `AnnotationConfigApplicationContext()`임
- 스프링 컨테이너는 `XML` 기반으로 만들수도 있지만, 현재는 애노테이션 기반의 자바 설정 클래스로 만듦
- 스프링 컨테이너를 부를 때 `BeanFactory`, `ApplicationContext`로 구분하지만, `BeanFactory`를 직접 사용하는 경우가 거의 없으므로, `ApplicationContext`를 스프링 컨테이너라고 함
- 스프링 컨테이너를 생성할 때는 구성정보를 지정해주어야함 `ex) AppConfig.class`

### 2. 스프링 빈 등록
- 스프링 컨테이너는 파라미터로 넘어온 설정 클래스 정보를 사용해서 스프링 빈을 등록함
- 빈 이름은 메서드 이름을 사용한다.
- 빈 이름을 직접 부옇라 수 도 있음 `ex) @Bean(name="a")`
- 빈 이름은 항상 다른 이름을 부여해야함

##### 스프링 빈 저장소
- 빈 이름 + 빈 객체
- 빈 객체에는 ```@Bean```이 선언된 메서드의 반환값이 저장됨

### 3. 스프링 빈 의존관계 설정
- 스프링 컨테이너는 설정 정보를 참고해서 의존관계를 주입
- 단순히 자바 코드를 호출하는 것이 아님
- 스프링 빈을 생성하고 의존관계를 주입하는 단계가 나누어짐
- 이렇게 자바코드로 스프링 빈을 등록하면 생성자를 호출하면서 의존관계 주입도 한번에 처리됨

##### for문 자동생성
- 리스트나 배열이 있으면 ```iter```입력시 자동생성

### 컨테이너에 등록된 모든 빈 조회

- ```java
	AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(AppConfig.class);
 	@Test
 	@DisplayName("모든 빈 출력하기")
 	void findAllBean() {
 		String[] beanDefinitionNames = ac.getBeanDefinitionNames();
		for (String beanDefinitionName : beanDefinitionNames) {
 			Object bean = ac.getBean(beanDefinitionName);
 			System.out.println("name=" + beanDefinitionName + " object=" +
			bean);
 		}
 	}
	@Test
	@DisplayName("애플리케이션 빈 출력하기")
	void findApplicationBean() {
	 	String[] beanDefinitionNames = ac.getBeanDefinitionNames();
	 	for (String beanDefinitionName : beanDefinitionNames) {
			 BeanDefinition beanDefinition =
			ac.getBeanDefinition(beanDefinitionName);
			 //Role ROLE_APPLICATION: 직접 등록한 애플리케이션 빈
			 //Role ROLE_INFRASTRUCTURE: 스프링이 내부에서 사용하는 빈
			 if (beanDefinition.getRole() == BeanDefinition.ROLE_APPLICATION) {
				 Object bean = ac.getBean(beanDefinitionName);
				 System.out.println("name=" + beanDefinitionName + " object=" + bean);
		 	}
	 	}
	 }
	 ```

##### 모든 빈 출력하기
###### ac.getBeanDefinitionNames()
- 스프링에 등록된 모든 빈 이름을 조회
###### ac.getBean()
- 빈 이름으로 빈 객체(인스턴스)를 조회

##### 애플리케이션 빈 출력(사용자가 등록한 빈만 출력)
###### getRole()
- 스프링 빈을 구분할 수 있음
###### ROLE_APPLICATION
- 사용자가 정의한 빈
###### ROLE_INFRASTRUCTURE
- 스프링이 내부에서 사용하는 빈

### 스프링 빈 조회 - 기본
- 스프링 컨테이너에서 스프링 빈을 찾는 가장 기본적인 조회방법
	- `ac.getBean(빈이름, 타입)`
	- `ac.getBean(타입)`
- 조회 대상 스프링 빈이 없으면 예외 발생
	- ```NoSuchBeanDefinitionException: No bean named 'xxxxx' available```
- 구체(구현) 타입으로 조회도 가능하지만 유연성이 떨어짐
- ```java
	AnnotationConfigApplicationContext ac = new
	AnnotationConfigApplicationContext(AppConfig.class);
	 @Test
	 @DisplayName("빈 이름으로 조회")
	 void findBeanByName() {
		 MemberService memberService = ac.getBean("memberService",
		MemberService.class);
		 assertThat(memberService).isInstanceOf(MemberServiceImpl.class);
	 }
	 @Test
	 @DisplayName("이름 없이 타입만으로 조회")
	 void findBeanByType() {
		 MemberService memberService = ac.getBean(MemberService.class);
		 assertThat(memberService).isInstanceOf(MemberServiceImpl.class);
	 }
	 @Test
	 @DisplayName("구체 타입으로 조회")
	 void findBeanByName2() {
		 MemberServiceImpl memberService = ac.getBean("memberService",
		MemberServiceImpl.class);
		 assertThat(memberService).isInstanceOf(MemberServiceImpl.class);
	 }
	 @Test
	 @DisplayName("빈 이름으로 조회X")
	 void findBeanByNameX() {
		 //ac.getBean("xxxxx", MemberService.class);
		 Assertions.assertThrows(NoSuchBeanDefinitionException.class, () ->
		ac.getBean("xxxxx", MemberService.class));
	 }
	```

### 스프링 빈 조회 - 동일한 타입이 둘 이상
- 타입으로 조회시 같은 타입의 스프링 빈이 둘 이상이면 오류발생 -> 빈 이름 지정

##### ac.getBeansOfType()
- 해당 타입의 모든 빈을 조회 

### 스프링 빈 조회 - 상속관계
- 부모 타입으로 조회하면, 자식 타입도 함께 조회됨
- 모든 자바 객체의 최상위 부모인 `Object` 타입으로 조회하면, 모든 스프링 빈을 조회

##### BeanFactory & ApplicationContext
- `BeanFactory(interface`) <- `ApplicationContext(interface)` <- `AnnotationConfigApplicationContext`

##### BeanFactory
- 스프링 컨테이너의 최상위 인터페이스
- 스프링 빈을 관리하고 조회하는 역할을 담당
- `BeanFactory`를 직접 사용할 일은 거의 없음
- `getBean()`을 제공
- 스프링 컨테이너라고 함

##### ApplicationContext
- `BeanFactory` 기능을 모두 상속받아서 부가기능 제공
- 부가기능이 포함된 `ApplicationContext`을 사용
- 스프링 컨테이너라고 함
1.메시지소스를 활용한 국제화 기능
- 한국에서 들어오면 한국어로, 영어권에서 들어오면 영어로 출력
2. 환경변수
- 로컬, 개발, 운영등을 구분해서 처리
3. 애플리케이션 이벤트
- 이벤트를 발행하고 구독하는 모델을 편리하게 지원
4. 편리한 리소스 조회
- 파일, 클래스패스, 외부등에서 리소스를 편리하게 조회

### 다양한 설정 형식 지원 - 자바 코드, XML
- 스프링 컨테이너는 다양한 형식의 설정 정보를 받아드릴 수 있게 유연하게 설계되어 있음
- 자바코드, XML, Groovy 등

##### 애노테이션 기반 자바 코드 설정 사용
- `AnnotationConfigApplicationContext` 클래스를 사용하면서 자바 코드로된 설정 정보를 넘기면 됨

##### XML 설정 사용
- 스프링 부트를 많이 사용하면서 `XML` 기반의 설정은 잘 사용x
- 아직 많은 레거시 프로젝트들이 `XML`로 되어있음
- `XML`은 컴파일 없이 빈 설정 정보를 변경할 수 있는 장점이 있음
- `GennericXmlApplicationContext`를 사용하면서 `xml`설정 파일을 넘기면 됨
- `xml` 설정정보와 `java`코드로된 설정정보가 거의 비슷함

### 스프링 빈 설정 메타 정보 - `BeanDefinition`
- **스프링이 다양한 설정 형식을 지원하는 것은 BeanDefinition이라는 추상화가 있기 때문임**
- 역할과 구현을 개념적으로 나눈것
	- `xml`을 읽어 `BeanDefinition` 을 만듦
	- 자바코드를 읽어 `BeanDefinition` 을 만듦
	- 스프링 컨테이너는 자바코드인지, `xml`인지 몰라도 되고, 오직 `BeanDefinition`만 알면 됨
- 스프링 컨테이너는 `BeanDefinition`에만 의존
- `AnnotationConfigApplicationContext`는 `AnnotatedBeanDefinitionReader`를 사용해서 `AppConfig.class` 를 읽고 `BeanDefinition` 을 생성
- `GenericXmlApplicationContext`는 `XmlBeanDefinitionReader`를 사용해서 `appConfig.xml` 설정
정보를 읽고 `BeanDefinition` 을 생성
- 새로운 형식의 설정 정보가 추가되면, `XxxBeanDefinitionReader`를 만들어서 `BeanDefinition` 을
생성하면됨

### BeanDefinition
- 빈 설정 메타정보
- `@Bean`, `<bean>`당 각각 하나씩 메타정보가 생성됨
- 스프링 컨테이너는 이 메타정보를 기반으로 스프링 빈을 생성함
- `BeanDefinition`을 직접 생성해서 스프링 컨테이너에 등록할 수 도 있음(실무에서는 거의 안함)
- 
#### BeanDefinition 정보
##### BeanClassName
- 생성할 빈의 클래스명
- 자바 설정 처럼 팩토리 역할의 빈을 사용하면 없음
##### factoryBeanName
- 팩토리 역할의 빈을 사용할 경우 이름
- ex)appConfig
##### factoryMethodName
- 빈을 생성할 팩토리 메서드 지정
- ex) memberService
##### Scope
- 싱글톤(기본값)
##### lazyInit
- 스프링 컨테이너를 생성할 때 빈을 생성하는 것이 아니라, 실제 빈을 사용할 때 까지 최대한 생성을 지연처리하는지 여부
##### InitMethodName
- 빈을 생성하고, 의존관계를 적용 후 호출되는 초기화 메서드 명
##### DestroyMethodName
- 빈의 생명주기가 끝나서 제거하기 직전에 호출되는 메서드 명
##### Constructor arguments, Properties
- 의존관계 주입에서 사용
- 자바설정 처럼 팩토리 역할의 빈을 사용하면 없음






