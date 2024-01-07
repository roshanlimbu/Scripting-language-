/* Write a javascript program to create an array of strings and use numeric sorting
to sort the strings in alphabetical order. Print the sorted array.
*/


const numericVal = (str) => {
  return parseFloat(str.replace(/[^0-9.-]+/g, ""));
}


// Function to extract a numeric value from a string
const extractNumericValue = (str) => {
  // Remove non-numeric characters and convert to a number
  return parseFloat(str.replace(/[^0-9.-]+/g, ""));
};

// Array of strings
const arrayOfStrings = ['apple1', 'banana3', 'cherry2', 'date10'];

// Sort the array using numeric sorting
const sortedArray = arrayOfStrings.sort((a, b) => {
  const numericA = extractNumericValue(a);
  const numericB = extractNumericValue(b);
  return numericA - numericB;
});

// Print the sorted array
console.log('Original Array:', arrayOfStrings);
console.log('Sorted Array:', sortedArray);

// const stdName = ["Roshan", "Hary", "Anish", "Kapil"];
//
// const sortedArr = stdName.sort((a, b) => {
//   const numericA = numericVal(a);
//   const numericB = numericVal(b);
//   return numericA - numericB;
// })
//
//
// console.log('Before sorting: ', stdName);
// console.log('After sorting: ', sortedArr);
