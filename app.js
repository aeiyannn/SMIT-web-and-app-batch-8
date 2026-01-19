let isXMove = false
const winingMoves=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]
console.log(winingMoves[0][0])
function playerTurn(index) {
    const boxes = document.getElementsByClassName("box")
       if(boxes[index].textContent !== ""){
        return
    }
    if (isXMove) {
        boxes[index].textContent = "X"
        isXMove = false
    }
    else {
        boxes[index].textContent = "O"
        isXMove = true
    }
    winingMoves.forEach((value)=>{
        if( boxes[value[0]].textContent !=="" && boxes[value[0]].textContent === boxes[value[1]].textContent && boxes[value[0]].textContent === boxes[value[2]].textContent){
           alert(`${boxes[value[0]].textContent} is Win` )
        }
    })

}






