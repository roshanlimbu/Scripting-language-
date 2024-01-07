/* Write a javascript program to create an array of strings and use the filter()
method to filter out strings that start with the letter
A. Print the filtered array.*/


const checker = (str) => {
  const firstLetter = str.charAt(0);
  if (firstLetter === 'A') {
    return str;
  }
}


const nameArr = ["Roshan", "Kapil", "Mahesh", "Kusum", "Anish", "Anup"];


console.log(nameArr.filter(checker))
