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
Functions do not bind this. They will return the global object. This can be solved via arrow function which inherit `this` in the context of the function.

---

# Array.map Method
This is useful for rendering lists.<br>

`const sauruses = ['broto', 'tyranno', 'dilopho']`<br>

can be mapped via...  

`const dinos = sauruses.map(saurus => '<li>${saurus}</li>')`<br>
note also that a template literal is being used in place of concatenation.<br>

---

# Object Destructuring
This is a way to have cleaner code while working with objects. Lets say the following object exists...  
```
const address = {
    street: '',
    city: '',
    zip: ''
};
```

The code that follows is smelly...  

```
const street = address.street;
const city = address.city;
const zip = address.zip;
```

This code is cleaner and does the exact same thing via object destructuring.

`const {street, city, zip} = address;`

---

# Spread Operator
This is a means for concatenating arrays or cloning objects but with more control over where those objects end up.
For example,  

```
const first = [1,2,3];
const second = [4,5,6];
const combined= [...first, ...second]
```

Using the spread operator (`...`) allows for the insertion of other elements variously throughout the combined array.

---

# Classes

```
class Dino {
  constructor(name){
      this.name = name;
    }
    walk() {
      console.log("I just did a walk");
    }
 }
 
 const genericDino = new Dino("Steve");
```

---

# Inheritance

```
class Meateater extends Dino {
  constructor(name, type){
    super(name);
    this.type = type
  }
  
  chomp() {
    console.log("chomp chomp")
  }
}

const Abigail = new Meateater("Abigail", "Velociraptor");
```

---

# Modules
The two examples above in the same file would create bloated coded. Creating Modules is the Javascript way of dealing with this. Places these classes in separate files and use the javascript import/export convention to create interactions. Javascript classes default to private, making the export convention neceessary.

```
import { Dino } from "./Dino"
export Meateater extends Dino(){}
```

Javascript allows for named exports as well. 

```
import { Person } from "./person"

export function promote() {}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log("teach")
    }
}
```

In the snippet above the `promote` function can be exported on its own.

---
