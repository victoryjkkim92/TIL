# 배열 _ 메소드 | Array_Methods


## .push()

* The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

* `push()`메소드는 하나 또는 더 많은 요소(',' 사용해서 추가)들을 배열의 가장 끝에 추가하여 배열의 길이를 늘린다.


```js

let animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

```

참고 : [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

## .pop()
 
* The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

* `pop()`메소드는 배열의 맨 마지막 요소를 제거하고, 그 제거된 값을 출력한다.

```js
let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]
```



참고 : [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)



## .splice()

* The `splice()` method changes the contents of an array by removing existing elements and/or adding new elements.

* `splice()`메소드는 배열 안에 있는 요소를 제거하거나 삽입함으로써 배열의 내용물을 바꾼다.

```js
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
// 0 -> Optional 'deleteCount'

console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index

console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
```
 
참고 : [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)



## .shift()

* The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

* `shift()`는 배열의 첫번째 요소를 제거하고 제거된 요소를 출력한다.
 
```js

let array1 = [1, 2, 3];

let firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1


```

참고 : [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)


## .unshift()

* The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

* `unshift()` 메소드는 하나 혹은 여러개의 요소를 배열의 시작부분에 추가하고, 새로운 배열을 출력


```js

let array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


```
참고 : [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)


## .concat()

* The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.


* `concat()`메소드는 두개 또는 여러개의 배열을 병합할 때 사용된다. 그때 이미 존재하는 배열들의 값에는 지정을 주지 않고, 새롭게 병합된 배열을 반환한다.

```js
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]

```



## TIL

배열에 관련된 몇개의 메소드들에 대해 알게되었다. 나중에 자바스크립트로 게임을 만들어볼때 음..카드게임같은거? 만들때 써먹어봐야겠당


