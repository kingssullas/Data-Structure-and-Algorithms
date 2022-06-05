/*
    Normal queue can be easily implemented in JS using array object with push, shift etc. methods.
    This is a priority queue. It takes an item with priority (optional; and/or -1 for no priority) and works accordingly.
*/

function PriorityQueue() {
	var storage = [];
	this.print = () => {
		console.log(storage);
	};
	this.insert = e => {
		if (e[1] === -1 || e[1] == undefined) {
			if (Array.isArray(e)) storage.push([e[0], -1]);
			else storage.push([e, -1]);
		} else if (this.isEmpty()) {
			storage.push(e);
		} else {
			var added = false;
			for (var i = 0; i < storage.length; i++) {
				if (e[1] < storage[i][1] && storage[i][1] != -1) {
					storage.splice(i, 0, e);
					added = true;
					break;
				} else if (storage[i][1] === -1) {
					storage.splice(i, 0, e);
					added = true;
					break;
				}
			}
			if (!added) storage.push(e);
		}
	};
	this.pull = () => {
		return storage.shift()[0];
	};
	this.peek = () => {
		return storage[0][0];
	};
	this.isEmpty = () => {
		return storage.length === 0;
	};
	this.size = () => {
		return storage.length;
	};
}

var pq = new PriorityQueue();

/*
    //test cases
console.log(pq.size());
console.log(pq.insert(45));
console.log(pq.insert(50));
console.log(pq.peek());
console.log(pq.size());
pq.print();
console.log(pq.pull());
pq.print();
pq.insert([{ 74: 74 }]);
console.log(pq.insert([4, 5]));
console.log(pq.insert([4, 6]));
console.log(pq.insert([4, 4]));
pq.print();
console.log(pq.size());
console.log(pq.insert(100));
pq.print();
console.log(pq.size());
console.log(pq.insert([100, 0]));
pq.print();
console.log(pq.size());
console.log(pq.insert([100, -1]));
pq.print();
console.log(pq.size());
console.log(pq.insert([-200, -1]));
pq.print();
console.log(pq.size());
*/
