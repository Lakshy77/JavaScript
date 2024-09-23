// //Callback Hell = Situation in js where callbacks are nested within other callbacks
//                 //   to the degree within other callbacks to the degree where the
//                 //   code is difficult to read
                
// function task1(callback){
//     setTimeout(function(){
//         console.log("Task 1");
//         callback();
//     },2000)
// }
// function task2(callback){
//     setTimeout(function(){
//         console.log("Task 2");
//         callback();
//     },1000)
// }
// function task3(callback){
//     setTimeout(function(){
//         console.log("Task 3");
//         callback();
//     },3000)
// }
// function task4(callback){
//     setTimeout(function(){
//         console.log("Task 4");
//         callback();
//     },4000)
// }
// // task1();
// // task2();
// // task3();
// // task4();

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log("All tasks completed");
//             })
//         })
//     })
// })
// // console.log("All tasks completed");

//Promise = an object that manages asynchronous operations.
            // wrap a Promise object around (async code)
            // "I promise to return a value"
            // PENDING -> RESOLVED OR REJECTED
            // new Promise((resolve,reject)=>{asynchronus code})
//DO THESE CHORES IN ORDER
//1.WALK THE DOG
//2.WASH THE CAR
//3.CLEAN THE HOUSE

function walkDog(){
    // setTimeout(()=>{
    //     console.log("You walk the Dog");
    //     callback();
    // },1500
    // );
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the Dog");
            }
            else{
                reject("You did not walk the Dog");
            }
        },1500
        );
    })
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchencleaned = true;
            if(kitchencleaned){
                resolve("You clean the kitchen");

            }
            else{
                reject("You did not clean the kitchen");
            }
        },2500
        );
    })
}
function takeOutTrash(){
    // setTimeout(()=>{
    //     console.log("You take out the Trash");
    //     callback();
    // },1500
    // );
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashTakenOut = false;
            if(trashTakenOut){
                resolve("You take out the Trash");
            }
            else{
                reject("You did not take out the Trash");
            }
        },1500
        );
    })
}

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("All tasks completed");
//         })
//     })
// })
walkDog().then(value =>{console.log(value); return cleanKitchen()})
        .then(value =>{console.log(value); return takeOutTrash()})
        .then(value =>{console.log(value); console.log("All tasks completed")})
        .catch(error => console.error(error));