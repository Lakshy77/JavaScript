// //-------Example 1 <h1> ---------
// //STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
// //STEP 2 ADD THE ATTRIBUTE/PROPERTIES
// newH1.textContent = "I Like Pizza";
// newH1.id="myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";
// newH1.style.fontSize = "50px";
// // //STEP 3 ADD THE ELEMENT TO THE DOM
// // // document.body.append(newH1);
// // // document.body.prepend(newH1);
// // // document.getElementById("box1").append(newH1);
// // // document.getElementById("box2").append(newH1);
// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1, box2);

// // const boxes = document.querySelectorAll(".box");
// // document.body.insertBefore(newH1, boxes[1]);
// // // REMOVE ELEMENT

// document.getElementById("box1").append(newH1);
// document.getElementById("box1").removeChild(newH1);

// //-------Example 2 <h1> ---------

// Step 1
const newListItem = document.createElement("li");
// Step 2
newListItem.textContent = "Coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightblue";
// // //step 3
// // document.body.append(newListItem);
// document.getElementById("fruits").append(newListItem);
const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, banana);