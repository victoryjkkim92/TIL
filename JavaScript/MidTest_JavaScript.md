# 17.Oct.2018 수업 내용 추가

### [RGB Challenge](https://codepen.io/victoryjkkim92/pen/vVpOBW)


* JavaScript로 html에 요소 추가하는 방법

	+ DOM 객체를 만드는식 : createElement() _ ex. 할일목록 삭제할때처럼
		- 자주쓰이는 경우 : (코드 작성 시점에) 생성해야 하는 요소가 정확히 몇개인지 모를 때! React에서 자주 사용됨
	+ 스타일을 다르게 먹여서 : `display:none`; => `display:block(inline-block)`으로 변경하는 클래스 추가 _ classList.add()
		- 자주쓰이는 경우 : (코드 작성 시점에) 생성해야 하는 요소가 정확히 몇개인지 아는 경우

* 브레이크 위크 때 공부할 내용
	+ React 원리, 빌드 도구 : Webpack, parcel 
	+ autocrlf가 무엇이냐



# 10/16(화) 수업 내용 복습 퀴즈  
 
 1. 브라우저 상의 모든 이벤트는 캡처링, 버블링 단계의 전파 과정을 거친다 - 아니다, submit과 같은 이벤트는 캡처링이나 버빌링 같은 전파 과정을 거치지 않는다.
 2. 이벤트 객체의 target 속성에는 '실제로 이벤트가 일어난 요소'가, currentTarget 속성에는 '이벤트 전파 과정 중 현재 이벤트가 위치한 요소, 즉 이벤트 리스너가 등록되어 있는 요소'가 들어 있다. 
 3. 폼 요소 객체의 reset 메소드를 사용해서, 폼 내부에 들어 있는 요소들을 초기값이 채워진 상태로 되돌릴 수 있다.
 4. text 타입의 input 요소 객체의 value 속성에 값을 대입하면, 그 값이 input 태그 내부에 채워진다.
 5. HTML 폼에는 여러 가지 기능이 내장되어 있으며, 그 중 '전송 기능'은 사용자가 전송 버튼을 누르거나 폼 안에서 엔터키를 입력했을 때 동작한다.
 6. mouseover 이벤트는 마우스가 요소 위에서 움직일 때 일어난다.
 7. 첫 번째 할일 항목의 '위로' 버튼을 눌렀을 때 해당 항목이 맨 아래쪽으로 이동합니다. 이 버그가 발생하는 이유에 대해서 간단히 서술해주세요 :  The NonDocumentTypeChildNode.previousElementSibling read-only property returns the Element immediately prior to the specified one in its parent's children list, or null if the specified element is the first one in the list. / If the reference node is null, the specified node is added to the end of the list of children of the specified parent node.
 8. 마지막 할일 항목의 '아래로' 버튼을 누르면 콘솔에서 에러가 발생하는 것을 관찰할 수 있습니다. 이 에러가 발생하는 이유에 대해서 간단히 서술해주세요 : 맨 마지막에 있는 리스트의 nextElementSilbing이 null이라 그것의 nextElementSibling을 찾을 수 없어서 
 9.  mouseover / mouseout 이벤트와, mouseenter / mouseleave 이벤트의 차이점 : `mouseover`와 `mouseout`는 자식요소의 경계선을 지나쳤을 때도 부모요소의 이벤트리스너가 호출된다 (버블링이 일어난다) / `mouseenter`와 `mouseleave`은 버블링이 일어나지 않는다
 
 
# 10/11(목) 수업 내용 복습 퀴즈
 
 1. 콜백 : 다른 함수의 인수로 넘겨지는 함수를 의미하는 용어 
 2. 클로저 : 바깥 스코프에 있는 변수를 가져다 사용하는 함수 및 변수가 저장되는 저장소 모두를 일컫는다.
 3. 고차 함수 : 함수를 인수로 받는 함수, 또는 함수를 반환하는 함수를 가리키는 용어
 4. 속성 기술자(property descriptor)는 속성의 부수속성을 얻어올 때에만 사용하는 것이 아니라, 직접 속성 기술자를 가지고 속성을 정의할 수도 있다.
 5. String 객체의 length 속성의 부수속성을 알아보고 싶다. 아래와 같은 속성기술자를 결과값으로 얻기 위해 빈칸에 들어갈 정적 메소드로 알맞은 것을 적어 주세요. 
 
 ```js
 Object.getOwnPropertyDescriptor(String, 'length')
 // { value:1,
 writable : false,
 enumerable: false,
 configurable:true}
 ```
 
