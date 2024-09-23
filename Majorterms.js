// // // // // // // // //CALLBACK
// // // // // // // // // hello(leave);
// // // // // // // // // // goodBye();
// // // // // // // // // function hello(callback){
// // // // // // // // //     console.log("Hello");
// // // // // // // // //     callback();
// // // // // // // // // }
// // // // // // // // // function leave(){
// // // // // // // // //     console.log("Leave");
// // // // // // // // // }


// // // // // // // // // function goodBye(){
// // // // // // // // //     console.log("GoodBye");
// // // // // // // // // }
// // // // // // // // // sum(displayConsole , 10,20);
// // // // // // // // sum(displayBrowser , 10,20)

// // // // // // // // function sum(callback , x,y){
// // // // // // // //     let result = x+y;
// // // // // // // //     callback(result);
// // // // // // // // }

// // // // // // // // function displayConsole(result){
// // // // // // // //     console.log(result);
// // // // // // // // }
// // // // // // // // function displayBrowser(result){
// // // // // // // //     document.getElementById("myH1").textContent=result;
// // // // // // // // }

// // // // // // // //FOR EACH()->METHOD USED TO ITERATE OVER THE ELEMENTS OF AN 
// // // // // // // //ARRAY AND APPLY A SPECIFIED FUNCTION(CALLBACK)TO EACH ELEMENT

// // // // // // // // let numbers = [1,2,3,4,5,6,7,8,9,10];
// // // // // // // // // numbers.forEach(double);
// // // // // // // // numbers.forEach(square);

// // // // // // // // numbers.forEach(display);


// // // // // // // // function double(element,index,array){
// // // // // // // //     array[index]=element*2;
// // // // // // // // }
// // // // // // // // function square(element,index,array){
// // // // // // // //     array[index]=Math.pow(element,2);
// // // // // // // // }
// // // // // // // // function display(element){
// // // // // // // //     console.log(element);
// // // // // // // // }
// // // // // // // let fruits = ["apple","banana","mango","orange"];

// // // // // // // // fruits.forEach(upperCase);

// // // // // // // // fruits.forEach(lowerCase);
// // // // // // // fruits.forEach(capitalize);

// // // // // // // fruits.forEach(display);
// // // // // // // function upperCase(element,index,array){
// // // // // // //     array[index]=element.toUpperCase();
// // // // // // // }
// // // // // // // function lowerCase(element,index,array){
// // // // // // //     array[index]=element.toLowerCase();
// // // // // // // }
// // // // // // // function capitalize(element,index,array){
// // // // // // //     array[index]=element.charAt(0).toUpperCase() +element.slice(1);
// // // // // // // }
// // // // // // // function display(element){
// // // // // // //     console.log(element);
// // // // // // // }

// // // // // // //MAP()= accepts the callback and applies that function to each
// // // // // // // element of an array,then returns a new array
// // // // // // const numbers = [1,2,3,4,5];

// // // // // // const squares=numbers.map(square);
// // // // // // const cubes=numbers.map(cube);

// // // // // // // const cubes=numbers.map(cubes);
// // // // // // console.log(squares);
// // // // // // console.log(cubes);

// // // // // // function square(element){
// // // // // //    return Math.pow(element,2);
// // // // // // }
// // // // // // function cube(element){
// // // // // //     return Math.pow(element,3);
// // // // // //  }
// // // // // const students = ["Spongebob", "Patrick", "Sandy", "Squidward"];
// // // // // const uppercase1 = students.map(uppercase);
// // // // // const Lowerercase1 = students.map(lowercase);

// // // // // console.log(uppercase1);
// // // // // console.log(Lowerercase1);
// // // // // function uppercase(element){
// // // // //     return element.toUpperCase();
// // // // // }
// // // // // function lowercase(element){
// // // // //     return element.toLowerCase();
// // // // // }
// // // // const dates = ["2020-01-30", "2020-02-21", "2020-03-11"];
// // // // const formatteddates = dates.map(formatDate);

// // // // console.log(formatteddates);

// // // // function formatDate(element) {
// // // //     const parts=element.split("-");
// // // //     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// // // // } 
// // // // .filter() = creates a new array by filtering out elements
// // // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // const evenNumbers = numbers.filter(even);
// // // console.log(evenNumbers);
// // // const oddNumbers = numbers.filter(odd);
// // // console.log(oddNumbers);
// // // function even(element) {
// // //   return element % 2 === 0;
// // // }
// // // function odd(element) {
// // //   return element % 2 !== 0;
// // // }
// // const words = ["apple", "banana", "cherry", "date", "elderberry"];
// // const shortwords = words.filter(short);
// // console.log(shortwords);
// // function short(element) {
// //   return element.length <= 6;
// // }
// //.reduce()= reduces an array to a single value
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let total = arr.reduce(sum);
// console.log(`$${total}`)
// function sum(accumalator,element) {
//   return accumalator + element;
// }
const grades = [75, 80, 105, 90, 95, 100];
const maximum = grades.reduce(max);
const minimum = grades.reduce(min);
console.log(`The maximum grade is ${maximum}`);
console.log(`The minimum grade is ${minimum}`);
function min(accumalator, element) {
    return Math.min(accumalator, element);
}
function max(accumalator, element) {
    return Math.max(accumalator, element);
}
