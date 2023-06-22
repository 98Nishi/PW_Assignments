//Nested Objects. Write a function that takes an object representing a person as input, and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties.

function extracts({ name, address: { street }}) {  //extract name and street
    return {name, street} 
}

const person = {
    name: "Krishna",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

const { name , street } = extracts(person);
console.log(name);  
console.log(street);