const userEmail = "k@patil.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0" if zero is under is string its truthy not false
// 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Arrayis empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}