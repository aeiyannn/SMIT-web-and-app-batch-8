// const btn =document.getElementById("btn")
// btn.addEventListener('click',()=>{
// btn.textContent="New Click"
const todoList=document.getElementById("todoList")
const Inputvalue=document.getElementById("todoInput")
let  isUpdated=false
// })

function onClickBtn(xyz){
    xyz.textContent="Text Changed"
}
function addTodo(ele){
  if(isUpdated){
    return
  }
    let cleanInput=Inputvalue.value
    if(Inputvalue.value ==""){
        alert("Invalid Value")
        
    } 
    else {
  const li =document.createElement("li")
  const delbtn=document.createElement("button")
   const updatebtn=document.createElement("button")
   const text=document.createElement("i")
  text.innerText=Inputvalue.value
  

  delbtn.addEventListener("click",()=>{
   li.remove()
  })
   updatebtn.addEventListener("click",()=>{
isUpdated=true
   Inputvalue.value=text.textContent
   ele.textContent="Update"
   ele.addEventListener("click",()=>{
    text.textContent=Inputvalue.value
    ele.textContent="Add +"
    isUpdated=false
    
   })

  })
    delbtn.textContent="Delete"
  updatebtn.innerText="Update"
  li.append(text)
  li.append(delbtn)
  li.append(updatebtn)
  todoList.append(li)
  Inputvalue.value=""

    }
}
