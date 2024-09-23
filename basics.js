// // // // TERNARY OPERATOR
// // // let age = 1;
// // //  let message=age >= 18 ? "You are an adult" :"You are not an adult";
// // // console.log(message);

// // // //SWITCH STATEMENT
// // let day="pizza";
// // switch(day){
// //     case 1:
// //         console.log("Monday");
// //         break;
// //     case 2:
// //         console.log("Tuesday");
// //         break;
// //     case 3:
// //         console.log("Wednesday");
// //         break;
// //     case 4:
// //         console.log("Thursday");
// //         break;
// //     case 5:
// //         console.log("Friday");
// //         break;
// //     case 6:
// //         console.log("Saturday");
// //         break;
// //     case 7:
// //         console.log("Sunday");
// //         break;
// //     default:
// //         console.log(`${day} is not a day`);
// // }
// let testScore = 90;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
//     default:
//         letterGrade = "F";
// }
// console.log(`You got a ${letterGrade}`);
//STRING METHODS: ALLOW YOU TO MANIPULATE AND WORK WITH TEXT(STRINGS)
// let userName="Lakshy77";

// console.log(userName.charAt(0));
// console.log(userName.indexOf("7"));
// console.log(userName.lastIndexOf("7"));
// console.log(userName.length);
// userName = userName.trim();
// userName = userName.toUpperCase();
// userName = userName.toLowerCase();
// let result = userName.startsWith(" ");
// console.log(userName);
// let result = userName.endsWith(" ");
//  let result = userName.includes("77");

// if(result){
//     // console.log("The string starts with a space");
//     console.log("The string contains 77");
// }
// else{
//     console.log(userName);
// }
// let phoneNumber = "123-456-7890";
// // let formattedNumber = phoneNumber.replaceAll("-","");
// // let formattedNumber = phoneNumber.padStart(15,"0");
// let formattedNumber = phoneNumber.padEnd(15,"0");


// console.log(formattedNumber);

//STRING SLICING = CREATING A SUBSTRING FROM A PORTION OF ANOTHER STRING
// const FullName="Lakshy Jain";
// // let firstName = FullName.slice(0,6);
// // let lastName = FullName.slice(7,11);
// // let firstChar= FullName.slice(0,1);
// // console.log(firstName);
// // console.log(lastName);
// // console.log(firstChar);
// let firstName = FullName.slice(0, FullName.indexOf(" "));
// let lastName = FullName.slice(FullName.indexOf(" ")+1);
// console.log(firstName);
// console.log(lastName);
// const email = "lakshy.jain@outlook.com";
// let username = email.slice(0,email.indexOf("@"));
// console.log(username);
// let domain = email.slice(email.indexOf("@")+1);
// console.log(domain);

//METHOD CHAINING = CALLING ONE METHOD AFTER ANOTHER IN ONE CONTINUOUS LINE OF CODE
// let username = window.prompt("Enter your Username: ");
// //------------NO METHOD CHAINING-------


// // username = username.trim();
// // let letter = username.charAt(0);
// // letter = letter.toUpperCase();

// // let extraChars = username.slice(1);
// // extraChars = extraChars.toLowerCase();

// // username = letter + extraChars;
// // console.log(username);
// //------------METHOD CHAINING-------
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);   
//LOGICAL OPERATORS->
//AND-&&
//OR-||
//NOT-!
// let a = 10;
// let b = 20;
// let c = 30;
// let d = 40;
// console.log(a<b && b<c && c<d);
// console.log(a<b || b<c || c<d);
// console.log(!(a<b && b<c && c<d));
// === STRICT EQUALITY OPERATOR(COMPARE IF VALUES & DATATYPES ARE EQUAL)
//= ASSIGNMENT OPERATOR
// == COMPARISION OPERATOR(COMPARE IF VALUES ARE EQUAL)
//!= INEQUALITY OPERATOR
// !== STRICT INEQUALITY OPERATOR
