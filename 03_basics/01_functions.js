function sayMyName() {
    console.log("k")
    console.log("I")
    console.log("R")
    console.log("A")
}

// sayMyName()

// function addTwoNums(num1, num2) {
//     console.log(num1 + num2);
// } 
function addTwoNums(num1, num2) {
    // let result = num1 + num2
   
    // return result
    return num1 + num2
    
} 

const result = addTwoNums(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(!username) {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("Kiran")
// console.log(loginUserMessage("kiran"))


function calculateCartPrice(val1, val2, ...num1) {
   return num1
}

// console.log(calculateCartPrice(200, 400, 500,600,700))

const user = {
    username: "kiran",
    price: 45,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and priceis ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))