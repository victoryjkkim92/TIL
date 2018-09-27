# 값다루기

## 값과 리터럴

프로그래밍을 하며 가장 많이 하는 일은 값(value)을 다루는 것입니다.

프로그래밍 언어에서 값을 생성하는 가장 쉬운 방법은 리터럴(literal)을 사용하는 것입니다. 리터럴은 값의 표기법으로, 프로그래밍 언어마다 값을 표현하는 여러 가지 리터럴을 가지고 있습니다.

```js
1; // 정수 리터럴
2.5; // 부동 소수점 리터럴
'hello'; // 문자열 리터럴
true; // 진리값 리터럴
```

리터럴과 연산자(operator)를 이용해 REPL에서 간단한 계산을 할 수 있습니다.

```js
1 + 2; // 3
3 * 4; // 12
'hello' + 'world'; // 'helloworld'
true || false; // true
```

여러 연산자에 대한 자세한 사용법은 이어지는 챕터에서 다룹니다.


## 변수 (Variable)
값을 한 번 생성한 뒤에 다시 쓰지 못한다면 아주 간단한 프로그램밖에 만들지 못할 것입니다. 그래서 프로그래밍 언어에는 대개 **값에 이름을 붙여서 다시 쓸 수 있게 만드는 기능**이 존재합니다. JavaScript에서는 여러 가지 방법을 통해 값에 이름을 붙일 수 있는데, 그 중에 두 가지를 여기서 다룹니다.

let은 변수(variable)를 선언(declare)할 때 쓰는 키워드로, ES2015에서 도입되었습니다. 변수의 사용법은 다음과 같습니다.

> Best Practice : var변수보단 let을 사용하도록 하자 (사실은 const만 사용하는 것이 가장 좋음)

###  let과 const 중 무엇을 쓸 것인가?

항상 let 보다 const를 사용하는 것이 좋습니다. let을 사용하면 의도치 않게 다른 값이 대입되어 버리는 일이 생길 수 있기 때문입니다. 정말로 재대입이 필요한 경우에만 let을 사용하는 것이 좋은 습관입니다.

	
* let 과 const

```js
let a;
a = 1;
a = 2;
	
const a;
a = 1;
a = 2;
//출력 값 : SyntaxError: Unexpected token (27:7)
// 왜? const는 재대입이 불가능! 선언과 대입을 동시에 해주어야함
	
const a = 0;
a = 1;
a = 2;
//출력 값 : SyntaxError: Assignment to constant variable: a at 34:0
	
const a = 0;
```

## 식별자

위에서 사용한 변수의 이름은 모두 식별자(Identifier)입니다. 프로그래밍 언어에서 식별자는 어떤 개체를 유일하게 식별하기 위해 사용됩니다. JavaScript 식별자는 아래와 같이 정해진 규칙에 따라 지어져야 합니다.

* 숫자, 알파벳, 달러 문자($), 언더스코어(_)가 포함될 수 있다.
* 단, 숫자로 시작되어서는 안 된다.
* 예약어(ex. for, while, if, const,등등)는 식별자가 될 수 없다.

```js
const foo; // O
const _bar123; // O
const $; // O - jQuery가 이 식별자를 사용합니다.
const 7seven; // X
const const; // X - 예약어는 식별자가 될 수 없습니다.
```

* Camel Case

식별자 이름을 지을 때 JavaScript에서 널리 사용되는 관례(convention)가 있는데, 이 관례를 Camel case라고 부릅니다. 식별자에 들어가는 각 단어의 첫 글자를 대문자로 써 주는 방식입니다.

```js
/// Camel Case
let fastCampus;
let fooBar;
```

이와는 다르게 대문자를 사용하지 않고 단어 사이에 언더스코어(_)를 사용해서 단어를 구분해주는 관례도 있는데, 이를 Snake case라고 부릅니다. 이 관례는 JavaScript에서는 잘 사용되지 않고, Python 등의 프로그래밍 언어에서 많이 사용됩니다.

```js
// Snake case
let fast_campus;
let foo_bar;
```

## 타입

JavaScript를 비롯한 대부분의 프로그래밍 언어는 여러 가지 종류의 값을 지원하는데, 이러한 값의 종류를 가지고 자료형(data type)이라고 부릅니다. 줄여서 **타입**이라고 부르기도 합니다.

값의 타입을 알아보기 위해 `typeof` 연산자를 사용할 수 있습니다

```js
typeof 1; // 'number'
typeof 'hello'; // 'string'
```

> 연산자 우선순위를 생각해서 코드 작성 해주세요



# number 타입

* number 타입 리터럴

* 정수인지 실수인지 판별하기

	+ 다른 많은 프로그래밍 언어와는 다르게, JavaScript는 정수와 실수를 별도의 타입으로 다루지 않습니다. 다만 어떤 수가 정수인지, 혹은 실수인지를 판별할 수는 있고, 이를 위해 `Number.isInteger` 메소드를 사용합니다.

	```
	Number.isInteger(1); // true
	Number.isInteger(0.1); // false
	```
	
* number 타입에 대한 연산

```
// 산술 연산 (arithmetic operators)
1 + 2; // 더하기
3 - 4; // 빼기
5 * 6; // 곱하기
7 / 8; // 실수 나누기
14 % 3; // 나머지
2 ** 3; // 거듭제곱 _ ES2018에 추가됨


// 비교 연산 (comparison operators)
1 < 2; // 작다
3 > 4; // 크다
5 <= 5; // 작거나 같다
6 >= 7; // 크거나 같다
8 === 8; // 같다  ** == 보다 === 을 사용하세요 : 버그 생길 확률을 낮춘다**
8 !== 9; // 같지 않다


// 증가/감소 연산 (incresement/decreasement operators)
let a = 1; ++a; // 연산결과는 2, a는 2
// -> 1 증가시킨 후의 값을 표현식의 결과값으로 반환
let b = 1; b++; // 연산결과는 1, b는 2
// -> 1 증가시키기 전 값을 표현식의 결과값으로 반환
let c = 1; --c; // 연산결과는 0, c는 0
let d = 1; d--; // 연산결과는 1, d는 0


// 할당 연산 (assignment operators)
// x에 1을 더한 후 다시 x에 할당하기. 결과적으로 x에는 1이 저장됩니다.
let x = 0;
x += 1;


// `+=` 연산은 아래 연산과 완전히 같은 동작을 합니다.
x = x + 1;


// 덧셈 뿐 아니라 다른 모든 산술 연산자에 대해 할당 연산을 할 수 있습니다.
x -= 1;
x *= 2;
x /= 3;
x %= 4;
x **= 5;
```

## 연산자 우선순위 (Operator Procedence)

한 표현식에 여러 개의 연산자를 이어서 쓴 경우, 어떤 연산자는 먼저 계산되고 어떤 연산자는 나중에 계산됩니다. 이는 연산자 우선순위(operator precedence)에 의해 결정됩니다. 자세한 내용은 MDN 링크를 참고해주세요.

```
3 + 4 * 5; // 23
```

## 부동 소수점 (Floating Point) vs 고정 소수점 (Fixed Point)
	
	+ 컴퓨터는 10진수 소수를 정확히 다룰 수 없다! 

- 교재참고 [JavaScript_number타입](https://helloworldjavascript.net/pages/130-number.html)




