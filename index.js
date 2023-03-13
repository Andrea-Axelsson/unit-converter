/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputValue = 0

const feet = 3.281  
const gallon = 0.264
const pound = 2.204

const meter = 0.3048
const liter = 3.78541
const kilogram = 0.45359237

const convertBtn = document.getElementById("convert-btn")
let numberToConvert = document.getElementById("number-to-convert")
let meterFeet = document.getElementById("meter-feet")
let literGallons = document.getElementById("liter-gallons")
let kiloPounds = document.getElementById("kilo-pounds")


convertBtn.addEventListener("click", function(){
    inputValue = numberToConvert.value  
    
    let meterToFeet = feet * inputValue
    let literToGallon = gallon * inputValue
    let kiloToPound = pound * inputValue
    
    let feetToMeter = meter * inputValue
    let gallonToLiter = liter * inputValue
    let poundToKilo = kilogram * inputValue
       
    /* meterFeet.textContent = inputValue + " meters = " + meterToFeet + " feet | " + inputValue + " feet = " + feetToMeter + " meters" */
    
    meterFeet.textContent = `${inputValue} meters = ${meterToFeet.toFixed(3)} feet | ${inputValue} feet = ${feetToMeter.toFixed(3)}  meters`
    
    literGallons.textContent = `${inputValue} liters = ${literToGallon.toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiter.toFixed(3)}  liters`
    
    kiloPounds.textContent = `${inputValue} kilos = ${kiloToPound.toFixed(3)} pounds | ${inputValue} pounds = ${poundToKilo.toFixed(3)}  kilos`
    
})
