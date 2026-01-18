// fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
// return res.json()
// }).then((formatedData)=>{
// console.log(formatedData)
// }).catch(() => {
// console.log("some thing went wrong")
// })

async function ApiCall(){
const res= await fetch("https://jsonplaceholder.typicode.com/users")
const data=await res.json()
console.log(data)

}

ApiCall()



