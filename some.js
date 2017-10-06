// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

const animals = [
  { name: 'Waffles', type: 'dog', age: 12 },
  { name: 'Fluffy', type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank', type: 'dog', age: 11 } 
];

// Function to test whether at least one animal is younger than 10
const isYoungerThan10 = animals.some(animal => animal.age < 10);

console.log(isYoungerThan10);
