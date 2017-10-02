const animals = [
  { name: 'Waffles', type: 'dog', age: 12 },
  { name: 'Fluffy', type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4 },
  { name: 'Hank', type: 'dog', age: 11 } 
];

// sort to a -> z
const sortres = animals.sort((a, b) => {
const nameA = a.name.toLowerCase();//ignore uper/lowercase
const nameB = b.name.toLowerCase();//ignore uper/lowercase
if (nameA < nameB) return -1;
if (nameA > nameB) return 1;
// names must be equal
return 0;
})

console.log(sortres)
