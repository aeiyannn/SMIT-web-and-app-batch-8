const inputValue=document.getElementById("display")

const displayValue =(n)=>{
    inputValue.value+=n 
console.log(n)

}

function calculate(){
    inputValue.value= eval(inputValue.value)

   
}
function clearAllData(){
    inputValue.value=""
}