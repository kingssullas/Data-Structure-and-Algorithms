/*
    Good example of trie. Most effiecient dictionary function.
*/

let Node = function () {
	this.keys = new Map();
	this.end = false;
	this.isEnd = () => {
		return this.end;
	};
	this.setEnd = () => {
		this.end = true;
	};
};

let Trie = function () {
	this.root = new Node();
	this.add = (word, node = this.root) => {
		if (word.length === 0) {
			node.setEnd();
			return;
		} else if (!node.keys.has(word[0])) {
			node.keys.set(word[0], new Node());
			this.add(word.substr(1), node.keys.get(word[0]));
		} else this.add(word.substr(1), node.keys.get(word[0]));
	};
	this.isWord = word => {
		var node = this.root;
		while (word.length > 1) {
			if (node.keys.has(word[0])) {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			} else return false;
		}
		return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
	};
	this.print = () => {
		var words = [];
		let search = (node = this.root, string = "") => {
			if (node.keys.size) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				}
				if (node.isEnd()) {
					words.push(string);
				}
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			}
		};
		search();
		return words.length === 0 ? null : console.log(words);
	};
};

myTrie = new Trie();

/*
//  tests

myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");
console.log(myTrie.isWord("doll"));
console.log(myTrie.isWord("dor"));
console.log(myTrie.isWord("do"));
console.log(myTrie.print());
*/
