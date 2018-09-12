# 변수

변수(Variable)는 (문자나 숫자 같은) 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다. 여기에 담겨진 값은 다른 값으로 바꿀 수 있다. 변수는 마치 (사람이 쓰는 언어인) 자연어에서 대명사와 비슷한 역할을 한다.

* 변수의 선언

	- Javascript에서 변수는 var로 시작
	- var 생략가능하지만, 유효범위라는 것에 영향을 미친다.
	(그렇게 때문에 var의 의미를 명확하게 이해하기 전까지 var사용 권장)
	- 변수의 이름은 $,_, 혹은 특수 문자를 제외한 모든 문자로 시작 가능
	- 세미콜론(;)은 하나의 구문이 끝났음을 명시적으로 나타내는 기호다. 다음처럼 한줄에 여러구문을 사용하고 싶을 때 세미콜론이 유용하다.

	
[숫자를 변수의 값으로 만든 예제]

```
var a = 1;  // 변수 a에 담겨 있는 값이 1일 때
alert(a+1);  // a+1의 결과는 2
 
var a = 2;	// 변수 a에 담겨 있는 값이 2일 때
alert(a+1);  // a+1의 결과는 3
```

[문자를 변수의 값으로 만든 예제]

```
var first = "coding"; // 변수 first에 담겨 있는 값이 'coding'일 때
alert(first + "everybody"); // first + " everybody"의 결과는 
							"coding everyone"

```

[두 개의 변수를 사용한 예제]

```
var a = 'coding', b = 'everybody'; 
alert(a); 
alert(b);
```


### 변수가 없다면

변수는 왜 쓰는가? 코드의 재활용성을 높여줌!

예를들어서 100에 10을 더하고, 10을 나눈 후에 다시 10을 빼고 거기에 10을 곱해야 한다고 치자. 그리고 각 단계마다 그 결과를 출력해야 한다면 코드는 아래와 같다.

```
alert(100+10);
alert((100+10)/10);
alert(((100+10)/10)-10);
alert((((100+10)/10)-10)*10);
```

그런데 계산해야 할 값을 100이 아니라 1000으로 바꿔야 한다면 위의 코드를 모두 **수정**해야 한다.

```
a = 100;			//   --> 변할 수 있는 영역 | 
a = a + 10;			----
alert(a);				|
a = a / 10;				|
alert(a);				|		--->  변하지 않는 영역 | 
a = a - 10;				|	
alert(a);				|
a = a * 10;      		|
alert(a);			----	
```

유지보수가 힘든 코드를 피하자! 
(변할 수 있는 영역에 변하지 않는 영역을 넣는 행동은 최대한 줄이자 | 버그발생 가능성 낮춤)

**변수의 효용은 뒤에서 배우게 될 반복문, 조건문, 함수와 결합되면 더욱 더 중요해짐**

