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
let HashTable = function (storageLimit = 100) {
	storage = [];
	this.print = () => {
		console.log(storage);
	};
	this.add = (key, content) => {
		const index = hash(key, storageLimit);
		if (storage[index] === undefined) storage[index] = [[key, content]];
		else {
			var added = false;
			for (var i = 0; i < storage[index].length; i++) {
				if (storage[index][i][0] === key) {
					storage[index][i][1] = content;
					added = true;
				}
			}
			added || storage[index].push([key, content]);
		}
	};
	this.lookup = key => {
		var index = hash(key, storageLimit);
		if (storage[index] === undefined) return undefined;
		for (var i = 0; i < storage[index].length; i++) {
			if (storage[index][i][0] === key) return storage[index][i][1];
		}
	};
	this.remove = key => {
		var index = hash(key, storageLimit);
		if (storage[index][0][0] === key && storage[index].length === 1)
			delete storage[index];
		else {
			for (var i = 0; i < storage[index].length; i++)
				if (storage[index][i][0] === key) storage[index].splice(i, 1);
		}
	};
};

let ht = new HashTable(4);

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
