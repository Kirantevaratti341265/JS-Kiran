const user = {
    username: "Kiran",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this.username);
// }

// chai()


// const chai =  () => {
//     let username = "kiran"
//     console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => ( num1 + num2)


const addTwo = (num1, num2) => ({username: "Kiran"})

console.log(addTwo(4,5))

const myArray = [2, 3, 4, 7]

// myArray.forEach()