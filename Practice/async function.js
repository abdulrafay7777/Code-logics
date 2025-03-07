

// async function getData() {
//     setTimeout(function() {
//         console.log("Pakistan")
//     }, 2000);
// }

// getData();
// ---------------------------------------

//  Fetch APIs

// async function getData() {
//     // 'get' -> request = async
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

//     let data = await response.json();

//     console.log(data);
// }

// getData();

// ----------------------------------

//   post APIs 

fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      title: 'New Post',
      body: 'This is a new post.',
      userId: 1
    })
    
  })
    .then(response => response.json()) //resolved value in response from 'fetch'
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
  