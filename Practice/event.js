// let btn = document.getElementById('btn'); //here btn is declared globally

// function changetext() {
//     btn.textContent = "Rubish!"
//     // let btn = document.getElementById('btn');
// }

// // let btn = document.getElementById('btn'); //reference

// btn.addEventListener('click', changetext);


// ----------------------------------

            // Default Action 
// let anchorElement = document.getElementById('anchor');

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = 'Error';
// })

// ----------------------------------

                    // event_target 

// let touch = document.querySelector("#cmp");

// function clickable(event){
//     alert("clicked on: " + event.target.textContent); --->  // event: click && target: on which clicking
// }

// touch.addEventListener('click', clickable);


let touch = document.querySelector("#cmp");

function clickable(event){
    if(event.target.nodeName === 'SPAN') {  // SPAN-->Capital,  nodeName--> property

        alert("clicked on: " + event.target.textContent);  // event: click && target: on which clicking
    }
}

touch.addEventListener('click', clickable);