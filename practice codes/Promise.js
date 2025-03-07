// let firstPromise = new Promise ((resolve, reject) => {
//     console.log("abdul");
//     resolve(1000);
// });

let First = new Promise ((resolve, reject) => {
    let success = true;
    if(success){
        resolve("OK!")
    }
    else{
        reject("Error!")
    }
});

// The purpose of using .then() and .catch() is to handle the result of a Promise once it is either resolved (successful) or rejected (failed). */

First.then((message) =>{          
    console.log("first msg: " + message);
    return 7;
}).then((message) => {
    console.log("second msg: "+ message)
}).catch((error) => {
    console.error("Fuck!");
});