6. 재귀함수는 주로 '어떤 문제를 같은 형태의 부분 문제로 쪼갤 수 있는 경우'에 사용된다. 
7. in 연산자를 통해서는 원래 객체가 가진 속성과 상속받은 속성을 구분할 수 없고, 모두 true를 반환합니다.
8. 어떤 속성의 writable 부수속성이 false이면, 이 속성은 삭제할 수 없다.
9. 어떤 속성이 만들어지고 난 뒤에는 해당 속성의 부수속성을 변경할 수 없다. 
10. JavaScript에서는 객체의 속성값을 읽어오거나 속성에 값을 대입하기만 해도 함수가 호출될 가능성이 있다.
11. Object.assign 정적 메소드는 객체를 복사하는데 사용되며, 중첩된 객체도 문제없이 복사하는 기능을 가지고 있다. 
12. JavaScript에는 특정 객체에 더 이상 속성을 추가할 수 없도록 막아버리는 함수가 있다.
13. Math 객체의 Math.PI 속성을 삭제하려고 하면, 엄격모드에서는 에러가 나지만 엄격모드가 아닐 때에는 에러가 나지 않는다.

# 10/10 (수) 수업 내용 복습 퀴즈

1. 함수를 호출할 때, 인수의 개수는 매개변수의 개수와 반드시 같지 않아도 괜찮다
2. 전역 변수는 되도록 사용하지 않는 것이 좋다.
3. 함수 매개변수는 var 변수와 유사하게, 함수 스코프를 가진다. 
4. var 변수는 함수 스코프를 갖고, let 변수는 블록 스코프를 갖는다.
5. var 변수로 선언한 전역 변수는 전역 객체의 속성이 된다.
6. 자바스크립트의 타입으로 알맞지 않은 것은? Function, Variable, Array
7. 다음 중 원시타입(primitive)인 것은 무엇인가요? Boolean, Number, String, Symbol
8. 참조타입인것은? Object
9. 원시 타입의 메소드 중, 원본을 변경할 수 있는 것은 존재하지 않는다
10. 화살표 함수 내부의 this는 바꿀 수 없다
11. function 키워드를 통해 정의된 함수 내부의 this는 함수가 어떻게 호출되었는지에 따라 결정되고, 화살표 함수 내부의 this는 함수가 어떻게 정의 되었는지에 따라 결정된다.
12. ES5 미만 버전에서 개발자가 자주 하기 쉬운 문법에 제약사항을 추가시킬 수 있는 방법으로는 엄격 모드를 활성화하는 것이 있다
13. 변수를 명시적으로 전역 스코프에서 선언하지 않더라도, 한 번도 선언되지 않은 이름으로 안쪽 스코프에서 let, const, var를 붙여주지 않고 변수를 선언하면 전역 스코프에 변수가 만들어지므로 이를 주의해야 한다
14. bind, call, apply 메소드 사용하기
 
 ```js
 function printGrade(grade){ 
console.log(`${this.name} 님의 점수는 ${grade}점입니다.`);
const student = {name: 'Mary'}
//call메소드 사용
printGrade.call(student,100) // Mary님의 점수는 100점입니다.
//bind메소드 사용
const printGradeFormary = printGrade.bind(student);
printGradeForMary(100) // Mary님의 점수는 100점입니다.
//apply메소드 사용
printGrade.apply(student,[100]); // Mary님의 점수는 100점입니다.
```

