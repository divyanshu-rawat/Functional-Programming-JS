// This function picks all keys from an object with an array of the keys (comma seperated) as an input

function pickAll(keys, obj) {
  const result = {};
  keys.forEach(function(key){
    result[key] = obj[key];
  })
  return result;
}

const objectExample = {
  a: 'hello',
  b: 'goodbye',
  c: 'darkness',
  d: 'brightness',
  e: 'my',
  f: 'new',
  g: 'old',
  h: 'friend'
}

/*
// INPUT:
console.log(pickAll(['a','c','e','g','h'], objectExample));

// OUTPUT:
{ a: 'hello', c: 'darkness', e: 'my', g: 'old', h: 'friend' }
*/
