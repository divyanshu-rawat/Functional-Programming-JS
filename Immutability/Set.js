const set = new Set(['A', 'B', 'C']);
console.log(set);

// Instead of: set.add('D');
const set2 = new Set([...set, 'D']);
console.log(set2);

// Instead of: set.delete('B');
const set3 = new Set([...set].filter(key => key !== 'B'));
console.log(set3);

// Instead of: set.clear();
const set4 = new Set();
console.log(set4);