15. 화살표 함수에는 prototype속성이 들어 있지 않다 
16. const 키워드를 사용해 변수를 만들어 재대입이 불가능한 경우라도 해도 가변일 수 있다
17. 매개변수의 기본값 사용

	```js
	function hello(name = 'Mary'){
	console.log(`Hello, ${name}!`);
	}

	hello('John'); // Hello, John!
	hello(); // Hello, Mary!
	hello(undefined) // Hello, Mary!
	``` 

18. 객체의 속성 값에 메소드를 직접 정의할 때에는 화살표 함수를 사용하는 것은 좋지 않다

# 10월 5일 (금) 수업 내용 복습 퀴즈

1. 배열에 관련된 메소드
	* fill : 원본 배열을 수정, 배열을 채울 때
	* reverse : 원본 배열을 수정, 배열을 반대로 정렬할 때
	* sort : 원본 배열을 수정, 배열을 정렬할 때
	* unshift, shift : 원본 배열을 수정, 배열 앞쪽의 요소를 추가하거나 제거할 때
	* push, pop : 원본 배열을 수정, 배열 뒤쪽의 요소를 추가하거나 제거할 때
	* concat : 사본을 반환할 뿐 원본은 수정 안함, 여러 요소를 배열의 마지막에 추가 할 때
	* slice : 사본을 반환할 뿐 원본은 수정 안함, 배열이 일부가 필요할 때 
2. 아래 코드를 실행했을 때, arr.indexOf('z')의 반환값은?

	```js
	const arr = ['a', 'b', 'c', 'b', 'a'];
	arr.indexOf('z'); // 반환값 -1
	```

3. 아래는 뱀게임 실습 코드 중 일부다. fruit의 좌표가 snakeJoints의 좌표와 같은 객체가 있는지를 확인하고자 한다. 아래 빈칸에 알맞은 배열 메소드는 무엇일까?

	```js
	const snakeJoints = [
		{ x : 3, y : 0 },
		{ x : 2, y : 0 },
		{ x : 1, y : 0 },
		{ x : 0, y : 0 },
	]
	
	const fruit = { x : 3, y : 0 }
	
	snakeJoints,_____(j => j.x === fruit.x && j.y === fruit.y)
	``` 

4. 10보다 크고 50보다 작은 임의의 수를 랜덤으로 반환하는 코드를 Math.random() 메소드 사용

	```js
	Math.floor(Math.random()*50-10) + 10
	```

5. 함수를 선언할 때 꼭 이름을 붙여주어야 하는 것은 아니다
6. 생성자의 prototype 속성에 자동 생성되는 객체에는 constructor라는 속성이 들어 있고, 이 속성에는 생성자 자신이 저장된다.
7. 어떤 객체의 속성을 변경하거나 속성을 삭제하는 작업은 그 객체의 프로토타입에 아무런 영향을 미치지 않는다.
8. 접근하고자 하는 속성 이름을 사용자로부터 입력 받기 때문에 코드 작성 시점에 알 수 없는 경우에는 대괄호 표기법을 사용해 객체의 속성에 접근하는 것이 좋다. 

# 10월 4일 (목) 수업 내용 복습 퀴즈

