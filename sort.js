// The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. 
// The default sort order is according to string Unicode code points.
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const animals = [
  { name: 'Waffles', type: 'dog', age: 12 },
  { name: 'Fluffy', type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank', type: 'dog', age: 11 } 
];

// Function to sort A -> Z
const sortAnimals = animals.sort((a, b) => {
  //Transform to lower case

  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;

  // Names must be equal
  return 0;
});

console.log(sortAnimals);
