/*You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!".For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".*/

function greetingPromise(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Please provide a name.");
      }
    });
  }
  
  greetingPromise("Disha")
    .then((message) => {
      console.log(message); // Output: "Hello, Disha!"
    })
    .catch((error) => {
      console.log(error); // Output: "Please provide a name"
    });