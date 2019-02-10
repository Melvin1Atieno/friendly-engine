# Bits and pieces picked up during this project.

ECMAScript is a standard. While JavaScript is the most popular implementation of that standard.

ES is short for ECMAScript.

ES1: June 1997, ES2: June 1998,  ES3: Dec. 1999, ES4: Abandoned:,  ES5: December 2009, ES2015(ES6): June 2015, ES2016(ES7): June 2016, ES2017(ES8): June 2017, ES2018(ES9): June 2018.

In ES2015 came with a new way to define a string.

If you want to define a string, you can use `''` or `""`

```javascript
let name = "Melvin";

let hobby = "Hiking";
```

To concatenate strings together we use `+` operator

```javascript
let name = "Melvin";

let hobby = "Hiking";

let sentence = name + "doesn't just code, in her spare time she enjoys" = hobby;
```

This gets pretty tedious and unruly when the amount to concatenate grows. Enter template literals.

To create a template literal string, use the backtick <code>`</code>in place of quotes.

```javascript
let name = `Melvin`;

let hobby = `doodling`;

```
They behave exactly the same as a regular string literal only difference is easier concatenation

```javascript
let name = `Melvin`;

let hobby = `Doodling`;

let sentence = `${name} doesn't just code, in her spare time she enjoys ${hobby}`
```