# TIL(Today I learend)
## 1. Today I Learned
---

### JavaScript  기초



## 코드의 실행

JavaScript는 REPL(Read-Evaludate-Print-Loop)를 사용해서 작동 시킬 수 있다고 합니다 _ JavaScript에만 있는 것은 아니랍니다. 자세한건 다음에 자세히 설명할게요.

---

## 기본 문법

#### JavaScript는 대소문자의 구분할까?

<span style="color: red">JavaScript는 대소문자 구분을 해요.</span> JavaScript 언어는 모든 부분에서 대소문자 구분을 하기 때문에 주의해야합니다. 예를 들어 function 과 Function은 완전히 다른 의미를 가진답니다.


#### 세미콜론
JavaScript는 세미콜론(;)을 이용해서 각 구문을 구분해요. 

```js
const a = 1;
const b = 2;

// 혹은 이렇게 할 수도 있습니다만, 좋아 보이지는 않아요.

const c = 1; const d = 2;
```

특별한 경우가 아니면, 세미콜론을 쓰고 나서는 행을 바꿔서 깔끔하게 보여질 수 있는게 좋겠죠?


### 공백

JavaScript가 대소문자에는 민감하지만, 다행히도 언어는 공백에 민감하지 않은 언어랍니다.

<br>

---
## 주석(comment)

주석은 실행되는 코드는 아니지만, 코드에 부가적인 설명을 넣고 싶을 때 사용 한답니다. 친절한 주석은 코드를 보는 사람들에게 엄청난 도움이 될 수 있겠죠?

```js
// 한 줄 주석

/* 여러 줄 주석 */

/*
여러
줄
주석
*/
```

참! 코딩을 하다보면 가끔 코드에 아무런 효과를 주고싶지 않을때 혹은 효과를 보이지 않게 하고 싶을 때가 있을거에요. 그럴땐 이렇게 해보세요.

맥 : `command + /` 
<br>
윈도우 :  `윈도우 : ctrl + /`

<br>


---

## 값(value)과 그 리터럴(literal)

쉽게 말해서 값(value)은 메모리에 저장되는 것 (RAM에 저장되는 것)이라고 생각하면 될 것 같아요. 그리고 그것을 프로그래밍 언어에서 표현하기 위한 문법이 바로 리터럴(literal)이에요.

```js
1 // 정수
2.5 // 부동소수점 실수
'hello world' // 작은 따옴표 문자열
"JavaScript" // 큰 따옴표 문자열
true // 참임을 나타내는 진리값
false // 거짓임을 나타내는 진리값
null // '존재하지 않음'을 나타내는 값
undefined // '정의된 적 없음'을 나타내는 값
```

참고로 텍스트 형태의 데이터는 "문자열 혹은 string"이라고 부른답니다. 

---

## 값의 타입(type)

JavaScript에서 다루어지는 모든 값은 그 ‘타입’을 가지고 있어요. 쉽게 말해 값의 종류라고 생각하면 될 것 같아요. Typeof 연산자는 피연산자의 타입을 가리키는 문자열을 반환함 

* `연산자 = 연산기호`
* `연산의 대상이 되는 값 -> 피연산자`

```js
typeof 1 // 'number'
typeof 2.5 // 'number'
typeof 'hello world' // 'string'
typeof true // 'boolean'
typeof null // 'object'
typeof undefined // 'undefined'
// ...
```
---

## 표현식(expression)과 연산자(operator)

표현식이란 JavaScript 문장의 구성요소를 구분하는 하나의 단위로, 값으로 변환 될 수 있는 부분을 가리켜요. 
JavaScript에서는 수학에서 사용하던 것과 비슷한 여러 가지 종류의 연산자를 통해 연산을 수행할 수 있답니다. 하지만 수학에서 보던 것과는 동작 방식이 달라서 입문자에게는 익숙하지 않은 연산자들도 있다고 하네요. 그렇지만 화이팅이에요! 

