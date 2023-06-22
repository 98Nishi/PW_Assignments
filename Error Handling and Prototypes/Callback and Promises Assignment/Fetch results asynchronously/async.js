/*Write a function that asynchronously fetches data from an API [ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console. */

function fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
fetchTodo();  

