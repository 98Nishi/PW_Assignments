// Access random elements.The function should take the array as an argument, destructure it into three variablesrepresenting the first, second, and last elements, and then return an array with these three values. For example,if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].

function randomElement(arr) {
    const [first, second,...rest] = arr;
    const last = rest.pop();
    return [first, second , last];
}

const newArray = randomElement([1, 2, 3, 4, 5]);
console.log(newArray); //output = [1,2,5]