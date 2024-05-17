const stringsArray = ["Apple", "Banana", "Avocado", "Cherry"];

// Use the filter() method to filter out strings that start with the letter 'A'
const filteredArray = stringsArray.filter((str) => !str.startsWith("A"));

// Print the filtered array
console.log("Filtered array:", filteredArray);
