const person = {
  firstName: 'Roshan',
  lastName: 'Limbu',
  age: 21
};

for (let key in person) {
  console.log(`${key} ${person[key]}`);
}

