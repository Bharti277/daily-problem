// this in global scope
console.log(this); // In a browser, this will refer to the global window object

// this in a function
function showThis() {
  console.log(this); // In a regular function, this will refer to the global object (window in browsers)
}
showThis();

// this in strict mode
function showThisStrict() {
  "use strict";
  console.log(this); // In strict mode, this will be undefined in a regular function
}
showThisStrict(); // undefined

// this keyword value depends on how a function is called
// window.showThisStrict(); // window object // In a browser, this will refer to the window object when called as a method of window

// this in an object method
const obj = {
  name: "Alice",
  showThisMethod: function () {
    console.log(this); // In an object method, this will refer to the object itself
  },
};
obj.showThisMethod(); // { name: 'Alice', showThis: [Function: showThis] }

// call, apply, and bind
const person = { name: "Bob" };

obj.showThisMethod.call(person); // { name: 'Bob' } - this is set to person object using call
obj.showThisMethod.apply(person); // { name: 'Bob' } - this is set to person object using apply
const boundShowThis = obj.showThisMethod.bind(person);
boundShowThis(); // { name: 'Bob' } - this is set to person object using bind
// function greet(greeting) {
//   console.log(`${greeting}, ${this.name}`);
// }

// greet.call(person, "Hello"); // Hello, Bob
// greet.apply(person, ["Hi"]); // Hi, Bob
// const boundGreet = greet.bind(person);
// boundGreet("Hey"); // Hey, Bob

// this in an arrow function
const arrowFunc = () => {
  // Arrow functions do not have their own this; they inherit it from the surrounding context
  console.log(this); // In an arrow function, this is lexically bound to the surrounding context (global in this case)
};
arrowFunc(); // In a browser, this will refer to the global window object

const objWithArrow = {
  name: "Charlie",
  showThisArrow: () => {
    console.log(this); // In an arrow function, this is lexically bound to the surrounding context (global in this case)
  },
};
objWithArrow.showThisArrow(); // In a browser, this will refer to the global window object, not objWithArrow

// this inside a nested arrow function
const objWithNestedArrow = {
  name: "Dave",
  showThisNestedArrow: function () {
    const nestedArrow = () => {
      console.log(this); // In a nested arrow function, this is still lexically bound to the surrounding context (the object in this case)
    };
    nestedArrow();
  },
};
objWithNestedArrow.showThisNestedArrow(); // { name: 'Dave', showThisNestedArrow: [Function: showThisNestedArrow] }
