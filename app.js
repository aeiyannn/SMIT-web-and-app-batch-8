//   async function getUserData(){
//     const resp=await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data=await resp.json()
//     console.log(data)
// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   "title": "This is a testing title",
//   "body": "testing description",
//   "userId": 5
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

// fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// }



// getUserData()


async function addUserData(){
    const data=await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:{
            "title":"This is a title",
            "body":"description",
            "userId":4
        }
    })
    console.log(await data.json())
}

addUserData()

