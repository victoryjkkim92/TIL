### 문제 1

두 문자열을 입력받아, 대소문자를 구분하지 않고(case insensitive) 두 문자열이 동일한지를 반환하는 함수를 작성하세요.

예:
```
insensitiveEqual('hello', 'hello'); -> true
insensitiveEqual('hello', 'Hello'); -> true
insensitiveEqual('hello', 'world'); -> false
```
* 접근방법 
  
  + 두 문자열을 입력받는 함수를 작성하라고 했으니까 function.insensitiveEqual(str1, str2){}
  + 대소문자 구분하지 않는다고 했으니까, 두개 다 toLowerCase() 또는 .toUpperCase()로 바꿔준다음 === 같냐고 물어봄
  + 같으면 true, 다르면 false




```js

function insensitiveEqual(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true
  } else {
    return false
  }
}
```

```js
// 짧은 버전
function insensitiveEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase()
}
```

### 문제 2

문자열 `s`와 자연수 `n`을 입력받아, 만약 `s`의 길이가 `n`보다 작으면 `s`의 왼쪽에 공백을 추가해서 길이가 `n`이 되게 만든 후 반환하고, 아니면 `s`를 그대로 반환하는 함수를 작성해보세요.

예:
```
leftPad('hello', 8); -> '   hello'
leftPad('hello', 3); -> 'hello'
```

* 접근방법 

 +  문자열 `s`와 자연수 `n`을 입력받은 함수 : function leftpad(s,n)
 +  만약 문자열`s`의 길이가 `n`보다 작으면 : if (s.length 가 숫자 n보다 작으면)
 +  n에서 s.length만큼의 공백을 추가해야해서 먼저 선언 : const spaceNum = n - s.length
 + `s`의 왼쪽에 공백으로 추가해서 길이가 `n`이 되게 만든 후 반환 : return '  '.repeat(spaceNum) _ 공백을 spaceNum만큼 준 다음, + s를 씀
 +  아니면 `s`를 그대로 반환하는 함수를 작성해보세요 : else 아니면 s 그냥 반환


```js
function leftPad(s,n){
  if (s.length < n){
    const spaceNum = n - s.length
    return ' '.repeat(spaceNum) + s;
  } else {
    return s;
  }
}
leftPad('aha',5); // 반환값 : '  aha'
```


### 문제 3

문자열을 입력받아, 문자열 안에 들어있는 모든 모음(a, e, i, o, u)의 갯수를 반환하는 함수를 작성하세요.


* 접근방법

  + 문자열을 입력받아 값을 반환하는 함수를 작성 : function count(str){}
  + 모음이면 1을 더해주자 : let num = 0 변수 선언 
  + 한 글자씩 보면서 모음인지 아닌지 확인 : for문씀, 초기값은 0, 반복횟수는 스트링 길이만큼, 하나씩 증가시킴
  + 조건이 들어가야 하니까 if문 사용
  + 모음이 보이면 num에 1씩 더해라
  + 반환 함수 적어줌!

```js
   function count(str) {
    let num = 0
    for (let i = 0; i < str.length; i++) { 
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
                num += 1
        }
    }
    return num
    }

    count('hello')
```

### 문제 4

문자열을 입력받아, 해당 문자열에 포함된 문자의 종류와 갯수를 나타내는 객체를 반환하는 함수를 작성하세요.

예:
```
countChar('tomato'); -> {t: 2, o: 2, m: 1, a: 1}
```

### 문제 5

문자열을 입력받아 그 문자열이 회문(palindrome)인지 판별하는 함수를 작성하세요. (회문이란, '토마토', 'never odd or even'과 같이 뒤에서부터 읽어도 똑같이 읽히는 문자열을 말합니다.)

* 접근방법 
  + 판별하는 함수
  + true or false | function isPalirome(input){}
  + for문 사용해서 앞에서 하나씩 확인해보고, 뒤에서 확인해보고
  + if 단어 앞글자랑 뒷글자랑 같은지 아닌지 같냐?

```js

function isPalirome(input){
  for(let i = 0; i < input.length; i++){
    const left = i;
    const right = input.length - 1 -i;
    if(input[left] !== input[right]){
      return false
    }
      return true
  }
}

isPalirome('이렇게 접근해야겠다고 생각하는게 어려워')
```

### 문제 6

문자열을 입력받아, 그 문자열의 모든 '부분 문자열'로 이루어진 배열을 반환하는 함수를 작성하세요.

예:
```
subString('햄버거');
// 결과: ['햄', '햄버', '햄버거', '버', '버거', '거']
```

### 문제 7

문자열을 입력받아, 해당 문자열에서 중복된 문자가 제거된 새로운 문자열을 반환하는 함수를 작성하세요.

예:
```
removeDuplicates('tomato'); -> 'toma'
removeDuplicates('bartender'); -> 'bartend'
```

