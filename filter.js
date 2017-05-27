
// This repo. will take a close look at what I like to call the "big three" list operations: map, filter, and reduce.
// Wrapping your head around these three functions is an important step towards being able to write clean functional code,
// and opens the doors to the vastly powerful techniques of functional and reactive programming.


 // functional programming in JavaScript.



const animals = [
  { name: 'Waffles',  type: 'dog', age: 12 },
  { name: 'Fluffy',   type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank',     type: 'dog', age: 11 },
];

const young_dogs = animals.filter(function(animal){
	return animal.type == 'dog' && animal.age < 12
})

//  this can be reduced to 

const young_dogs_ = animals.filter(animal => animal.type == 'dog' && animal.age < 12)


console.log(young_dogs_);


// filter in the above example is a so-called higher-order function. 
// This is a fancy word for a function that accepts another function as an argument. 
// In the above example, the function (sometimes referred to as the callback) passed to filter will be called once with each item in the animals array as the argument. 
// If the callback returns true, the items makes the cut for the new array that filter is creating, which is what ends up in the oldDogs variable.