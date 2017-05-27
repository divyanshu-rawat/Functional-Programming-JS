

const animals = [
  { name: 'Waffles',  type: 'dog', age: 12 },
  { name: 'Fluffy',   type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank',     type: 'dog', age: 11 },
];

const young_dogs =  animals.filter(x => x.type == 'dog' && x.age < 12).map(x => x.name);

console.log(young_dogs);
