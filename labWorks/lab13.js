/* 
 13. Write a javascript program to create an array of objects representing students
where each object has a name and age property. Use the map() method to
create a new array containing only the ages of the students. Print the new array.
*/
const age = (std) => {
  return std.age;
}


const students = [{ name: "Roshan Limbu", age: 21 }, { name: "Ashish Limbu", age: 21 }, { name: "Kapil Tamang", age: 21 }]

console.log(students.map(age));

