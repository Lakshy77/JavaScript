// // JSON = (JS object notation) data-interchange format
//     // used for exchanging data between a server and a web application
//     // JSON files{key:value} OR {value1,value2,value3}    
//     // JSON.stringify() converts a JavaScript object or value to a JSON string
//     // JSON.parse() converts a JSON string to a JavaScript object

//     const jsonnames =["SpngeBob","Lakshy","Mehul"];
//     const jsonperson = `{
//         "name":"SpngeBob",
//         "age": 30,
//         "isEmployed": true,
//         "spouse": {
//             "name": "Squidward",
//             "age": 40
//         }
//     }`;
//     const jsonpeople =`[{
//         "name":"SpngeBob",
//         "age": 30,
//         "isEmployed": true
//     },
//     {
//         "name":"Patrick",
//         "age": 25,
//         "isEmployed": false
//     },
//     {
//         "name":"Squidward",
//         "age": 40,
//         "isEmployed": true
//     }
//     ]`;
//     // const jsonString = JSON.stringify(jsonnames);
//     // const parsedData = JSON.parse(jsonnames);
//     // const parsedData = JSON.parse(jsonperson);
//     const parsedData = JSON.parse(jsonpeople);

//     console.log(parsedData);

fetch(`PEOPLE.json`)
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error));