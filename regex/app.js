let str = "abpabcapedeaceabc    fdlakfjdaskljfa abc abcd";

const re = /abc/g;
console.log(re.test(str)); // gives true or false
console.log(re.exec(str)); // executes a search for a match in a string and returns array of info of null on mismatch

console.log(str.match(re)); // returns arr containing the all the matches
console.log(str.search(re)); // return the first index of the match
