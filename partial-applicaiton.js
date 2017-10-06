const batman = 40;
const joker = 29;
const alfred = 70;

const sumAges = (batman, joker, alfred) => batman + joker + alfred;

const partial = (fn, ...args) => fn.bind(null, ...args);

const partialSum = partial(sumAges, batman, joker);

console.log(partialSum(alfred));