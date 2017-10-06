/*
	Informally, currying is the process
	of taking a function that accepts n arguments
	and turning it into n functions that each accepts a single argument.
*/

const curriedDot = vector1 => 
		vector2 =>
		vector1.reduce((sum, element, index) => sum += element * vector2[index], 0);

// Taking the dot product of any vector with [1, 1, 1]
// is equivalent to summing up the elements of the other vector.
const sumElements = curriedDot([1, 1, 1]);

console.log(sumElements([1, 3, -5])); // -1
console.log(sumElements([4, -2, -1])); // 1
