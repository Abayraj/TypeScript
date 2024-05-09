// "type annotation" or "type declaration :number
let id: number = 5;
console.log(id)
//typescript also do something called type inference 
//let n = 5
//n ='5' // it will throw an error it consider now n variable can only accept number called as inference


//Basic Types
let Rank: number = 10
let company: string = 'hello'
let isPassed: boolean = true
let x: any = 'Hello'//act like a normal js code  can assign any value to it 

let names: string[] = ["elon", "mukesh"]//this array now only take string value now
let val: any[] = ["e", 1, true]//this type used to store any values in array


//Tuple 

let person: [number, string, boolean] = [1, "man", true] //Tuple can be used when array needs to store multiple diffrent values also the order of data types matters 

//Tuple Array

let employee: [number, string][]

employee = [
    [10, 'mat'],
    [20, 'anna']

]


//Union 

let Manid: string | number //accept string or number
Manid = 5


//Enum    allow to define a set of named constants either numeric or stings

enum Direction1{
    Up,
    left,
    right,
    down
}
//the default value  of up is 0 we can access it by console.log(Direction1.up) it will give us an 0 left is now 1 ect..
//This numeric value can be referred to as the "enum member's ordinal value" or simply the "enum member's index."

enum Direction2{
    Up = 1,
    left,
    right,
    down
}

//but if change the up value like this will change the entire index value left will change to 2 now


//sting enum

enum Direction2{
    Ups = "Up",
    lefts = "left",
    rights ="Right",
    downs ="down"
}
