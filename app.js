//spread operator
// const numbers1=[1,2,3,4,5,6,7,8,9]
// const numbers2=[10,11,12,13,14,15,16,17,18]

// const newnum=[...numbers1,...numbers2]
// console.log(newnum)



const user ={
    id:"fhfufu",
    name:"Aeiyan",
    password:5269226526,
    role:"user",
    isFeePaid:true
}
// const { id,name,role,isFeePaid}=user
// const userWithOutPassword={
//     id:id,
//     name:name,
//     role:role,
//     isFeePaid:isFeePaid
// }
//rest operator

// const numbers =[1,2,3,4,5,6,7,8,9,10]
// const {password,...newObj}=user
// const [number1,...restnumber]=numbers

// console.log(number1,restnumber)


// function sum(number1=20,numbers2=30){
// console.log(number1 +numbers2)
// }


// sum()


const userInfo={
    name:"Aeiyan",
    age:21,
   address: {
    city:{
        city1:{
            name:"hyd"
        }
    }
   }
}

console.log(userInfo?.address?.city?.city1?.name)
console.log("this code should run")