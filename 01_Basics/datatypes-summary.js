// primitive and non primtive types in data

// 1 Primitive 

// 7 in category : String, number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 6747689364683998n

// Reference or non-primitive 

// Array, Objects, Functions

const heros = ["shaktiman", "naagaraj", "doga"];
let myObj = {
    name: "Kiran",
    age: 22,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);



// *******************************************************************


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "kiranpatildotcom"

let anothername = myYoutubename
anothername = "apniclass"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "kiran@google.com"

console.log(userOne.email)
console.log(userTwo.email)