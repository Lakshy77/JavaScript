// // //ARRAY = A VARIABLE LIKE STRUCTURE THAT CAN HOLD MORE THAN 1 VALUE
// // let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
// // console.log(fruits);
// // // fruits.push("Grapes");
// // // console.log(fruits);

// // // fruits.pop();
// // // console.log(fruits);

// // // fruits.unshift("Kiwi");
// // // console.log(fruits);
// // // fruits.shift();
// // // console.log(fruits);

// // // fruits.splice(2, 0, "Peach");
// // // console.log(fruits);

// // // fruits.splice(2, 1);
// // // console.log(fruits);
// // // fruits.sort();
// // // console.log(fruits);

// // let numoffruits = fruits.length;
// // console.log(numoffruits);
// // let index = fruits.indexOf("Mango");
// // console.log(index);
// // //ARRAY INDEXING
// // // console.log(frui[0]);
// // // console.log(frui[1]);
// // // console.log(frui[2]);
// // // console.log(frui[3]);4

// //SPREAD OPERATOR-> ... ALLOWS AN ITERABLE SUCH AS AS ARRAY OR STRING TO BE EXPANDED ITO
// //SEPERATE ELEMENTS(UNPACKS THE ELEMENTS)
// //  let arr1 = [1, 2, 3,4,6]
// //  let max = Math.max(...arr1)
// //  let min = Math.min(...arr1)
// //  console.log(max);
// //  console.log(min);
// // let username = "Lakshy Jain";
// // // let letters = [...username];
// // let letters = [...username].join("-");

// // console.log(letters);
// // console.log(...letters);
// // let fruits = ["Apple", "Mango", "Orange", "Banana"];
// // let vegetables = ["Potato", "Tomato", "Cabbage", "Carrot"];
// // let food = [...fruits, ...vegetables,"eggs"];
// // console.log(food);

// // Rest parameter = bundles the  seperate elements into an array
// // function openFridge(...foods){
// //     // console.log(foods);
// //     console.log(...foods);
// // }
// // const food1="pizza";
// // const food2="chicken";
// // const food3="cake";
// // const food4="Sushi";
// // const food5="Ramen";
// // openFridge(food1,food2,food3,food4,food5);   
// // function sum(...numbers){
// //     let result=0;
// //     for(let number of numbers){
// //         result+=number;
// //     }
// //     return result;
// // }
// // const total = sum(1,2,3,4,5,6,7,8,9,10);
// // console.log(total);

// const fullname = combinestring("Mr.","Spongebob","Square","pants");
// function combinestring(...names){
//     return names.join(" ");
//     // console.log(...names);
// }
// console.log(fullname);
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = arr.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(sum);
