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

##
