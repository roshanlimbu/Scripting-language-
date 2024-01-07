/* Write a javascript program to create an array of objects representing books,
where each object has a title and author property. Use splice() to remove the
second book from the array. Print the modified array.*/


const books = [{ title: 'Rich Dad Poor Dad', author: "Rovert Kiyosaki" }, { title: 'Atomic Habits', author: "James Clear" }, { title: 'think and Grow Rich', author: "Napoleon Hill" }, { title: 'Harry Porter', author: 'JK Rowlin' }];
console.log("Before splicing ", books);
books.splice(1, 1);
console.log("After splicing ", books);
