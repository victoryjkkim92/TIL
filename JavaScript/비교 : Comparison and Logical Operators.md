# 비교

연산자란 값에 대해서 어떤 작업을 컴퓨터에게 지시하기 위한 기호이다.

[예제]
> a=1

'='는 우항의 값인 1을 좌항의 변수 a에 대입하는 '대입 연산자'

### 비교 연산자

프로그래밍에서 비교란 주어진 값들이 같은지, 다른지, 큰지, 작은지를 구분하는 것을 의미한다. 
이 때 비교 연산자를 사용하는데 비교 연산자의 결과는 true나 false 중의 하나다. true는 비교 결과가 참이라는 의미이고, false는 거짓이라는 뜻이다. true와 false는 블린(boolean)이라고 불리는 데이터 형식인데 이것은 조건문에서 비중있게 다룰 것이다. 아래는 주요한 비교 연산자들의 종류와 그에 따른 예제들이다.

### 동등연산자	`==`

동등 연산자로 좌항과 우항을 비교해서 서로 값이 같다면 true 다르다면 false가 된다. '='가 두개인 것을 주의하자. '='가 하나인 것은 대입 연산자로 우항의 값을 좌항의 변수에 대입할 때 사용하는 것으로 의미가 완전히 다르다.

```
alert(1==2)             //false
alert(1==1)             //true
alert("one"=="two")     //false 
alert("one"=="one")     //true
```

### 일치연산자 `===`


일치 연산자로 === 좌항과 우항이 '정확'하게 같을 때 true 다르면 false가 된다. 여기서 정확하다는 말의 의미에 집중하자. 아래 예를보자.

```
alert(1=='1');              //true
alert(1==='1');             //false
```

위의 결과는 이상하다. '==='는 숫자 1과 문자 1을 다르게 인식한다. 반면에 '=='는 양쪽의 값을 같다고 판단한다. 바로 이것이 '정확'의 의미다. 즉 ===는 서로 같은 수를 표현하고 있더라도 데이터 형이 같은 경우에만 같다고 판단하기 때문이다. <span style="color: red">결론부터 말하면 == 연산자 대신 === 연산자를 쓰는 것을 강력하게 권한다.</span> 몇가지 사례를 더 살펴보자.

```
alert(null == undefined);       //true
alert(null === undefined);      //false
alert(true == 1);               //true
alert(true === 1);              //false
alert(true == '1');             //true
alert(true === '1');            //false
 
alert(0 === -0);                //true
alert(NaN === NaN);             //false
```
**자바스크립트에서 동등연산자 `==`는 숫자 1을 true로 간주한다 _ 그 외의 수는 false**

null과 undefined는 값이 없다는 의미의 데이터 형이다. null은 값이 없음을 명시적으로 표시한 것이고, undefined는 그냥 값이 없는 상태라고 생각하자.

**NaN은 0/0과 같은 연산의 결과로 만들어지는 특수한 데이터 형인데 숫자가 아니라는 뜻이다.**

### !=
'!'는 부정을 의미한다. '같다'의 부정은 '같지 않다'이다. 이것을 기호로는 '!='로 표시한다. 아래의 결과는 !=의 결과인데 ==와 정반대의 결과를 보여준다.

```
alert(1!=2);            //true
alert(1!=1);            //false
alert("one"!="two");    //true
alert("one"!="one");    //false
```

### !==

'!=='는 '!='와 '=='의 관계와 같다. 정확하게 같지 않다는 의미다. 예제는 생략한다.

### >
좌항이 우항보다 크다면 참, 그렇지 않다면 거짓임을 알려주는 연산자다. '<'는 반대의 의미로 언급은 생략하겠다.

```
alert(10>20);   //false
alert(10>1);    //true
alert(10>10);   //false
```

### >=
좌항이 우항보다 크거나 같다. '<='는 반대의 의미로 언급은 생략하겠다.
```
alert(10>=20);      //false
alert(10>=1);       //true
alert(10>=10);      //true
```


 참고 : [==과 ===의 차이점](http://dorey.github.io/JavaScript-Equality-Table/)
 
 생활코딩 : [비교_생활코딩](https://opentutorials.org/course/743/4722)




# JavaScript Comparison and Logical Operators  [자바스크립트 비교 그리고 논리 연산자들]

Comparison and Logical operators are used to test for true or false.

비교와 논리 연산자들은 결과가 참인지 거짓인지 확인해 보기 위해 사용된다.




## Comparison Operators | 비교연산자


Comparison operators are used in logical statements to determine equality or difference between variables or values.

비교 연산자는 논리적인 진술에서 변수와 값 사이의 차이점과 동일함을 알아내기 위해 사용된다.

Given that **x = 5**, the table below explains the comparison operators:

x=5라는 값이 주어졌다고 가정했을 때, 아래의 표는 비교 연산자를 사용해 얻을 수 있는 값을 보여준다.

|Operator|Description|Comparing| Returns | 
|-----|----------|-------------|----------|
|		==	| equal to	|	x == 8| false |
|							||	x == 5|	true |
|							||	x == "5"	|true | 
|===| equal value and equal type|x === 5|true
|	|							|x === "5"	|false|
|!=|	not equal|			x != 8	| 		true |
|!==|not equal value or not equaltype|x !== 5|false|
|>	|greater than	| x > 8	|false|
|<	| less than|	x < 8 |	true|
|>= |	greater than or equal to	|x >= 8|false|
|<= |	less than or equal to	|x <= 8| true|

## How Can it be Used

Comparison operators can be used in conditional statements to compare values and take action depending on the result:

비교 연산자는 또한 값을 비교하기 위해 조건부에 사용될 수 있고 결과에 의해 행동을 취할 수 있다. 

>if (age < 18) text = "Too young";


