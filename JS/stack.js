/*
	JS Array has similar implementation.
	So, this is uncommon use
*/

function Stack() {
	this.count = 0;
	this.storage = {};
	this.push = value => {
		this.storage[this.count++] = value;
	};
	this.pop = () => {
		if (this.count === 0) {
			return undefined;
		}
		var value = this.storage[--this.count];
		delete this.storage[this.count];
		return value;
	};
	this.peek = () => {
		return this.storage[this.count - 1];
	};
	this.length = () => {
		return this.count;
	};
}

var myStack = new Stack();

/*

	//This is test values:

console.log(myStack.peek());
console.log(myStack.length());
console.log(myStack.pop());
console.log(myStack.length());
myStack.push([1, 2, 3]);
myStack.push("1,2,3");
console.log(myStack.length());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.length());
myStack.push("I have a string");
console.log(myStack.peek());
console.log(myStack.length());
console.log(myStack.pop());
console.log(myStack.length());
console.log(myStack.pop());
console.log(myStack.length());
console.log(myStack.pop());
*/
