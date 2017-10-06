// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b

const animals = [
  { name: 'Waffles', type: 'dog', age: 12 },
  { name: 'Fluffy', type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank', type: 'dog', age: 11 }
];

// Reduce animals array by summing age
var totalDogAge = animals
  .reduce((prev, cur) => prev.age + cur.age, 0);

// Filter animals array by type 'dog'
var totalDogAge = animals
  .filter(x =>  x.type === 'dog')
  .reduce((prev, cur) => prev.age + cur.age, 0);

console.log(totalDogAge);