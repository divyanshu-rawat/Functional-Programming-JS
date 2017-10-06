// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

const animals = [
  { name: 'Waffles', type: 'dog', age: 12 },
  { name: 'Fluffy', type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank', type: 'dog', age: 11 } 
];
 
const reverse = animals.reverse();

console.log(reverse);