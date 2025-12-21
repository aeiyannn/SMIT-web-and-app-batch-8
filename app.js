var i=1

// for(var i=0; i<=10;i++){
//     console.log(i)
//     i++
// }
// while(i<=10){
//     console.log(i) //10
//     i++   //11
// }
 var i=1
// do {
// console.log(i)
// i++
// }
// while(i=10) 


var secret=9;

var i=1
var predication=+prompt("Enter any num")
while (predication!==secret) {
    predication=+prompt("Enter any num")
    i++
}
console.log("you enter correct number")