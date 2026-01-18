// let name = "Aeiyan Khan"
// let age =21

// console.log("my Name is" + name + "and my age is" + age + "and i am learning we and app")

// template literal
// console.log(`my name is ${name} and my age is ${age} `)

// destructring

const user ={
    name:"ALi",
    age:23,
    id:"TS1235"
}
const user1 ={
    name:"ALi",
    age:23,
    id:"TS1235",
    additionaldata:{
        courseName:"xyz"
    }
}
const {additionaldata } =user1
const {courseName}=additionaldata



console.log(courseName)


// const studentName=[ 1,2,3,4]
//  let [ std1Name, , ,std4Name ]=studentName
//  console.log(std1Name,std4Name)


// const obj1={
//     name:"Aeiyan",
//     age:20
// }
// const obj2 ={
//     id:'uffufufu',
//     isLogin:true
// }
//  const studentName1=["Ali","Ahmed","Waqas"]
//   const studentName2=["Aeiyan","Walled","Sattar"]
//  let arr = [...studentName1,...studentName2]
//  const newObj={
//     ...obj1,
//     ...obj2
//  }
//  console.log(newObj)


const studentName=["Ali","Ahmed","furqan"]
const copystudentName=[...studentName]
copystudentName.push("Waqas")
console.log(copystudentName,studentName)