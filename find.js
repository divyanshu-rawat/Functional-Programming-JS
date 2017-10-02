const animals = [
    { name: 'Waffles', type: 'dog', age: 12 },
    { name: 'Fluffy', type: 'cat', age: 14 },
    { name: 'Spelunky', type: 'dog', age: 4 },
    { name: 'Hank', type: 'dog', age: 11 } 
  ];

  // get all data dog by name 'waffles'
  const data = animals.find(n => n.name.toLowerCase() == 'waffles');

  console.log(data);