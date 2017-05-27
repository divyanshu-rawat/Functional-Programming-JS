

const animals = [
  { name: 'Waffles',  type: 'dog', age: 12 },
  { name: 'Fluffy',   type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank',     type: 'dog', age: 11 },
];

const young_dogs = animals.map(function(animal){
	return animal.name;
})

// this can be reduced to 

const young_dogs_ = animals.map(animal => animal.name)

console.log(young_dogs_);


// Again, map is a higher-order function just like filter is. Map accepts a callback function,
// that is called for every item in the array that filter returns in the above example.
// Map will take every return value from the callback and create a new array with them - in this case, just the names.