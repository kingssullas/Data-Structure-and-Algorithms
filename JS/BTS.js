/*
    Binary Tree Search.
    Basic implementation.
*/
class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}
class BTS {
	constructor() {
		this.root = null;
	}
	add(data) {
		const node = this.root;
		if (node === null) {
			this.root = new Node(data);
			return;
		} else {
			const searchTree = node => {
				if (data < node.data) {
					if (node.left === null) {
						node.left = new Node(data);
						return;
					} else {
						return searchTree(node.left);
					}
				} else if (data > node.data) {
					if (node.right === null) {
						node.right = new Node(data);
						return;
					} else {
						return searchTree(node.right);
					}
				} else return null;
			};
			return searchTree(node);
		}
	}
	findMin(current = this.root) {
		if (current.left !== null) return this.findMin(current.left);
		return current.data;
	}
	findMax(current = this.root) {
		if (current.right !== null) return this.findMin(current.right);
		return current.data;
	}
	find(data, node = this.root) {
		if (node === null || data === node.data) return node;
		else if (data < node.data) return this.find(data, node.left);
		else return this.find(data, node.right);
	}
	isPresent(data, node = this.root) {
		if (node === null) return false;
		if (data === node.data) return true;
		else if (data < node.data) return this.isPresent(data, node.left);
		else return this.isPresent(data, node.right);
	}
	remove(data) {
		const removeNode = (node, data) => {
			if (node === null) {
				return null;
			}
			if (data === node.data) {
				if (node.left === null && node.right === null) return null;
				if (node.left === null) return node.right;
				if (node.right === null) return node.left;
				var tempNode = this.find(this.findMin(node.right));
				node.data = tempNode.data;
				node.right = removeNode(node.right, tempNode.data);
				return node;
			} else if (data < node.data) {
				node.left = removeNode(node.left, data);
				return node;
			} else {
				node.right = removeNode(node.right, data);
				return node;
			}
		};
		this.root = removeNode(this.root, data);
	}
}

var bts = new BTS();

/*
    //tests
bts.add(8);
bts.add(3);
bts.add(14);
bts.add(1);
bts.add(6);
bts.add(4);
bts.add(7);
console.log(bts.findMin());
console.log(bts.findMax());
console.log(bts.root);
bts.remove(4);
console.log(bts.root);
bts.remove(3);
console.log(bts.root);
*/
