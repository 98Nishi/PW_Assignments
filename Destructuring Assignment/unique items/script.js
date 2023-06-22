// 2. Only unique items are allowed.
// You are building a program that takes an array of numbers as input and you need to remove all the duplicates
// from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.


 
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
const arr = [1,2,1,2,,2,1,5,5,6,6,4,3,22,34,33,33]
console.log(removeDuplicates(arr));