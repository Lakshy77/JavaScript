//EventListener=Listen for specific events to create interactive websites
//              events:click,mouseover,mouseout
//              .addEventListener("event",callback)


const mybox = document.getElementById("mybox");
const myButton = document.getElementById("myButton");
// function changeColor(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😢";

// }

// mybox.addEventListener("click", changeColor);
// mybox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😢";
//     mybox.addEventListener("click",function(event){
//         event.target.style.backgroundColor = "lightblue";
//         event.target.textContent = "WOW !AGAIN 😎";
//     });
// });
// mybox.addEventListener("mouseover",function(event){
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it! 😱";
// })
// mybox.addEventListener("mouseout",function(event){
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me😁";
// })
myButton.addEventListener("click", function(event){
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "OUCH! 😢";
    myButton.addEventListener("click",function(event){
        mybox.style.backgroundColor = "lightblue";
        mybox.textContent = "WOW !AGAIN 😎";
    });
});
myButton.addEventListener("mouseover",function(event){
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "Don't do it! 😱";
})
myButton.addEventListener("mouseout",function(event){
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = "Click Me😁";
})