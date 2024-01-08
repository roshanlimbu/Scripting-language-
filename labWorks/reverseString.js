function reverseString(inputString) {
  // var for reversed string
  let reversedString = '';
  let length = inputString.length - 1;

  do {
    reversedString += inputString[length];
    length--;
  } while (length >= 0);

  return reversedString;
}

const text = 'Roshan';
const revStr= reverseString(text);

console.log(`Original String: ${text}`);
console.log(`Reversed String: ${revStr}`);

