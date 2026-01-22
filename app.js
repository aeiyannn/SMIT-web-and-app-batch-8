let isXMove = true
let isAi =false
const winingMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]
let board = ["", "", "", "", "", "", "", "", "",]
function playerTurn(index) {
    const boxes = document.getElementsByClassName("box")
    if (boxes[index].textContent !== "") {
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
    board[index] = boxes[index].textContent

    console.log(board)
    winingMoves.forEach((value) => {
        if (boxes[value[0]].textContent !== "" && boxes[value[0]].textContent === boxes[value[1]].textContent && boxes[value[0]].textContent === boxes[value[2]].textContent) {
            alert(`${boxes[value[0]].textContent} is Win`)
        }
    })

    if(!isAi){
        generateAIResponse()
        isAi=true
    }
    else {
        isAi=false
    }
}


function generateAIResponse() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
const formatBoard=JSON.stringify(board)
    const raw = JSON.stringify({
        "contents": [
            {
                "parts": [
                    {
                        "text": `You are a Tic-Tac-Toe AI. Input: an array of 9 values  for indexes 0–8.Values: 'X', 'O', or '' .You play as 'O'. Return ONLY one integer(0–8) for the best valid move.No text, no symbols, no formatting. Board ${formatBoard}`
                    }
                ]
            }
        ]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDyQQKc-4WLD2QeT71SziVOND2fMbmR6HU", requestOptions)
        .then((response) => response.json())
        .then((result) =>{
            const formatRespone=result.candidates[0].content.parts[0].text
            console.log(formatRespone)
            playerTurn(formatRespone)
        })
        .catch((error) => console.error(error));
}






