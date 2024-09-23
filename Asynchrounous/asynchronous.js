// // //synchronous = Executes line by line consecutively in a sequential manner
// // //                Code that waits for an operation to complete.
// // //Asynchronous = Allows multiple operations to be performed concurrently without waiting
// // //               Doesn't block the exceution flow and allows the program to continue
// // //


// // // setTimeout(()=> console.log("task 1"),3000);

// // // console.log("task 2");
// // // console.log("task 3");
// // // console.log("task 4");
// // function func1(callback){
// //     setTimeout(()=>{
// //         console.log("task 1");
// //         callback();
// //     },3000);
// // }

// // function func2(){
// //     console.log("task 2");
// //     console.log("task 3");
// // }
// // func1(func2);

// //ERROR HANDLING
//  try{
//     console.log(x);
//     //  NETWORK ERRORS
//     //  PROMISE REJECTION
//     //SECURITY ERRORS

//  }
//  catch(error){
//     console.error(error);
//  }
//  finally{
//     //this always excutes regardless of the error
//     console.log("You have reached the end of the program");
//  }
//  console.log("You have reached the end of the program");
try{
    const dividend = Number(window.prompt("Enter the dividend:"));
    const divisor = Number(window.prompt("Enter the divisor: "));
    if(divisor == 0){
        throw new Error("Divisor cannot be zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Invalid input");
    }
    const result = dividend/divisor;
    console.log(`The quotient is ${result}`);
}
catch(error){
    console.error(error);
}
finally{
    console.log("You have reached the end of the program");
}