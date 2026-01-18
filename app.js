// fetch("https://api.weatherapi.com/v1/current.json?key=1f4ee1dd4b6f4d4aaac142934261201&q=karachi&aqi=no")
// .then((res)=>{
//    return res.json()
// }).then((data)=>{
//     console.log(data)
// })
// .catch(()=>{
//     console.log("failed")
// })

const temp=document.getElementById("temp")
const city=document.getElementById("city")
const humidity=document.getElementById("humidity")
const windSpeed=document.getElementById("windspeed")
const inputData=document.getElementById("inputData")

async function getWetherData() {
    try {
const cityName =inputData.value
console.log(cityName)
        const resp = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f4ee1dd4b6f4d4aaac142934261201&q=${cityName}&aqi=no`)
        const formatedRes = await resp.json()
        temp.textContent=`${formatedRes.current.temp_c}°C`
        city.textContent=formatedRes.location.name
        humidity.textContent=`${formatedRes.current.humidity}%`
        windSpeed.textContent=`${formatedRes.current.wind_kph}Km/h`


    }
    catch (e) {
        console.log("some thing wrong", e)
    }

}


