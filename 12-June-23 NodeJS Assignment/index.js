/*Q1:- In this coding challenge, your task is to create a package.json file for your project using the npm init command. */

// package.json file has created.

/*Q2:- In the same project directory created in the above assignment, your task is to create a new file index.js and
using the fs module add information about Node.js architecture to a new file nodejs_architecture.txt. */

const fs = require('fs');

fs.writeFile('nodejs_architecture.txt','Node.js is a runtime environment that uses a single-threaded event loop and non-blocking I/O operations, making it suitable for building scalable and high-performance server-side applications. It is widely used for its efficiency in handling concurrent connections and real-time applications.', (err) => {
    if (err) {
        console.log("Error in creating file.", err);
    } else {
        console.log("Your file created Succefully! ");
    }
})

// Q3:-Created a Read file

fs.readFile("nodejs_architecture.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Error in reading file.", err);
    } else {
        console.log(data);
    }
})

// Q4:-your task is to access the existing nodejs_architecture.txt file and use the fs module to append additional data to it.

fs.appendFile("nodejs_architecture.txt", "** Here are some advantage of NodeJs,  Node.js is an event-driven, non-blocking, and lightweight JavaScript runtime that allows for efficient server-side application development. Its key advantages include high performance due to the V8 engine, asynchronous programming capabilities, and scalability for handling concurrent connections. It is particularly well-suited for building real-time applications, microservices, and APIs.", (err) => {
    if (err) {
        console.log("There is an issue in appending content.", err);
    }
})


// Q5:-

fs.unlink("nodejs_architecture.txt", (err) => {
    if (err) {
        console.log("There is an error in deleting file.");
    }
     console.log("File Deleted SuccessFully!");
})

