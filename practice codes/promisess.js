

let first = new Promise ((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Promise fulfulled!");
    }
    else{
        reject("Promise Error");
    }
});

first
    .then((message) => {  //receives a message from resolve (Promise fulfulled!)
    console.log("Correct Information provided..."+ message);
    })
    .catch((error) => {
        console.log(error);
});