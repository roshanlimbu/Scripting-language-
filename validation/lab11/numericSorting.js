// Create an array of strings
const stringsArray = ["banana", "apple", "cherry", "date"];

// Sort the array alphabetically
stringsArray.sort((a, b) => {
  // Comparing the strings and return a numeric value for sorting
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

// Print the sorted array
console.log("Sorted array:", stringsArray);
