/* Write a javascript program to create an array of numbers and use forEach() to
print all the even numbers in the array. */


const myArr = [1, 2, 3, 4, 5];
myArr.forEach(num => {
  if (num % 2 == 0) {
    console.log(num);
  }
})

