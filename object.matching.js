const animals = [
    { name: 'Waffles', type: 'dog', age: 12 },
    { name: 'Fluffy', type: 'cat', age: 14 },
    { name: 'Spelunky', type: 'dog', age: 4 },
    { name: 'Hank', type: 'dog', age: 11 } 
  ];

/**
 * get first data of array 
 * its same as   
 * const name = animals[0].name
 * const type = animals[0].type
 * const age = animals[0].age
 */
const {name, type, age} = animals[0];
console.log(name, type, age);  