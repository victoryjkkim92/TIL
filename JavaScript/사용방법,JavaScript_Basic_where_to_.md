#JavaScript Where To


## The `<script>` Tag

In HTML, JavaScript code must be inserted between `<script>` and `</script>` tags.

[Example]

```
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
```

> Old JavaScript examples may use a type attribute: `<script type="text/javascript">`.
The type attribute is not required. JavaScript is the default scripting language in HTML.

## JavaScript Functions and Events

A JavaScript **function** is a block of JavaScript code, that can be executed when "called" for.

For example, a function can be called when an **event** occurs, like when the user clicks a button.

## JavaScript in `<head>` or `<body>`

You can place any number of scripts in an HTML document.

Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.



## JavaScript in <head>

In this example, a JavaScript function is placed in the `<head>` section of an HTML page.

The function is invoked (called) when a button is clicked:

[Example]

```
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>

<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```

## JavaScript in `<body>`

In this example, a JavaScript function is placed in the `<body>` section of an HTML page.

The function is invoked (called) when a button is clicked:

[Example]

```
<!DOCTYPE html>
<html>
<body> 

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
```

>Placing scripts at the bottom of the <body> element improves the display speed, because script compilation slows down the display.

## External JavaScript

Scripts can also be placed in external files:

External file: myScript.js

```
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```

External scripts are practical when the same code is used in many different web pages.

JavaScript files have the file extension **.js**.

To use an external script, put the name of the script file in the src (source) attribute of a `<script>` tag:

[Example]

```
<script src="myScript.js"></script>
```

You can place an external script reference in <head> or `<body>` as you like.

The script will behave as if it was located exactly where the `<script>` tag is located.

>External scripts cannot contain `<script>` tags.


## External JavaScript Advantages

Placing scripts in external files has some advantages:

* It separates HTML and code
* It makes HTML and JavaScript easier to read and maintain
* Cached JavaScript files can speed up page loads

To add several script files to one page  - use several script tags:

[Example]

```
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
```

## External References

External scripts can be referenced with a full URL or with a path relative to the current web page.

This example uses a full URL to link to a script:

[Example]

```
<script src="https://www.w3schools.com/js/myScript1.js"></script>
```

