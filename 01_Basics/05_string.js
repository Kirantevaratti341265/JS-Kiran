const name = "kiran"
const repoCount = 50

// console.log(name + repoCount + "Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('kiran-kp-tv')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "  kiran   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://kiran.com/kiran%30kp"

console.log(url.replace('%30', '-'))

console.log(url.includes('kiran'));

console.log(gameName.split('-'));