1. 여러 개의 비슷한 객체가 공통으로 사용하는 속성과 메소드를 중복해서 저장하는 것은 저장공간을 낭비하는 일이다. 
2. 프로토타입 상속 : 프로토타입 기능을 이용해 한 객체에서 다른 객체의 기능을 가져와 사용하는 것
3. Object.create 정적 메소드를 사용해서, 새 객체를 생성하며 그에 대한 프로토타입을 지정해줄 수 있다
4. 객체 리터럴을 통해 생성된 객체의 프로토타입으로 Object.prototype이 자동 지정된다
5. 자식 객체의 속성에 값을 대입하는 작업은 프로토타입 객체의 속성에는 영향을 미치지 않는다
6. 속성 가리기(property shadowing) 현상이 나타나는 이유는, 속성에 접근할 때 프로토타입 체인의 하위(자식)에서부터 체인을 따라 올라가며 속성을 탐색하기 때문이다
7. 프로토타입을 명시적으로 null로 지정하지 않아도, 언젠가는 프로토타입이 null인 객체를 만나게 된다. 즉, 프로토타입 체인은 끝나게 되어있다
8. 배열의 push, slice, map, filter 메소드는 모두 Array.prototype 객체의 속성에 저장되어 있다
9. 정적 메소드 : 생성자의 속성에 직접 지정된 메소드를 부르는 이름으로, 특정 인스턴스에 대한 작업이 아니라 해당 생성자와 관련된 일반적인 작업을 정의하고 싶을 때 사용한다. Number.isNaN, Object.getPropertyOf 등의 함수도 이에 해당한다
10. 함수 역시 객체이므로 속성을 가질 수 있다
11. this 키워드는 메소드가 어떻게 사용되는가에 따르는 것이 아니고, 메소드가 어떻게 정의되는지에 따라 결정된다
12. 배열의 프로토타입에는 Array.prototype이, Array.prototype의 프로토타입에는 Object.prototype이, Object.prototype의 프로토타입에는 null이 지정되어있다
13. 객체의 속성 접근자를 통해 그 객체의 프로토타입의 속성을 변경할 수 없다

# 10월 2일 (화) 수업 내용 복습 퀴즈

1. 객체 안에는 이름-값 쌍이 저장될 수 있으며, 이를 객체의 속성(property)이라고 한다
2. 생성자 내에서 this 키워드를 사용해서 현재 생성중인 객체의 속성을 지정해줄 수 있다
3. [배열 메소드 문제] 배열 내에서 한꺼번에 많은 요소를 같은 값으로 바꾸어 버리고 싶다. 어떤 메소드를 쓰면 될까? => fill메소드
4. 어떤 객체의 속성으로 접근해서 사용하는 함수 : 메소드
5. 배열에는 순서가 없고, 객체에는 순서가 있다
6. 문자열 값 'hello'를 배열에 알파벳으로 쪼개어 저장하고 싶다. (["h", "e", "l", "l", "o"]) 가능한 방법 중 하나를 코드로 적어 보시오

	```js
	Array.from('hello');
	'hello'.split('')
	Array.from('hello')
	'hello'.split('');
	[...'hello']
	[..."hello"]
	'hello'.split("")
	```

7. [배열 메소드 문제] 배열 let arr = [1, 2, 3, 4, 5]; 에서, 2부터 4까지의 숫자를 각각 'two', 'three', 'four'로 바꾸고 싶다. 적절한 메소드를 사용하여 바꿔치기해 보아라.

	```js
	arr.splice(1, 3, 'two', 'three', 'four')
	arr.splice(1, 3, 'two', 'three', 'four');
	arr.splice(1,3,'two','three','four');
	```

8. [배열 메소드 문제] 배열의 앞부분에서 요소를 추가하고 싶다. 어떤 메소드를 쓰면 될까?

	```js
	unshift
	.unshift()
	Array.prototype.unshift()
	unshift()
	unshift();
	```

9. 원본 메소드에 영향을 미치지 않는 메소드는?

	* map
	* slice
	* filter
	* join
	* concat

10. 생성자는 객체를 만들 때 사용하는 함수이다
11. 생성자를 통해 생성된 객체를 그 생성자의 인스턴스라고 한다
12. 객체의 속성 값으로 함수를 지정 할 수 있다


# 10월 1일 (월) 수업 내용 복습 퀴즈

