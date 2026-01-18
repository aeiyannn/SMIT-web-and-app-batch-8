// console.log("Task 1")
// setTimeout(()=>{
//     console.log("Task 2")
// },2000)
// console.log("Task 3")
// console.log("Task 4")


// function greet(name,fn){
//     console.log(name)
//     fn()
// }


// greet("Ahmed",()=>{
//     console.log("Hello Js")
// })



// const isValidUser = new Promise((resolve,reject)=>{
//    const isSuccess=true
//    if(isSuccess){
//     resolve()
//    }
//    else {
//     console.log("failed")
//     reject()
//    }
// }
// )
// isValidUser.then(()=>{
//     console.log("THis is logically correct")
// }).catch(()=>{
// console.log("THis logic break and failed")
// })


// const introUser = new Promise((resolve,reject)=>{
//    let isUserLogin=true
//     if (isUserLogin){
//         resolve()
//     }
//     else {
//         reject()
//     }
// })
// introUser.then(()=>{
//     console.log("User is successfully Login")
// }).catch(()=>{
//     console.log("Invalid User")
// })


console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");