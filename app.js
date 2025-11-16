// var option  = 2
// switch (option) {
//     case 1 :
//         console.log("you select case 1")

// }

// var option = 2
//2

// if (option === 1){
//     console.log(1)

// }
// else if (option===2){
//     console.log(2)
// }
// else if (option===3){
//     console.log(3)
// }
// else {
//     console.log("Invalid number")
// }
// console.log("hello")

var option = prompt(
  "Welcome to ABC ATM \n Press 1 for with draw amount \n Press 2 to check your balance \n Press 3 to transfer money \n"
);
console.log(option);

switch (option) {
  case "1":
    var withDrawAmount=prompt("Enter your withdraw amount")
    console.log(withDrawAmount)
    alert("Transaction Success full")
    break;
  case "2":
    var balance= 2500
    alert("your balance is" + balance)
    break;
  case "3":
    var accountNumber =prompt("Enter your reciver account no")
    var amount =prompt("Enter amount")
    console.log(accountNumber,amount)
    alert("Amount Successfully transfared")
    break
    default:
    console.log("Invalid number") 

    
}
