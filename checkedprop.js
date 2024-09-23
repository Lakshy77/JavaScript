const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySumbit = document.getElementById("mySumbit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySumbit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "Your subscription is active";
    }else{
        subResult.textContent = "Please check the box to activate your subscription";
    }


    if(visaBtn.checked){
        paymentResult.textContent = "You have selected Visa";
    }
    else if(mastercardBtn.checked){
        paymentResult.textContent = "You have selected Mastercard";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You have selected PayPal";
    }
    else{
        paymentResult.textContent = "Please select a payment method";
    }
    
}


