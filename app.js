const body =document.getElementsByTagName("body")


function GetInputData(){
    event.preventDefault()
    const input=document.getElementById("input")
    console.log(input.value)
}

const h1=document.createElement("h1")

body[0].append(h1)

h1.textContent="Hello World from Dom"
console.log(h1)
