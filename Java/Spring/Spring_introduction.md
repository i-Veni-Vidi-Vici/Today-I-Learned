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
