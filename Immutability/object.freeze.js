'use strict';

/*
 Instead of pushing an item onto the existing array,
  we can create a new array with all the same items as
   the original array, plus the one additional item.
*/

const a = Object.freeze([4, 5, 6]);
// Instead of: a.push(7, 8, 9);
const b = a.concat(7, 8, 9);
console.log(b);

// Instead of: a.pop();
const c = a.slice(-1);
console.log(c);

// Instead of: a.unshift(1, 2, 3);
const d = [1, 2, 3].concat(a);
console.log(d);

// Instead of: a.shift();
const e = a.slice(0,1);
console.log(e);
