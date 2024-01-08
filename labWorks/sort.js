const strArr = ["Nasa10", "ESA11", "JWST", "NAS"];

console.log("Before sorting: ", strArr);
const numericSort = (a, b) => {
  const numA = parseFloat(a); // converting string to float 
  const numB = parseFloat(b); // converting string to float 


  // if (!isNaN(numA) && !isNaN(numB)) { // checking here if there's empty values
  //
  //   return numA - numB;
  // }

  return a.localeCompare(b);

}
strArr.sort(numericSort);

console.log("After sorting: ", strArr);




