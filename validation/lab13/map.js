// Create an array of objects representing students
const students = [
  { name: "Roshan", age: 23 },
  { name: "Bishnu", age: 22 },
  { name: "Sirash", age: 22 },
  { name: "Krishtina", age: 18 },
  { name: "Ashish", age: 23 },
];

// Use the map() method to create a new array containing only the ages of the students
const agesArray = students.map((student) => student.age);

// Print the new array
console.log("Ages of students:", agesArray);
