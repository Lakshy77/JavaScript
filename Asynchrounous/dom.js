// // // // // // // // //Dom- document object model
// // // // // // // // //     object{} that represents the page you see in the web browser
// // // // // // // // //     and provides you with an API to interact with it.
// // // // // // // // //     Web browser constructs the Dom when it loads an HTML document,
// // // // // // // // //     and structure all the elements in a tree-like representation.
// // // // // // // // //     Javascript can access the DOM to dynamically
// // // // // // // // //     change the content,structure,and style of a web page.

// // // // // // // // // document.getElementById()
// // // // // // // // // console.log(document);
// // // // // // // // document.title = "MY website"
// // // // // // // // console.dir(document);
// // // // // // // //------------.firstElementChild--------------------
// // // // // // // const element = document.getElementById("fruits");
// // // // // // // const firstChild = element.firstElementChild;
// // // // // // // firstChild.style.backgroundColor = "red";
// // // // // // FOR ALL FIRST CHILD SELECTOR
// // // // //  const ulElement = document.querySelectorAll("ul");

// // // // // // ulElement.forEach((ulElement) => {
// // // // // //     const firstChild = ulElement.firstElementChild;
// // // // // //     firstChild.style.backgroundColor = "yellow";
   
// // // // // // })

// // // // // // ulElement.forEach((ulElement) => {
   
// // // // // //     const nextSibling = ulElement.nextElementSibling;
// // // // // //     nextSibling.style.backgroundColor = "green";
// // // // // // })
// // // // // // const element4 = document.getElementById("fruits");
// // // // // // const firstChild = element4.firstElementChild;
// // // // // // firstChild.style.backgroundColor = "red";
// // // // // const element = document.getElementById("apple");
// // // // // const nextSibling = element.nextElementSibling;
// // // // // nextSibling.style.backgroundColor = "green";
// // // // const element = document.getElementById("banana");
// // // // const previousSibling = element.previousElementSibling;
// // // // previousSibling.style.backgroundColor = "yellow";
// // // //--------Parentelement----------
// // // const element = document.getElementById("apple");
// // // const parentElement = element.parentElement;
// // // parentElement.style.backgroundColor = "yellow";

// // //---------children---------
// // const element = document.getElementById("fruits");
// // const children = element.children;
// // // console.log(children);
// // Array.from(children).forEach((child) => {
// //     child.style.backgroundColor = "yellow"; 
// // })
// // const element4 = document.getElementById("vegetables");
// // const children4 = element4.children;
// // // console.log(children);
// // Array.from(children4).forEach((child) => {
// //     child.style.backgroundColor = "pink"; 
// // })
// // const element5 = document.getElementById("desserts");
// // const children5 = element5.children;
// // // console.log(children);
// // Array.from(children5).forEach((child) => {
// //     child.style.backgroundColor = "red"; 
// // })

// const element = document.getElementById("fruits");
// const children = element.children;
// children[0].style.backgroundColor = "yellow";
// children[1].style.backgroundColor = "pink";
// children[2].style.backgroundColor = "red";