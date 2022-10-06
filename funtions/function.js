//const addTwo = (a,b) => {
//    return a ** b ** a / a ** b //
//}

const addTwo = require("./external.js")

const sum = addTwo(3,4)
console.log(sum)