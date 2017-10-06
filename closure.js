function initialize() {
	var name = 'Functional Programming in JS'; //local variable to initialize
	function displaySummary() { //displaySummary() is the closure
		console.log('The name of the project is' + name); //variable declared in the parent function is used 
	}
	displaySummary();
}
initialize(); 	// 'The name of the project is Functional Programming in JS'

function multiplier(x) {
	return function(y) {
		return x * y
	}
}

var multi2 = multiplier(2);
var multi3 = multiplier(3);

console.log(multi2(4))	//8
console.log(multi3(3)) //9