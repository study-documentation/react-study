# Javascript

A quick React centric Javascript refresh before diving back into React

## Let, Var, Const
#### var is available anywhere in this function
`function printNumbers() {`<br>
`for (var i = 0; i < 5; i++) {`<br>
`console.log(i)`<br>

#### let and const are limited to block scope
`function printNumbers() {`<br>
`for (let i = 0; i < 5; i++) {`<br>
`console.log(i)`<br>

---

## Objects
Objects in Javascript are collections of key/value pairs

`const rabbit = {`<br>
`name: Fiver,`<br>
`hop() {},`<br>
`see() {}`<br>
`};`<br>

Now, `rabbit.see()` can be called. Properties can also be accessed via this syntax `rabbit[]`. This approach can be used when the proerty to be called is uncertain.

For example, this syntax is handy when receiving a dynamic value and changing/assigning a property based upon that.<br>
`const targetMember = 'name`;<br>
`person[targetMember.value] = 'John'`<br>

---

## `this` Keyword
Unlike other languages, `this` retrns a reference to the current object if the call is in a method (function with in an object).
If `this` stands alone it will return the global object (window object)

```
const soda = {
  name: "coke",
  fizz(){
    console.log(this)
  }
}
```

#### Binding This
`this` can be bound to an object, allowing for it to be used outside the context of a function and still return an object reference.
`const fizz = coke.fizz.bind(soda)`

---

## Arrow Functions
Two simple use cases for arrow functions. Similar to Java Lambdas.

```
const square = function(number) {
  return number * number;
}
```
becomes...

`const square = number => number * number;`

and
```
const users = [
  {id: 1, isActive: true},
  {id: 2, isActive: true},
  {id: 3, isActive: false},
];
```
plus <br>
`const activeUsers = jobs.filter(user) {return user.isAtcive})`<br>

becomes...<br>

`const activeUsers = jobs.filter(user => user.isActive)`

#### Arrow Funcation and `this`
