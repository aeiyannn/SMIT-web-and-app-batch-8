// isMangerExist = true
// isCashier1Exist = false
// isCashier2Exist = true

// var isMangerExist=false
// var isCashier1Exist=true
// var isCashier2Exist=true
// console.log(!isMangerNotExist)

// if((isCashier1Exist  || isCashier2Exist) && isMangerNotExist  ){
//     console.log("alert Manger is coming")
// }



// var isLogin = false
// if(!isLogin){
//     console.log("Navigate to Home page")
// }
// else {
//     console.log("Login page")
// }

var fruitInput = prompt("Enter any green color fruit")


if(fruitInput.toLowerCase() ==="watermelon") {
    console.log("This fruit is green")

}
else {
    if(fruitInput.toLowerCase() ==="apple"){
        console.log("Sorry !This fruit is also Green but not meet our application critera")
    }
    else {
        console.log("This fruit is not green")
    }
}
