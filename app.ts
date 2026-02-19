// interface userInfo {
//     fullName :string,
//     age:number,
//     isAdmin?:boolean
// }

// const userInfo :userInfo = {
//     fullName: "Aeiyan",
//     age: 20,
//     isAdmin:true

// }

// const adminInfo:userInfo ={
//     fullName:"Ali",
//     age:24,
//     isAdmin:true

// }
// enum role {
//     user,
//     admin,
//     superadmin
// }

// let userRole:role = role.admin


function sayHello<T>(name:T){
    return `Hello ${name}`

}

sayHello<string>()




