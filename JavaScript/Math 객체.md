# Math 객체

JavaScript에 내장된 `Math` 객체에는 수 연산을 위한 많은 메소드와 상수들이 내장되어 있다.

```
// 삼각함수, 로그함수, 지수함수
Math.sin // 사인
Math.cos // 코사인
Math.tan // 탄젠트
Math.log // 밑을 자연상수로 하는 로그함수
Math.exp // 밑을 자연상수로 하는 지수함수
Math.sqrt // 제곱근

// 절대값, 올림, 내림, 반올림, 소수점 아래 잘라내기
Math.abs // 절댓값
Math.ceil // 올림
Math.floor // 내림
Math.round // 반올림
Math.trunc // 소수점 아래 잘라내기

// 최대값, 최소값
Math.max
Math.min

// 총합
Math.sum

// 랜덤
Math.random

// 상수
Math.E // 자연상수 (2.71...)
Math.PI // 원주율 (3.14...)
...
```

# number 타입의 메소드

number 타입은 객체가 아니지만, 마치 객체처럼 메소드를 사용할 수 있습니다. 이는 JavaScript가 **래퍼 객체(wrapper object)**라는 기능을 제공하기 때문이다.

```
(12345).toString(); // '12345'
(12345).toLocaleString(); // '12,345'
(1.2345).toFixed(2); // '1.23'
```



## TIL

역시 자바스크립트에 나오는 메소드들은 한번 써먹어봐야 느낌이 오나보다ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