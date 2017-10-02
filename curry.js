// Curry is also a significant feature of functional programming.
// Demo code originally comes from [mostly-adequate-guide](https://github.com/MostlyAdequate/mostly-adequate-guide).

let add = function(x) {
  return function(y) {
    return x + y;
  };
};

let incrementOne = add(1);
let incrementTen = add(10);

incrementOne(2);  // 3

incrementTen(2);  // 12
