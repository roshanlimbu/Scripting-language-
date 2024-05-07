function calculateBMI(weight, height) {
  return weight / (height * height);
}

let weight1 = 60; // kg
let weight2 = 50; // kg
let height = 1.7; // meters

console.log("BMI for weight 60kg:", calculateBMI(weight1, height));
console.log("BMI for weight 70kg:", calculateBMI(weight2, height));
