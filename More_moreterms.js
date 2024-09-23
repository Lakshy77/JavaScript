// // // // // //  const fruits = [{name:"Apple",color:"red",calories:95},
// // // // // //                 {name:"Banana",color:"yellow",calories:105},
// // // // // //                 {name:"Cherry",color:"red",calories:50},
// // // // // //                 {name:"Date",color:"brown",calories:120},
// // // // // //             {name:"Elderberry",color:"purple",calories:70}];


// // // // // // // console.log(fruits[0].name);
// // // // // // // console.log(fruits[3].color);
// // // // // // // console.log(fruits[2].calories);
// // // // // // // //DO PUSH POP AND SLICE
// // // // // // // fruits.forEach((fruit)=>{
// // // // // // //     console.log(fruit.name);
// // // // // // // })
// // // // // // //ALSO USE MAP FUNCTION
// // // // // // const yellowFruits = fruits.filter((fruit)=>fruit.color==="yellow");
// // // // // // console.log(yellowFruits);


// // // // // //SORT()=method used to sort elements of an array in place'
// // // // //         //  Sorts elements as strings in lexicographic order not alphabetical
// // // // //         // lexicographic = (alphabet + number + symbols)as strings

// // // // // // let fruits = ["Apple","Banana","Cherry","Date","Elderberry"];
// // // // // // console.log(fruits.sort());
// // // // // // console.log(fruits.reverse());
// // // // // let numbers = [1,10,5,4,7,6,9,3,2,8];
// // // // // numbers.sort((a,b)=>a-b);
// // // // // numbers1=numbers.sort((a,b)=>b-a);

// // // // // console.log(numbers);
// // // // // console.log(numbers1);
// // // // const people = [{name:"John",age:30,gpa:3.0},
// // // //                 {name:"Jane",age:25,gpa:3.5},
// // // //                 {name:"Alice",age:35,gpa:4.0},
// // // //                 {name:"Bob",age:20,gpa:2.5}
// // // // ]
// // // // // people.sort((a,b)=>a.age-b.age);
// // // // people.sort((a,b)=>a.name.localeCompare(b.name));
// // // // console.log(people);

// // // //Date objects
// // // //Use get and set
// // // const date = new Date();
// // // console.log(date);
// // // const year = date.getFullYear();
// // // console.log(year);
// // // const month = date.getMonth();
// // // console.log(month);
// // // const day = date.getDate();
// // // console.log(day);
// // // const hour = date.getHours();
// // // console.log(hour);
// // // const minute = date.getMinutes();
// // // console.log(minute);
// // // const second = date.getSeconds();
// // // console.log(second);

// // // //CLOSURES-A function defined inside of another function,
// // //            the inner function has access to the outer function's variables and scope
// // //            allow for private variables and state maintenance
// // //            used frequently in JS framework:ReadableByteStreamController,Vue,Angular
// // // function outer(){
// // //     let message = "Hello";
// // //     function inner(){
// // //         console.log(message);
// // //     }
// // //     inner();
// // // }
// // // outer();
// // function moreterms(){
// //     let count = 0;
// //     function increment(){
// //             count++;
// //             console.log(`Count increased to ${count}`);
// //         }


// //         function getcount(){
// //             return count;
// //         }
// //         return{increment,getcount};
// // }
// // const counter = moreterms();

// // counter.increment();
// // counter.increment();
// // counter.increment();

// // console.log(`The current count is ${counter.getcount()}`)
// function createGame(){
//     let score = 0;
//     function increasescore(points){
//         score+=points;
//         console.log(`Your current score is ${score} pts`);
//     }
//     function decreaseScore(points){
//         score-=points;
//         console.log(`Your current score is ${score} pts`);
//     }
//     function getScore(){
//         return score;
//     }
//     return{increasescore,decreaseScore,getScore};
// }

// const game = createGame();
// // increasescore(10);
// // increasescore(20);
// // decreaseScore(5);
// game.increasescore(10);
// game.increasescore(20);
// game.decreaseScore(5);
// console.log(`Your current score is ${game.getScore()} pts`);

//Settimeout()= function is JavaScript that allows you to schedule
                // the execution of a function after an amount of TimeRanges(milliseconds)
                // Time are approximate(varies based on the workload of the JavaScript runtime EncodedVideoChunk.)
                // //setTimeout(callback,delay);
