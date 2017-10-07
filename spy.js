// this function replicates the spy function often employed by testing libraries like mocha or jasmine. a 'spyified' function behaves like its ordinary counterpart, but contains added tracking features: it tracks how often it has been called, what arguments it has been passed, and what it has returned. 

function spyify(func){
  
  let callCount = 0;
  let argsList = new Set();
  let returnedList = new Set();
  
  let spy = (...args) => {
    callCount++;
    args.forEach(arg => argsList.add(arg));
    let returned = func(...args);
    returnedList.add(returned);
    return returned
  }
  
  spy.wasCalled = () => callCount > 0;
  spy.callCount = () => callCount;
  spy.wasCalledWith = value => argsList.has(value);
  spy.returned = returnVal => returnedList.has(returnVal);
  
  return spy;
}



// Usage


// example func to spyify

function add(a,b){return a+b}

const spyAdd = spyify(add);

// testing out our spy...

console.log('\n --- Primitives --- \n')


console.log(spyAdd.wasCalled()) // => false
console.log(spyAdd(1, 2)) // => 3
console.log(spyAdd(5, "Hi")) // => 5Hi
console.log(spyAdd.callCount()) // => 2
console.log(spyAdd.wasCalled()) // => true
console.log(spyAdd.wasCalledWith(1, 2, 3)) // => true
console.log(spyAdd.wasCalledWith(56)) // => false 
console.log(spyAdd.returned("5Hi")) // => true

// when we move past primitives, the pattern complicates...

console.log('\n --- Objects --- \n')

function returnAnObj(obj){
  return obj
}

const spyReturnAnObj = spyify(returnAnObj);

spyReturnAnObj({key: 'value'});
console.log('different references, same values:', spyReturnAnObj.wasCalledWith({key: 'value'})) // => false negative

// objects are passed-by-reference, so we can no longer rely on value comparisons. we'll need to create a controlled reference to check for: 

const referencedObj = {this: 'works'}
spyReturnAnObj(referencedObj)
console.log('identical reference:', spyReturnAnObj.wasCalledWith(referencedObj)); // =>  true

// the same principle applies to callbacks
function callWithNums(func, num1, num2){
  return func(num1, num2) 
}

const spyCallWithNums = spyify(callWithNums);

spyCallWithNums(add, 1, 2);
console.log('still works:', spyCallWithNums.wasCalledWith(add))
