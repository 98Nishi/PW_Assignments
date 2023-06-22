/* Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an error message on the webpage. */


  fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error(error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred while fetching data.';
    document.body.appendChild(errorMessage);
  });