* 접근방법
  + 문자열을 입력받아 ~ 반환하는 함수를 만들어라 : function removeDuplicates(str){}
  + 새로운 문자열 반환해야하니까_새로운 문자열에 대한 변수 선언! let = ''
  + 입력받은 문자열에서 중복된 문자가 제거된! 음.. 어떤 방식으로 접근 할 수 있을까?
  + 일단 입력받은 문자열을 하나씩 살펴봐야하니까, for문을 쓰고 str.length까지 돌려본다
  + 새로운 문자열 반환하려고 선언해 놓은 변수에, 만약 내가 지금 보고 있는 문자를 본 적이 없으면 담아주라고 한다
  
```js
function removeDuplicates(str) {
  let memory = '';
  for (let i = 0; i < str.length; i++) {
    if (!memory.includes(str[i])) {
      memory += str[i]
    }
  }
  console.log(memory)
}

removeDuplicates('tomato') // 'toma'

```

### 문제 8

이메일 주소를 입력받아, 아이디 부분을 별표(`*`)로 가린 새 문자열을 반환하는 함수를 작성하세요.

- 루프로 먼저 풀어보세요.

```js
function removeId(input){
 let seen = false
 let memory = ‘’
 for (let i = 0; i < input.length; i++){
   // 내가 지금 보고 있는 글자가 ‘@’이면
   // seen의 값을 true로 바꾼다
   if (input[i] === ‘@’){
     seen = true
   } if (seen === true){
     memory += input[i]
   } else{
     memory += ‘*’
   }
   // seen이 true이면
   // 내가 지금 보고 있는 글자 그대로 memory에 덧붙인다
   // 아니면, 별표를 대신 덧붙인다.
 }
 return memory
 // 변환한 결과를 반환한다.
}
removeId(‘keoeke@gmail.com’)
```


- `split` 메소드를 이용해서 풀어보세요.

* 접근방법 
  + 매개변수 .split('@')메소드로 골뱅이 앞 뒤로 잘라서 배열(두 부분 나옴)로 만듬
  + 비어있는 변수 하나 선언해주고 거기에 값 담아주기
  + for문 돌리는데 별표 추가해 줄 부분은 배열 인덱스 0번째니까 범위를 걔까지라고 정해줌
  + 반환할 때 새롭게 생성된 애랑 + @ + 두번째 배열 합

```js

function removeId(input) {
  const strings = input.split('@');
  let newStr = '';
  for (let i = 0; i < strings[0].length; i++) {
    newStr += '*';
  }
  return newStr + '@' + strings[1];
}

removeId('hello@gmail.com') // 반환값 : *****@gmail.com
```

### 문제 9

문자열을 입력받아, 대문자는 소문자로, 소문자는 대문자로 바꾼 결과를 반환하는 함수를 작성하세요.

* 접근 방법
 
  + 문자열을 입력받아...반환하는 함수 : return | function changeCase(str){}
  + if 문으로 만약 str이 대문자면 소문자로, else 대문자로 바꿔라

```js

function changeCase(str){
  if(str === str.toLowerCase()){
    return str.toUpperCase()
  } else {
    return str.toLowerCase()
  }
}
changeCase('HELLO'); // hello
changeCase('hello'); // HELLO
```

### 문제 10

문자열을 입력받아, 각 단어의 첫 글자를 대문자로 바꾼 결과를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

### 문제 11

문자열을 입력받아, 문자열 안에 들어있는 단어 중 가장 긴 단어를 반환하는 함수를 작성하세요. (문자열에 개행이 없다고 가정합니다.)

### 문제 12

문자열 `s`과 자연수 `n`을 입력받아, `s`의 첫 `n`개의 문자만으로 이루어진 새 문자열을 반환하는 함수를 작성하세요.

### 문제 13

Camel case의 문자열을 입력받아, snake case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

### 문제 14

Snake case의 문자열을 입력받아, camel case로 바꾼 새 문자열을 반환하는 함수를 작성하세요.

### 문제 15

`String.prototype.split`과 똑같이 동작하는 함수를 작성하세요.

예:
```
split('Hello World'); -> ['Hello World']
split('Hello World', ' '); -> ['Hello', 'World']
split('let,const,var', ',') -> ['let', 'const', 'var']
```

### 문제 16

2진수를 표현하는 문자열을 입력받아, 그 문자열이 나타내는 수 타입의 값을 반환하는 함수를 작성하세요. (`parseInt`를 사용하지 말고 작성해보세요.)

예:
```
convertBinary('1101'); -> 13
```

### 문제 17

숫자로만 이루어진 문자열을 입력받아, 연속된 두 짝수 사이에 하이픈(-)을 끼워넣은 문자열을 반환하는 함수를 작성하세요.

예:
```
insertHyphen('437027423'); -> '4370-274-23'
```