* 개행 문자로 맥과 리눅스에서는 (Line Feed (\n) )이(가) 사용되고, 윈도우에서는 (Carage Return + Line Feed(\r\n))이(가) 사용된다
* 반올림 오차 때문에, number 타입을 통해 십진수 소수까지 정확하게 표현할 수는 없다
* string타입을 number 타입으로 변환하기 위한 함수 : parseInt, parseFloat
* 16진수 두 자리 수는 8bit, 즉 1byte
* 변수 a, b에 대하여, 두 식 !(a && b) 와 !a || !b 의 결과값은 항상 같다 _ 드모르간 법칙
* JavaScript는 값이 대입되지 않은 변수 혹은 속성을 사용하려고 하면 undefined를 반환한다
* typeof null : 'object'
* null === undefined 는 false 를 반환하지만, null == undefined 는 true 를 반환한다
* 함수를 정의하는 것만으로 함수 내부에 있는 코드가 실행되지는 않는다. 호출을 해줘야실행된다
* 함수의 매개변수는 바깥에서 선언된 변수와 관계 없는 독립적인 변수다
* 매개변수는 함수 스코프를 가진다
* 자바스크립트에서는 함수를 변수에 대입해서 호출하거나, 배열이나 객체에 넣거나, 함수를 다른 함수에 인수로 넘기는 것이 가능하다. 값으로 사용가능한 자바스크립트의 함수는 1급 시민이라고 한다. (1급 함수, 1급 객체, 일급함수, 일급 시민, 일급 객체)
* 초기값을 정할 수 있고 갱신을 위한 코드가 짧은 경우에는 for 구문을, 그렇지 않은 경우에는 while 구문을 사용한다면 코드를 깔끔하게 만들 수 있다
 
# 9월 28일 (금) 수업 내용 복습 퀴즈

* ES6의 다른 이름은 ES2015로, ES2015부터는 매년 새로운 버전의 명세가 발표되고 있다
* 변수를 선언할 때, 보통의 경우 let 보다 const를 사용하는 것이 더 좋다
* 템플릿 리터럴에 대한 설명
	+ ES2015에서 도입되었다
	+ 백틱(`)으로 문자열을 둘러싸면 된다
	+ 내삽(interpolation) 기능을 이용하면 문자열을 동적으로 생성하는 코드를 쉽게 작성 할 수 있다
	+ 여러 줄로 이뤄진 문자열을 쉽게 표현할 수 있다
* 십진수 20을 이진법으로 고쳐 쓰면 10010이다
* falsy로 취급되는 값
	+ ' ' (빈 문자열)
	+ NaN
	+ false
	+ { } (빈 객체)
	+ undefined
	
+ truthy와 falsy를 활용하면 짧은 코드를 작성할 수 있지만, 코드의 의미가 불분명해지거나 논리적으로 놓치는 부분이 생길 수 있기 때문에 주의해야 한다
+ 'hello'라는 값을 boolean 타입 변환하고 싶을 때, 사용 할 수 있는 코드

	```js
	!!'hello'
	!!'hello';
	Boolean('hello');
	Boolean('hello')
	```


# 9월 27일 (월) 수업 내용 복습 퀴즈

* 값의 타입으로 적절한 것 연결하기
	+ typeof false = boolean
	+ typeof '1' = string
	+ typeof 2000001 = number
	+ typeof 'number' = string
	+ typeof undefined = undefined
	+ typeof 'true' = string
	+ typeof null = object
	+ typeof 'hello world' = string
	+ typeof 0.54 = number
* 표현식이란 JavaScript 문장의 구성 요소를 구분하는 하나의 단위로, 값으로 변환될 수 있는 부분을 가리킨다
* 변수에 대한 설명
	+ 변수란 값을 다시 사용하려고 값에 이름을 붙인 것을 말한다
	+ 변수의 선언과 값의 대입은 동시에 할 수 있다
	+ let 변수에는 값을 여러 번 다시 대입할 수 있다
	+ const 변수에는 값을 한 번만 대입할 수 있다
* 값 뿐만 아니라 코드 뭉치에도 이름을 붙여 재사용할 수 있다
* JavaScript 및 그 구동 환경에 내장되어 있는 여러 가지 함수를 사용해서 사용자와 상호작용을 하는 코드를 작성할 수 있다.
* 자바스크립트에서 쓰이는 식별자의 첫글자는 영문자, $ 또는 밑줄이어야 한다
* 예약어(const, break, this등)은 변수명으로 쓰기에 적합하지 않다
* NaN === NaN은 항상 false이다
* 어떤 값 x가 NaN임을 판별하기 위한 함수 : isNaN(x) , Number.isNaN(x), Object.is(x, NaN)




















