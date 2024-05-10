// "type annotation" or "type declaration :number
var id = 5;
console.log(id);
//typescript also do something called type inference 
//let n = 5
//n ='5' // it will throw an error it consider now n variable can only accept number called as inference
//Basic Types
var Rank = 10;
var company = 'hello';
var isPassed = true;
var x = 'Hello'; //act like a normal js code  can assign any value to it 
var names = ["elon", "mukesh"]; //this array now only take string value now
var val = ["e", 1, true]; //this type used to store any values in array
//Tuple 
var person = [1, "man", true]; //Tuple can be used when array needs to store multiple diffrent values also the order of data types matters 
//Tuple Array
var employee;
employee = [
    [10, 'mat'],
    [20, 'anna']
];
//Union 
var Manid; //accept string or number
Manid = 5;
//Enum    allow to define a set of named constants either numeric or stings
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["left"] = 1] = "left";
    Direction1[Direction1["right"] = 2] = "right";
    Direction1[Direction1["down"] = 3] = "down";
})(Direction1 || (Direction1 = {}));
//the default value  of up is 0 we can access it by console.log(Direction1.up) it will give us an 0 left is now 1 ect..
//This numeric value can be referred to as the "enum member's ordinal value" or simply the "enum member's index."
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["left"] = 2] = "left";
    Direction2[Direction2["right"] = 3] = "right";
    Direction2[Direction2["down"] = 4] = "down";
})(Direction2 || (Direction2 = {}));
//but if change the up value like this will change the entire index value left will change to 2 now
//sting enum
(function (Direction2) {
    Direction2["Ups"] = "Up";
    Direction2["lefts"] = "left";
    Direction2["rights"] = "Right";
    Direction2["downs"] = "down";
})(Direction2 || (Direction2 = {}));
//Objects
//first way to do object
var user = {
    id: 1,
    name: 'jhon'
};
//for more clear syntax 
var user2 = {
    id: 5,
    name: 'amesh'
};
//Type Assertion
//type assertion is explicitly telling the compiler want to treat an entity as a different types 
var NUM = "balu";
//first way //now it will take the NUM any value as a number  if we give string the Carnum will only take number
var Carnum = NUM;
//second way
var Carnum2 = NUM;
console.log(typeof (Carnum2));
