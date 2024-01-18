// const heading = document.getElementById("txt");
// const btn1 = document.getElementById("btn1").addEventListener('click', () => {
//   heading.style.backgroundColor = "red";
// });
console.log("hello");


let count = 0;

for (i = 2; i <= 100; i++) {
  for (j = 1; j <= i; j++) {
    if (i % j === 0) {
      count + 1;
    }
    if (count == 2) {
      return j;
    }
  }
}
