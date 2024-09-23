
// // // NodeList = Static collection of HTML elements ByteLengthQueuingStrategy(id,class,elements)
// // //            Can be created by using querySelectorAll()
// // //            similar to an Array,but No(map,filter,reduce)
// // //            nodeList won't update to automatically reflect changes

let buttons =   document.querySelectorAll(".myButtons");
// // // console.log(buttons);

// // // buttons.forEach((button)=>{
// // //     button.style.backgroundColor = "green";
// // //     button.textContent+="😁";
// // // })

// // // //Click event listner
// // // buttons.forEach((button)=>{
// // //     button.addEventListener("click",event =>{
// // //         event.target.style.backgroundColor = "tomato";
// // //         event.target.textContent+="😁";
// // //     })
// // // })

// // //MOUSEOVER AND OUT
// // buttons.forEach((button)=>{
// //     button.addEventListener("mouseover",event =>{
// //         event.target.style.backgroundColor = "tomato";
        
// //     })
// //     button.addEventListener("mouseout",event =>{
// //         event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
        
        
// //     })
// // })
// //ADD AN ELEMENT
// const newButton = document.createElement("button");//STEP 1
// //Step2
// newButton.textContent = "Button 5";
// //Step3
// newButton.classList="myButtons";
// //Step 4
// document.body.appendChild(newButton);
// buttons =   document.querySelectorAll(".myButtons");
// console.log(buttons);

//REMOVE AN ELEMENT
buttons.forEach((button)=>{
    button.addEventListener("click",event =>{
        event.target.remove();
        buttons =   document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})