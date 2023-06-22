// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

function Convert(items) {
    const exchangeRate = 80;
    const convertPrice = Object.entries(items).map(([Item,US_dollar]) => {
        const Rupees =  US_dollar* exchangeRate;
        return [Item,Rupees];
    });

    const IndianPrice = Object.fromEntries(convertPrice);

    console.log(IndianPrice);
}
const items = {
    "pen": 1.5,
    "pencil": 1.0,
    "eraser": 0.5,
    "notebook": 2.5
};
Convert(items);