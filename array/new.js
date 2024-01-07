const array = ["Rosan", "Limbu"];
array.forEach(function(str) {
  console.log(str + " Limbu")
});
const newArray = [1, 2, 3, 4, 5];

const doubleArray = newArray.map(num => {
  return num + 2;
})
console.log(doubleArray);


let evenNumbers = newArray.filter(num => {
  return num % 2 == 0;
})
console.log(evenNumbers);
