const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
]);
console.log(map);

// Instead of: map.set(4, 'four');
const map2 = new Map([...map, [4, 'four']]);
console.log(map2);

// Instead of: map.delete(1);
const map3 = new Map([...map].filter(([key]) => key !== 1));
console.log(map3);

// Instead of: map.clear();
const map4 = new Map();
console.log(map4);
