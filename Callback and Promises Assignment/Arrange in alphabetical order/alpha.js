/*Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order. */


function getBookTitles(books, callback) {
    const titles = books.map((book) => book.title);
    callback(titles.sort());
  }
  
  const books = [
    { title: "A Great", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Catcher in the Rye", author: "J.M", year: 2010 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  
  function logBookTitles(titles) {
    console.log("Titles in alphabetical order:");
    console.log(titles.join("\n"));
  }
  
  getBookTitles(books, logBookTitles);
  
 
 