/* Write a javascript program to create an array of strings and remove the first
element from the array. Then add a new string to the beginning of the array.
Using shift() and unshift(). */

const people = ["Roshan", "Bishnu", "Kapil", "Niraj"];
console.log("Before editing: ", people);
people.shift();
console.log("Using shift methods: ", people);

people.unshift("anup");

console.log("Using unshift methods: ", people);
