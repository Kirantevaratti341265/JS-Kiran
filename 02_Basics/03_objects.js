// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kiran",
    "full name": "Kiran Patil",
    [mySym]: "Mykey1",
    age: 18,
    location: "Belagavi",
    email: "kiranpatil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)

JsUser.email = "kiran@patil.com"
// Object.freeze(JsUser)
JsUser.email = "kiran@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS user")
}
JsUser.greeting = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
