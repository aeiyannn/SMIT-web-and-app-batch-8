// function intro() {
//     console.log("Hello World")
// }
// intro()
// intro("Ali")
// function intro(name) {
//     console.log(name)

// }

// intro("ayan")
// const fullName = prompt("What is Your Name")
// intro(fullName)



// const xyz = function (name, age) {
//     console.log(name, age)
// }
// xyz("Aeiyan", 18)

// intro()

// const multiply = () => {
//     console.log("this is a arrow function")
// }
// setTimeout(() => {
//     console.log("This line excute after the 2 seconds")
// }, 1000)

// (() => {
//     console.log("this is immediate called")
// })()

// const arrowFunc = () => {
//     console.log("This is a arrow function")
// }

// arrowFunc()
// multiply()

// (function () {
//     console.log("This is immediately calles")
// })()
// setTimeout(function () {
//     console.log("This is excute after the 3 seconds")
// }, 3000)

// return function
// const returnData = () => {
//     return "return this infromation"
// }
// const output = returnData()
// console.log(output)

const numbers = [1, 2, 3, 4, 5, 6]

const updatedarray = numbers.forEach((value, i) => {
    console.log(value * value)
})
console.log(updatedarray)
