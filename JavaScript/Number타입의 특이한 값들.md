# number 타입의 특이한 값들

다음 값들도 모두 number타입에 속한다.
```
NaN
-0
Infinity
-Infinity
```

Nan과 Infinity 역시 IEEE754 표준에 정의되어 있는 값들이다.

## NaN

`NaN`은 `Not a Number'의 약자로, 계속 불가능한 연산의 결과 값을 나타내기 위해 사용된다. 

```
0 / 0; // NaN
1 * 'hello'; // NaN
```

`NaN`은 JavaScript의 값들 중 유일하게 **자기 자신과 같지 않은 값**입니다. 따라서 어떤 값이 `NaN`인지 판별하기 위해서는 일반적인 비교 연산자를 사용하면 안되고, 대신 `Number.isNaN` 또는 `Object.is` 함수를 사용해야 합니다. 

```
const thisIsNan = NaN;

// 주의! 이렇게 하면 안된다. 

thisIsNan === NaN; // false

//이렇게 해야 한다. 
Number.isNaN(thisIsNan); // true
Object.is(thisIsNan, NaN); // true
``` 

> 어떤 값이 `NaN`인지 아닌지 확인하고 싶을때 등호(ex.`===`)를 사용하지 마세요! "NaN은 숫자가 아니기 때문에, 어떤 숫자와도 같지 않다."는 규칙이 있다. 즉, NaN은 number타입인 NaN과 같지 않다.


_수업시간 예제_ 

```
const a = prompt('a: ')
const b = prompt('b: ')
const parsedA = parseInt(a)
const parsedB = parseInt(b)

// 이렇게 하면 안 됩니다!!!
// if (parsedA === NaN || parsedB === NaN) {
//   alert('숫자를 입력해주세요')
// } else {
//   alert(parsedA + parsedB)
// }

// "NaN은 숫자가 아니기 때문에, 어떤 숫자와도 같지 않다." 는 규칙이 있다.
// => 즉, NaN은 number 타입인 NaN과 같지 않다.

if (Number.isNaN(parsedA) || Number.isNaN(parsedB)) {
  alert('숫자를 입력해주세요')
} else {
  alert(parsedA + parsedB)
}
```



## -0

JavaScript에서 `0`과 `-0`은 별개의 값이지만, 비교 연산을 해보면 결과값이 `true`로 나옵니다. 즉, 거의 모든 경우에 `0`과 같은 값으로 간주됩니다. 

```
0 === -0; // true
1 * -0; // -0
1 + -0; //1 
``` 

그러나 몇몇 예외가 존재한다. `Object.is`함수는 `0`과 `-0`을 다른 값으로 취급한다. 

```
0bject.is(0,-0); // false
```

그리고 0이 아닌 어떤 수를 `0`혹은 `-0`으로 나눌 때에도 결과값이 다릅니다. 

```
1 / 0; // Infinity
1 / -0; // -Infinity
```

## Infinity

JavaScript는 **무한대**를 내장하고 있으며, 아래와 같이 동작합니다. 

```
1 / Infinity; // 0
1 / -Infinity; // -0
```

어떤 값이 `Infinity`인지 아닌지 판별하려면, `Number.isFinite` 메소드를 사용하세요. 비슷한 기능의 `isFinite` 라는 전역 함수도 존재하긴 하지만, 동작이 미묘하게 다르므로 ES2015에 추가된 `Number.isFinite` 를 사용하는 것 추천한다.

```
Number.isFinite(1); // true
Number.isFinite(Infinity); // false
Number.isFinite('1'); // false
isFinite('1'); // true - 'isFinite' 는 문자열을 숫자로 변환합니다.
``` 

## parselnt, parseFloat

문자열을 number 타입으로 바꾸기 위해 `parseInt` 혹은 `parseFloat` 함수를 사용할 수 있다.

```
parseInt('123'); // 123
parseInt('110', 2); // 6 (문자열을 2진수로 간주한다.)
parseFloat('12,345'); // 12.345
parseInt('hello'); // NaN
```

## 다른 타입과의 연산

JavaScript는 number 타입과 다른 타입 간의 연산도 허용하지만, 그 결과가 별로 우아하지 않다.

```
1 + null; // null
1 * '1'; // NaN
1 + '1'; // '11'
1 - '1' // 0
```

위에 보이는 것 처럼, 피연산자로 어떤 타입의 값이 오느냐, 어떤 연산자를 사용하느냐에 따라 결과값의 타임이 달라진다. 이런 부분은 JavaScript가 "일관적이지 않다"고 비난받는 부분이기도 하다. 일관적이지 않은 연산을 사용한 코드는, 코드의 의도를 이해하기 어렵기 때문에 좋지 않은 코드로 평가된다. 따라서 **number 타입과 다른 타입의 연산은 웬만하면 피하는 것이 좋다.**

특히 `prompt`나 `input` 태그 등을 통해 사용자로부터 입력받은 데이터는 `undefined` 혹은 문자열일 가능성이 높다. 이런 경우에는 **수 연산을 하기 전에** 모든 피연산자를 확실히 number 타입으로 만들어 주는 것이 좋은 습관이다. 

```
const input - promp('정수를 입력하세요');
const num = parseInt(input);
if (Number.isNaN(num)) {
	alert('정수가 아닙니다.');
} else {
	const result = num * 2; // 안심하고 연산을 할 수 있다.
	alert(`${num}의 두 배는 ${result} 입니다.`);
}
```

## TIL

본격적으로 자바스크립트를 들어가기 전에 기본적인 개념들을 사용한 알고리즘 문제를 풀면서, 최대한 많은 용어들을 접해보려고 했다. 그 중에서도 `NaN`과 같은 값들이 생소했었는데 설명을 읽어보고나니 조금 이해가 된 것 같다. 내일부터 진행되는 자바스크립트 수업이 기대된당!
