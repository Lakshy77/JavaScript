const temp=document.getElementById("temp");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temprature;
function convert(){
    if(toFahrenheit.checked){
       temprature=Number(temp.value);
       temprature=(temprature*9/5)+32;
       result.textContent=`Your Temprature after conversiom is ${temprature.toFixed(1)}°F`;
    }
    else if(toCelsius.checked){
        temprature=Number(temp.value);
        temprature=(temprature-32)*5/9;
        result.textContent=`Your Temprature after conversiom is ${temprature.toFixed(1)}°C`;
            
        }
    else{
        result.textContent="Please select a conversion type";
    }
}