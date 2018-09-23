# 문제 1 

두 수 x, y를 입력받아 큰 수를 반환하는 함수(larger)를 작성하세요.

호출 예시: larger(4, 12); // 결과: 12

```
function larger(x, y) {
  if ( x > y ) {
  return x;
  } else {
      return y;
  }
 }
 // 함수 larger 선언,  만약 x가 y보다 크면 x를 반환하고 그게 아니면 y를 반환해라.
 larger(4, 12);
 // return 12
 ```
 


# 문제 2 

세 수 x, y, z를 입력받아 그 곱이 양수이면 true, 0 혹은 음수이면 false, 둘 다 아니면 에러를 발생시키는 함수(isPositive)를 작성하세요.

호출 예시:

isPositive(1, 2, 10) // 반환값: true isPositive(-1, 4, 5) // 반환값: false isPositive('열다섯', 10, 2) // 에러: Error: 입력값이 잘못되었습니다. 에러를 발생시키는 코드는 다음과 같습니다. throw new Error('입력값이 잘못되었습니다.');

```
function isPositive(x, y, z) {
  if ( x * y * z > 0 ) {
    return true; 
  } else if ( x * y * z < 0 ) {
      return false;    
  } else {
    throw new Error('입력값이 잘못되었습니다.');
  }
}
isPositive(1, 2, 10); // 반환값: true 

isPositive(-1, 4, 5); // 반환값: false 

isPositive('열다섯', 10, 2); // 에러: Error: 입력값이 잘못되었습니다. 
```

# 문제 3 

어떤 숫자(num)가 짝수인지 홀수인지 출력하는 함수(printEvenOdd)를 작성하세요.

호출 예시:

printEvenOdd(5) // 출력: '5: 홀수' printEvenOdd(10) // 출력: '10: 짝수' 

 ```
function printEvenOdd(num) { 
  if ( num % 2 == 0 ) 
  { return "짝수";
   } else { return "홀수";
} }

  
// 2로 나누었을때 나머지가 0이면 "짝수"출력,
// 아니면 "홀수"출력

printEvenOdd(5); // 출력: 5 '홀수'
printEvenOdd(10); // 출력: 10 '짝수'
 ```

# 문제 3-1 

문제 3번의 함수(printEvenOdd)를 이용해서, 1부터 20까지의 수가 각각 짝수인지 홀수인지 출력하는 함수(printEvenOdd20)를 작성하세요.

호출 예시:

printEvenOdd20();

/* 출력: 1: 홀수 2: 짝수 3: 홀수 4: 짝수 5: 홀수 6: 짝수 7: 홀수 8: 짝수 9: 홀수 10: 짝수 11: 홀수 12: 짝수 13: 홀수 14: 짝수 15: 홀수 16: 짝수 17: 홀수 18: 짝수 19: 홀수 20: 짝수 */

```
function printIfEvenOrOdd(i){
  if(i % 2 === 0){   // 나머지연산자
    console.log(`${i} : 짝수`);
  } else {
    console.log(`${i} : 홀수`);
    // ${} : 템플릿 대입문(template substitution)
  }
}
for (let i = 1; i<=20; i++){ 
  printIfEvenOrOdd(i);
}
```

# 문제 4 

세 수를 입력받아 큰 것부터 차례대로 출력하는 함수(printLargerFirst)를 작성하세요.

호출 예시:

printLargerFirst(5, 15, -2) // 출력: 15, 5, -2

```
function printLargerFirst(x,y,z){
  if (y > x && y > z) {
    [x,y] = [y,x];
  }else if (z > x && z > y) {
    [x,z]=[z,x];
  }
  if (z > y) {
    [y,z] = [z, y];
  }
  console.log(x,y,z);
}

printLargerFirst(5, 15, -2); // 출력: 15, 5, -2
```

# 문제 5 

두 문자열 str1, str2를 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수(insensitiveEqual)를 작성하세요.

호출 예시:

insensitiveEqual('hello', 'hello'); // 반환값: true insensitiveEqual('hello', 'Hello'); // 반환값: true insensitiveEqual('hello', 'world'); // 반환값: false

```
function insensitiveEqual(srt1,srt2){
  return srt1.toLowerCase() === srt2.toLowerCase();
}

insensitiveEqual('hello', 'hello'); // 반환값: true 

insensitiveEqual('hello', 'Hello'); // 반환값: true 

insensitiveEqual('hello', 'world'); // 반환값: false

```

# 문제 6 

이메일 주소를 입력받아, 아이디 부분을 별표(*)로 가린 새 문자열을 반환하는 함수(hideId)를 작성하세요.

호출 예시:

hideId('ksh@fastcampus.co.kr') // 반환값: '***@fastcampus.co.kr'

```
function hideld (x){
  const arr = x.split('@');
  console.log(arr);
  const arrSecond = arr[1];
  
  const arr2 = arr[0].split('');
  
  console.log(arr2);
  
  const arr3 = '*'.repeat(arr2.length);
  
  console.log(arr3);
  
  return arr3+'@'+arrSecond;
}

hideld('ksh@fastcampus.com'); // 반환값: '***@fastcampus.co.kr'
```

# 문제 7 

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수(insertHyphen)를 작성하세요.

호출 예시:

insertHyphen('1122334455'); // 반환값: '112-2334-455' insertHyphen('437027423'); // 반환값: '4370-274-23'

# 문제 8 

두 정수 start, end를 입력받아, start부터 end까지의 모든 정수를 배열로 반환하는 함수(range)를 작성하세요.

호출 예시:

range(3, 6); // 반환값: [3, 4, 5, 6] range(-4, 0); // 반환값: [-4, -3, -2, -1, 0]

```
function range(start, end){
  const arr =[];
  for (let i=start; i<=end; i++){
    arr.push(i);
  }
  console.log(arr);
}
range(3, 6); // 반환값: [3, 4, 5, 6]

range(-4, 0); // 반환값:[-4, -3, -2, -1, 0] 

```

# 문제 9 

수 타입의 값으로만 이루어진 배열 arr를 입력받아, 그 값들의 합을 구하는 함수(sum)를 작성하세요.

호출 예시:

sum([1, 2, 3]); // 반환값: 6

```
function sum(arr){
  let sum = 0;
  for(let num of arr){
    sum+= num;
  }
  return sum;
}


sum([1,2,3]); // 반환값 6;
```

# 문제 10 

두 정수 min, max 를 입력받아, min 이상 max 미만인 임의의 정수를 반환하는 함수(randomInteger)를 작성하세요.

호출 예시:

randomInteger(1, 7); // 반환값: 1, 2, 3, 4, 5, 6 중 임의의 수 하나

```
function randomInteger(min, max) {
  return Math.floor(Math.random() * (7 - 1)) + 1;
}
randomInteger(1, 7); // 반환값: 1, 2, 3, 4, 5, 6 중 임의의 수 하나

```
