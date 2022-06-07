/*
	JS Array has similar implementation.
	So, this is uncommon use
*/

function Stack() {
	this.count = 0;
	this.storage = {};
	this.push = e => {
		this.storage[this.count++] = e;
	};
	this.pop = () => {
		if (this.count === 0) {
			return undefined;
		}
		var e = this.storage[--this.count];
		delete this.storage[this.count];
		return e;
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
