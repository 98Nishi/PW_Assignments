/*Write a JavaScript function called ageInDays that accepts an object containing a person's first name, lastname, and age in years as input. The function should concatenate the first and last name into a single stringand store it in a variable called fullName. It should then calculate the person's age in days and store it in avariable called ageInDays.The ageInDays function should then return a callback function that logs a message to the console. The message should include the person's full name and age in days, and should be in the format: "The person's fullname is [full name] and their age in days is [age in days]."Note that the ageInDays function should not log the message to the console directly, but should instead return a callback function that can be used to log the message at a later time. */


let person = {
    first_name:  "Daisy", 
    last_name: "Martho",
    age: 21
}

// call the function with obj and callback 
function logindays(person, logresult) {
       let full_name = person.first_name + " " +  person.last_name;

       let age = person.age * 365; //  convert age in days
       let final_result = `The person's full name is ${full_name} and their age in days is ${age}`; 
       logresult(final_result)   // call the callback function 
}


// Define a new function wchich logs the inputs 
function displayResult(final) {
      console.log(final);
}


logindays(person, displayResult);