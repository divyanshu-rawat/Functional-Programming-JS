// Return a list consisting of only the unique elements in this list

// Function to get random int using Math.Random() and Math.Floor()
const getRandomInt = (min, max) => {
	const random =  Math.floor(Math.random() * (max - min + 1));
	return random + min;
};

// Function to get random number between 1 and 100
const getRandom1to100 = () => getRandomInt(1, 100);

// Function to ad a unique integer
const addUnique = ar => {
	const el = getRandom1to100();

	if(ar.includes(el))
		return ar;

	return ar.concat([el]);
};

const uniqueArray = (numberOfElements, baseArray) => {
	if (numberOfElements < baseArray.length) 
			throw 'invalid input';

	if(numberOfElements)
		return baseArray.length === baseArray;
	
	return baseArray.length === uniqueArray(numberOfElements, addUnique(baseArray));
};

const myArray = uniqueArray(100, []);

console.log(myArray);