```js
// 사칙 연산
1 + 3; 
——
표현식
2 - 4;
3 * 5;
4 / 6;

// 연산자 우선순위 (operator precedence)
1 + 2 * 3;
(1 + 2) * 3;

// 논리 연산
true || false;
 
  *|| ‘또는’
      ‘or’ 연산자는 두 피 연산자 중 하나라도 true면 전체 결과 값이 true가 된다


true && false;

*&& ‘그리고’
  ‘and’ 연산자는 두 피 연산자가 모두 true어야 전체 값이 true가 된다. 


// 진리값으로 취급하기
1 || 0;

	‘or’연산자는 1을 true처럼 취급한다.
 
1 && 0;
```

---

## 변수 (variable) 

값을 재사용하기 위해 값에 붙일 이름을 선언하고 그 이름을 값에 대입할 수 있어요. 
이 때 이 이름을 변수(variable)라고 불러요. let 변수에는 값을 여러 번 다시 대입할 수 있지만, const 변수에는 값을 한 번만 대입할 수 있다는거 꼭 기억하세요!

```js
// 한 변수의 선언
let v; 

v라는 별명으로 부르겠다는 의미!

// 값의 대입
v = 1;

// 변수의 선언과 값의 대입을 동시에
let x = 1;

// 두 변수의 선언과 대입
let y = 2, z = x + y;

// const 변수
const c = 1;
c = 2; // 에러!

// 선언한 변수를 사용하기
x;
typeof x;
x * z;
```
---

## 제어 흐름

JavaScript는 특정 조건을 만족할 때에만 코드를 실행 시키거나, 혹은 여러 번 실행 시킬 수 있는 구문을 제공해요. 

```js
// if 구문 = ‘조건문’
if (2 > 1) {
  console.log('괄호 안의 값이 `true`이면 이 영역의 코드가 실행됩니다.');
} else {
  console.log('괄호 안의 값이 `false`면 이 영역의 코드가 실행됩니다.');
}

// while 구문 =‘반복문’
let i = 0;
while (i < 5) {
  console.log(`이 코드는 ${i + 1}번 째 실행되고 있습니다.`);
  i++; // i를 1증가시키는 코드_ ()괄호 안의 값이 false가 되면 while {}전체를 건너뛰어버림!!!!!!!!!
			
}

// for 구문
for (let i = 0; i < 5; i++) { // (초기값; 조건; 갱신)
  console.log(`이 코드는 ${i + 1}번 째 실행되고 있습니다.`);
}
```


## 함수(function)

값 뿐만 아니라 코드 뭉치에 이름을 붙여서 재사용을 할 수도 있는데, 이를 함수라 불러요. JavaScript에는 함수를 선언할 수 있는 여러 가지 방법이 있어요.

```js
// `function` 키워드를 이용한 함수 선언
function add(x, y) {
  return x + y; // x+y = ‘반환값’
}

// arrow function
const multiply = (x, y) => x * y;

// 함수 호출하기
add(1, 2); // 3
multiply(3, 4); // 12
```
JavaScript 및 그 구동 환경에 내장되어 있는 여러 가지 함수를 사용해서 사용자와 상호작용을 하는 코드도 작성 할 수 있어요.


퀴즈 만들기 실습을 해볼 수 있겠죠?

```js
// 브라우저 내장 함수인 `prompt`, `console.log`, `alert` 사용하기
const answer = prompt('이름이 무엇인가요?');
console.log(answer);
alert(answer);
```
---

## 2. Today I found Out

새로운 것을 배우는 것은 항상 신나고 재밌는 것 같아요. 앞으로 JavaScript를 더 자세하게 배울 생각에 겁도 나지만, 즐거운 마음으로 끝까지 포기하지 않고 꼭 마지막에 JavaScript를 사용해서 프로젝트를 진행하서 완성시키고 싶어요!

---

## 3. Reference 


- [생활 코딩](https://helloworldjavascript.net/pages/020-tutorial.html)

- [Repl.it](https://repl.it/repls)












