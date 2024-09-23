/*console.log(`Hello`)
console.log(`I like pizza`)

window.alert(`This is an alert`)
window.alert(`I like pizza`)

// This is a comment
document.getElementById("myH1").textContent=`Hello`
document.getElementById("myP").textContent="I like pizza"
Variables = a cointainer that stores a value.
behaves as if it were the value it cointains

1.Declaration letx;
2.Assignment  x=100;
let x;
let y;
x=100;
console.log(x);
let age = 25;
let price = 10.99;
let gpa=2.1;
console.log(typeof gpa);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your GPA is ${gpa}`);
let firstName = "John";
console.log(typeof firstName);
console.log(`Your name is ${firstName} `);*/
 //   let online=true;
 //   console.log(typeof online);
 //   console.log(`Are you online? ${online}`);

//VARIABLES
 /*let fullName="Lakshy Jain";
let age= 21;
let isstudent=true;

document.getElementById("p1").textContent= `Your Name is ${fullName}`;
document.getElementById("p2").textContent= `You are ${age} years old`;
document.getElementById("p3").textContent= `Are you a student ${isstudent}`;*/
//ARITHMETIC OPERATORS
let student = 30;
//console.log(student);
//console.log(student+1);
//console.log(student-1);
//console.log(student*2);
//console.log(student/2);
//Exponent
//student=student ** 2;
//let extra_student=student%4;
//console.log(extra_student);
 //OPERATOR PRECEDENCE
 //1. Parenthesis()
 //2. Exponent
 //3. Multiplication and Division AND MODULE
 //4. Addition and Subtraction

 //HOW TO GET USER INPUT
 //EAST WAY=WINDOW PROMPT
 //2.PROFFESSIONAL WAY=HRML TEEXT BOX
 /*let username;

 //username= window.prompt("Enter your Username");
document.getElementById("mySumbit").onclick= function(){
    username=document.getElementById("myText").value;
    document.getElementById("myh1").textContent=`Hello ${username}`
}
//TYPE CONVERSION
let age = window.prompt("Enter your age");
age=Number(age);
age+=1;
console.log(age);
console.log(typeof age);
let x = "pizza";
let y = "pizza";
let z = "pizza";

x=Number(x);
y=String(y);
z=Boolean(z);
console.log(x);
console.log(typeof x);
console.log(y);
console.log(typeof y);
console.log(z);
console.log(typeof z);*/
//const=a variable that can't be charged
const PI = 3.14159;
let radius;
let circumference;
let AREA;
// radius = window.prompt("Enter the radius of the circle");
radius=Number(radius);

document.getElementById("mySumbit").onclick= function(){
    radius = document.getElementById("myText").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("myh3").textContent=`The circumference is ${circumference}cm`
}
document.getElementById("mySumbit4").onclick= function(){
    radius = document.getElementById("myText5").value;
    radius=Number(radius);
    AREA=PI*radius*radius;
    document.getElementById("myh31").textContent=`The Area is ${AREA}cm`
}