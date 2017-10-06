/* Ideally your entire program 
will be nothing but function composition.
There will be no loops (for, for...of, for...in, while, do)
in your code. */

// h(x) = x + 1
// number -> number
function h(x) {
  return x + 1;
}

// g(x) = x^2
// number -> number
function g(x) {
  return x * x;
}

// f(x) = convert x to string
// number -> string
function f(x) {
  return x.toString();
}

// y = (f ∘ g ∘ h)(1)
const y = f(g(h(1)));
console.log(y); // '4'

// By creating a compose higher order function
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

// composite = f ∘ g ∘ h
const composite = compose(f, g, h);

// Execute single function to get the result.
const result = composite(1);
console.log(result); // '4'
