// //Classlist - ele,emt property in js used to interact with an element's list
// //            list of classes(CSS Classes)
// //            Allows you to make reusable classes for many elements
// //               add() - add a class to an element
// //               remove() - remove a class from an element
// //               toggle() - add a class if it doesn't exist, remove if it does
// //               contains() - check if a class exists in an element
// //               replace() - replace a class with another class

// const myButton = document.getElementById("myButton");
// const myH1 = document.getElementById("myH1");

// // // myButton.classList.add("enabled");
// // // myButton.classList.remove("enabled");
// // myButton.addEventListener("mouseover", () => {
// //     event.target.classList.add("hover");
// // })
// // myButton.addEventListener("mouseout", () => {
// //     event.target.classList.remove("hover");
// // })
// // // myButton.classList.add("hover");

// myButton.classList.add("enabled");
// myH1.classList.add("enabled");
// myH1.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😉";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
    
// })
// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😉";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
    
// })

let Buttons = document.querySelectorAll(".myButton");
Buttons.forEach(button => {
    button.classList.add("enabled");
});
Buttons.forEach(button => {
    button.classList.remove("enabled");
})
Buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
});

Buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
});
Buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.classList.add("disabled");
    })
    
})

Buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "😉";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }

    })
})