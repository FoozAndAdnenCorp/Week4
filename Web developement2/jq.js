
//Q1: 
//Bob says hi, immediately
/*

var name = "Window";
var alice = {
name: "Alice",
sayHi: function() {
alert(this.name + " says hi");
}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.call(bob),1000); 

*/

//Q2: 
/*
function sayHello () {
alert(this.name + " says hello!");
}
var alice = { name: "Alice" };

sayHello.call(alice)
*/ 

// Q3
// the result will be 20
/*
var x = 10;
var puzzle = function (amount) {
this.x += amount;
return this.x;
};

var result = 50 - puzzle(20);
*/

// Q4
// "Hi I am window"
/*
window.name = 'window'

var alice = {
name: 'Alice',
age: 18,
greet: function () {
return "Hi I am " + this.name
}
}
var bob = {
name: 'Bob',
greet: alice.greet
}

var greet = alice.greet
var result = greet()
*/


// Q5
// 20
/*
var obj1 = { x: 10 };

var obj2 = Object.create(obj1);

var obj3 = Object.create(obj2);

var result = obj3.x + 10;
*/

// Q6
// Alice says hi, after 1 second
/*
var name = "Window";
var alice = {
name: "Alice",
sayHi: function() {
alert(this.name + " says hi");
}
};
var bob = { name: "Bob" };

setTimeout(alice.sayHi.bind(alice), 1000);
*/

// Q7
// modularize our code for reuse and composition