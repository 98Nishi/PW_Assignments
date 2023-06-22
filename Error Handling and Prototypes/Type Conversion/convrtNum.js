// Write a function called convertToNumber that takes a string as an argument and returns the equivalentnumber. If the string cannot be converted to a number, the function should return the string "Invalid number".Use error handling in javascript to achieve this output.

function convertToNumber(str) {
    const num = parseInt(str);
    if (isNaN(num)) {
        return "Invalid number";
    }
    return num;
}
console.log(convertToNumber("Consistent"))
console.log(convertToNumber("4.14")); 
console.log(convertToNumber("21")); 
console.log(convertToNumber("Twenty One"));