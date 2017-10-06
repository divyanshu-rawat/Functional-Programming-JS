// Append array of strings on value

const appendValues = (value, appends) => {
  if (appends.length === 0) {
    return value
  }
  return value + appends.join('')
};

text = appendValues('P', ['a', 'ul', 'o']);

console.log(text); // output: Paulo
