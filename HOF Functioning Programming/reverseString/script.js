// 1. Reverse String.
// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.
function reverseString(str) {
    let result = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      (result += str[i]);
    }
  
    return result;
  };
  let input = "Self Motivated";
  setTimeout(() => {
    console.log(reverseString(input))
  }, 2000);