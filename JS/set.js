/*
    Sets are like array except it has no duplicate value and has no perticular order.
    JS has sets but that does not have all the usual methods.
    So, this one is a better implemention.
*/

function set() {
	var storage = [];
	this.size = 0;
	this.has = e => {
		return storage.indexOf(e) !== -1;
	};
	this.add = e => {
		if (!this.has(e)) {
			storage.push(e);
			this.size++;
			return true;
		}
		return false;
	};
	this.remove = e => {
		if (this.has(e)) {
			storage.splice(storage.indexOf(e), 1);
			this.size--;
			return true;
		}
		return false;
	};
	this.enumerate = () => {
		return storage;
	}; // set.values() in JS Set()
	this.union = otherSet => {
		var unionSet = new set();
		this.enumerate().forEach(e => {
			unionSet.add(e);
		});
		otherSet.enumerate().forEach(e => {
			unionSet.add(e);
		});
		return unionSet;
	};
	this.intersection = otherSet => {
		var intersectionSet = new set();
		this.enumerate().forEach(e => {
			if (otherSet.has(e)) {
				intersectionSet.add(e);
			}
		});
		return intersectionSet;
	};
	this.difference = otherSet => {
		var differenceSet = new set();
		this.enumerate().forEach(e => {
			if (!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});
		return differenceSet;
	};
	this.subset = otherSet => {
		return this.enumerate().every(e => otherSet.has(e));
	};
}

var mySet = new set();

/*
    //first section
console.log(mySet.size);
console.log(mySet.has(45));
console.log(mySet.enumerate());
console.log(mySet.remove(45));
console.log(mySet.size);
console.log(mySet.add(45));
console.log(mySet.add(45));
console.log(mySet.has(45));
console.log(mySet.enumerate());
console.log(mySet.size);
console.log(mySet.remove(45));
console.log(mySet.enumerate());
console.log(mySet.add("abc"));
console.log(mySet.size);
console.log(mySet.add({ 1: 4, 2: 6 }));
console.log(mySet.enumerate());
console.log(mySet.has({ 1: 4, 2: 6 }));
console.log(mySet.size);
*/
/*
// second section
mySet.add(44);
mySet.add(54);
mySet.add("65");
var newSet = new set();
newSet.add(55);
newSet.add(65);
newSet.add(75);
newSet.add("65");
newSet.add(44);
console.log(newSet.enumerate());
console.log(mySet.union(newSet).enumerate());
console.log(newSet.union(mySet).enumerate());
console.log(mySet.intersection(newSet).enumerate());
console.log(newSet.intersection(mySet).enumerate());
console.log(mySet.difference(newSet).enumerate());
console.log(newSet.difference(mySet).enumerate());
console.log(mySet.subset(newSet));
console.log(newSet.subset(mySet));
console.log(newSet.add(54));
console.log(mySet.subset(newSet));
console.log(newSet.subset(mySet));
console.log(mySet.size);
console.log(newSet.size);
console.log(newSet.enumerate());
console.log(newSet.remove(75));
console.log(newSet.enumerate());
console.log(newSet.size);
*/
