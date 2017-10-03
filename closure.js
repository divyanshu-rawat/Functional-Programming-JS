function initialize() {
	var name = 'Functional Programming in JS'; //local variable to initialize
	function displaySummary() { //displaySummary() is the closure
		console.log('The name of the project is' + name); //variable declared in the parent function is used 
	}
	displaySummary();
}
initialize();

