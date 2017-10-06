// This function remove empty strings from strings array.

const remove = strings => strings.filter(string => string && string.trim() !== '');

console.log(remove(['Apple', 'Cake', '    ', 'Bacon', ''])); // output: Apple, Cake, Bacon