<span style="color: red">Reference</span> : [생활코딩 자바스크립트_변수](https://opentutorials.org/course/743/4673) 

# JavaScript Variables [자바스크립트 변수들]

JavaScript variables are containers for storing data values.

자바스크립트 변수들은 데이터 값들을 저장하는 컨테이너들이다.

In this example, x, y, and z, are variables:

이 예제에서, x, y, 그리고 z,는 변수들이다:

```
var x = 5; // x stores the value 5 // 변수 x엔 담겨있는 값은 5
var y = 6; // y stores the value 6 // 변수 y에 담겨있는 값은 6
var z = x + y; // z stores the value 11 
					// 변수 z에 담겨있는 값은 x+y를 더한 11

```
## Much Like Algebra

Algebra Explanation : [Algebra Basics: What Is Algebra? - Math Antics](https://www.youtube.com/watch?v=NybHckSEQBI)

In this example, price1, price2, and total, are variables:

```
var price1 = 5; // price 1 stores the value 5
var price2 = 6; // price 2 stores the value 6
var total = price1 + price2; // total = 11
```
In programming, just like in algebra, we use variables (like price1) to hold values.

프로그래밍에서, algebra(대수학)과 같이, price1과 같은 변수가 값을 담을 수 사용한다.

In programming, just like in algebra, we use variables in expressions (total = price1 + price2).

프로그래밍에서, algebra(대수학)과 같이, 변수들을 이용하여 '(total = price1 + price2)'로 표현하는데에도 사용한다.

From the example above, you can calculate the total to be 11.

위의 예제로 알 수 있듯, 계산을 해보았을 때 11이라는 결과를 도출 할 수 있다.

> JavaScript variables are containers for storing data values.


## JavaScript Identifiers [자바스크립트 식별자들]

All JavaScript **variables** must be **identified** with **unique names**.

모든 자바스크립트의 변수들은 반드시 특별한 이름으로 식별되어야 한다.

These unique names are called **identifiers**.

이러한 특별한 이름들을 식별자라고 부른다.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

식별자들은 x,y와 같이 짧은 이름일 수도 있고 age, sum, totalVolume과 좀 더 서술적인(정보를 대표 할 만한)이름일 수도 있다. 

The general rules for constructing names for variables (unique identifiers) are:

변수들에게 이름(식별자들)을 부여하기 위한 기본적인 규칙들에는 이런 것들이 있다 : 

* Names can contain letters, digits, underscores, and dollar signs.

	이름은 문자, 숫자, 밑줄 표시, 달러 사인을 포함해도 된다

* Names must begin with a letter

	이름은 반드시 문자로 시작해야한다

* Names can also begin with $ 

	이름은 또한 달러 사인으로 시작해도 된다
	
* Names are case sensitive (y and Y are different variables)

	이름은 대/소문자에 민감하다 (소문자 y와 대문자 Y는 다른 변수)

* Reserved words (like JavaScript keywords) cannot be used as names

	자바스크립트 키워드들과 같이 이미 존재하는 것들은 사용 할 수 없다.

## The Assignment Operator [지정 연산자]

In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.

자바스크립트에서, 등부호(=)는 지정연산자이다. 

This is different from algebra. The following does not make sense in algebra:

> x = x + 5 


In JavaScript, however, it makes perfect sense: it assigns the value of x + 5 to x.

(It calculates the value of x + 5 and puts the result into x. The value of x is incremented by 5.)

>The "equal to" operator is written like == in JavaScript.



## JavaScript Data Types

JavaScript variables can hold numbers like 100 and text values like "John Doe".

In programming, text values are called text strings.

JavaScript can handle many types of data, but for now, just think of numbers and strings.

Strings are written inside double or single quotes. Numbers are written without quotes.

If you put a number in quotes, it will be treated as a text string.

###[Example] 

```
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';
```


## Declaring (Creating) JavaScript Variables

Creating a variable in JavaScript is called "declaring" a variable.

You declare a JavaScript variable with the **var** keyword:

>var carName;

After the declaration, the variable has no value. (Technically it has the value of **undefined**)

To **assign** a value to the variable, use the equal sign:

>carName = "Volvo";

You can also assign a value to the variable when you declare it:

>var carName = "Volvo";

In the example below, we create a variable called carName and assign the value "Volvo" to it.

Then we "output" the value inside an HTML paragraph with id="demo":

###[Example] 

```
<p id="demo"></p>

<script>
var carName = "Volvo";
document.getElementById("demo").innerHTML = carName; 
</script>

```
>t's a good programming practice to declare all variables at the beginning of a script.


## One Statement, Many Variables

You can declare many variables in one statement.

Start the statement with **var** and separate the variables by **comma**:

>var person = "John Doe", carName = "Volvo", price = 200;

A declaration can span multiple lines:

```
var person = "John Doe",
carName = "Volvo",
price = 200;
```

## Value = undefined

In computer programs, variables are often declared without a value. The value can be something that has to be calculated, or something that will be provided later, like user input.

A variable declared without a value will have the value **undefined**.

The variable carName will have the value undefined after the execution of this statement:

### [Example]

>var carName;

## Re-Declaring JavaScript Variables

If you re-declare a JavaScript variable, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:

### [Example]

```
var carName = "Volvo";
var carName;
```
## JavaScript Arithmetic

As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +:

### [Example]

>var x = 5 + 2 + 3;

You can also add strings, but strings will be concatenated:

### [Example]

> var x = "John" + " " + "Doe";

Also try this:

### [Example]

>var x = "5" + 2 + 3;



* If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.

Now try this:

### [Example]

> var x = 2 + 3 + "5";



<span style="color: red">Reference</span> : [Test Yourself with Exercises!](https://www.w3schools.com/js/js_variables.asp)


