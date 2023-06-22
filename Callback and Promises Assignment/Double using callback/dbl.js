/* Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback. */


function doubleArray(array, callback) {
    return array.map(callback);
}


// callback  in doublearray
function double(num) {
return num * 2;
}

const array = [1, 2, 3, 4, 5];

// calling the function 
console.log(doubleArray(array, double)); 

//output [ 2, 4, 6, 8, 10 ]

