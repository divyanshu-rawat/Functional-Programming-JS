// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const animals = [
  { name: 'Waffles', type: 'dog', age: 12 },
  { name: 'Fluffy', type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank', type: 'dog', age: 11 }
];

// Function to map the animals array to a new array, passing only name.
const animalsByName = animals.map(function(animal){
	return animal.name;
});

// This can be reduced to 
const animalsByNameRefactor = animals.map(animal => animal.name);

console.log(animalsByName);
console.log(animalsByNameRefactor);

// **NOTES**
// Again, map is a higher-order function just like filter is. Map accepts a callback function,
// that is called for every item in the array that filter returns in the above example.
// Map will take every return value from the callback and create a new array with them - in this case, just the names.