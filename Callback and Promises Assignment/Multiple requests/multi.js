/*Create an asynchronous function that retrieves data from two different API endpoints: "https:// jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs. */

async function fetchCombinedData() {
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
      ]);
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
  
      // convert todo and details is an object 
      const combinedData = {
        todo: todoData,
        post: postData
      };
  
      // print this object 
      console.log(combinedData);
    } catch (error) {
      console.error(error);
    }
  }
  
  
  fetchCombinedData();