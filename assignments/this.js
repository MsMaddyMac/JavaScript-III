/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - when 'this' is not assigned to a particular function and lies in the global scope, it will be assigned to the window/console it is running in.

* 2. Implicit Binding - whenever a function is called/invoked by a preceding [.], 'this' will automatically reference what is to the left of the [.].

* 3. New Binding - when a constructor function is used, 'this' refers to the new object created with the 'new' keyword.

* 4. Explicit Binding - whenever 'call' or 'apply' method is used, 'this' is stated clearly (explicit).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayHi(greeting) {
    console.log(this);
    return greeting;
}

sayHi('Hi');

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding