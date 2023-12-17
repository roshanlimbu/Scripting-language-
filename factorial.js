// Write a function that takes a number as an argument and returns its factorial. Test the function with different numbers

const myFact = (number) => {
  let fact = 1;
  if (number < 1) {
    console.log("Can't find the factorial of negative number.");
  } else {
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    console.log(fact);
  }
}
myFact(10);
