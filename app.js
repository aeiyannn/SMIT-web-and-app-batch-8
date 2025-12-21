// const activeEle=document.getElementsByTagName("h1")
// activeEle[0].classList.toggle("active")
// activeEle[0].classList.toggle("active")
// activeEle[0].classList.toggle("active")

const image=document.getElementById("uniqueImage")
// image.setAttribute("src","https://fastly.picsum.photos/id/221/200/300.jpg?hmac=vFrrajnPFCrr5ttjepVTsUDWzoo-orpnXOsqdqAd0LU")

// const btn=document.getElementsByTagName("button")
// btn[0].setAttribute("disabled","true")
// btn[0].removeAttribute("disabled")


const btn=document.getElementsByTagName("button")
const userInput=document.getElementById("userData")
let isNewImage=false
btn[0].addEventListener("click",()=>{
  userInput.value="New Value"

    // if(isNewImage){
    //     image.setAttribute("src","https://fastly.picsum.photos/id/256/200/300.jpg?hmac=6-SQmUqIECHQ4QadM7mAYY3sHPH5r_8e2pCBs7V67Sc")

    // }else{
    // image.setAttribute("src","https://fastly.picsum.photos/id/91/200/300.jpg?hmac=MJmqvWth15jZIlWiHwt01J_qoMRgygGRm0nf1adZtdE")


    // }
    // isNewImage=!isNewImage
   
})


// const userInput=document.getElementById("userData")
// userInput.addEventListener("input",(event)=>{
//     console.log(event.target.value)
// })