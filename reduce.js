
const animals = [
  { name: 'Waffles',  type: 'dog', age: 12 },
  { name: 'Fluffy',   type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank',     type: 'dog', age: 11 },
];

var totalDogAge = animals.filter(x =>  x.type === 'dog').map(x => x.age).reduce((prev, cur) => prev + cur, 0);

console.log(totalDogAge);