/* Write a function named calculate BMI that takes a person&#39;s weight in kilograms
and height in meters as arguments and returns their BMI(body mass index).Test
the function with different weight and height values and log the returned value to
the console.*/

let height = 1.5;
let weight = 55;
function bmiCalc(weight, height) {
  console.log((weight / (height ^ 2)));
}

bmiCalc(weight, height);

