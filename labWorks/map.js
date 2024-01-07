/*
Write a javascript program to create an array of strings and use map() to create a
new array where each string is capitalized.Print the new array.
*/
const people = ["roshan", "bishnu", "kapil", "niraj"];
console.log("Before Capitalization: ", people);
const capitalized = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const newArray = people.map(capitalized);

console.log("After Capitalization: ", newArray);

