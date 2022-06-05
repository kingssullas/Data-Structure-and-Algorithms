/*
    JS has Hash table.
    This is basic config.
    Hash function can be changed accordingly.
*/

let hash = (key, max) => {
	var hash = 0;
	for (var i = 0; i < key.length; i++) hash += key.charCodeAt(i);
	return hash % max;
};
class HashTable {
	constructor(storageLimit = 100) {
		this.storageLimit = storageLimit;
		this.storage = [];
	}
	print() {
		console.log(this.storage);
	}
	add(key, content) {
		const index = hash(key, this.storageLimit);
		if (this.storage[index] === undefined)
			this.storage[index] = [[key, content]];
		else {
			var added = false;
			for (var i = 0; i < this.storage[index].length; i++) {
				if (this.storage[index][i][0] === key) {
					this.storage[index][i][1] = content;
					added = true;
				}
			}
			added || this.storage[index].push([key, content]);
		}
	}
	lookup(key) {
		var index = hash(key, this.storageLimit);
		if (this.storage[index] === undefined) return undefined;
		for (var i = 0; i < this.storage[index].length; i++) {
			if (this.storage[index][i][0] === key)
				return this.storage[index][i][1];
		}
	}
	remove(key) {
		var index = hash(key, this.storageLimit);
		if (this.storage[index][0][0] === key && this.storage[index].length === 1)
			delete this.storage[index];
		else {
			for (var i = 0; i < this.storage[index].length; i++)
				if (this.storage[index][i][0] === key)
					this.storage[index].splice(i, 1);
		}
	}
}

let ht = new HashTable(4);

/*
    //test cases
console.log(hash("quincy", 10));
ht.add("beau", "person");
ht.add("fido", "hen");
ht.add("rex", "dino");
ht.add("tux", "dog");
console.log(ht.lookup("cock"));
ht.print();
console.log(ht.lookup("rex"));
ht.remove("beau");
ht.remove("fido");
ht.print();
*/
