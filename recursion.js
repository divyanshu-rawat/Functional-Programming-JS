
/*
	return a list consisting of only the unique elements in this list
*/

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandom1to100 = () => getRandomInt(1, 100);

const addUnique = ar => {
    const el = getRandom1to100();
    return ar.includes(el) ? ar : ar.concat([el]);
}

const uniqueArray = (numberOfElements, baseArray) => {
    if (numberOfElements < baseArray.length) throw 'invalid input'; 
    return baseArray.length === numberOfElements ? baseArray : 
    		uniqueArray(numberOfElements, addUnique(baseArray));
}

const myArray = uniqueArray(100, []);
console.log(myArray);