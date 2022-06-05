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
	findMinHeight(node = this.root) {
		if (node === null) return -1;
		let left = this.findMinHeight(node.left);
		let right = this.findMinHeight(node.right);
		if (left < right) return left + 1;
		else return right + 1;
	}
	findMaxHeight(node = this.root) {
		if (node === null) return -1;
		let left = this.findMaxHeight(node.left);
		let right = this.findMaxHeight(node.right);
		if (left > right) return left + 1;
		else return right + 1;
	}
	isBalanced(node = this.root) {
		return this.findMaxHeight(node) - this.findMinHeight(node) <= 1;
	}
	inOrder(node = this.root) {
		if (node === null) return null;
		var result = [];
		const traverseInOrder = node => {
			node.left && traverseInOrder(node.left);
			result.push(node.data);
			node.right && traverseInOrder(node.right);
		};
		traverseInOrder(node);
		return result;
	}
	preOrder(node = this.root) {
		if (node === null) return null;
		var result = [];
		const traversePreOrder = node => {
			result.push(node.data);
			node.left && traversePreOrder(node.left);
			node.right && traversePreOrder(node.right);
		};
		traversePreOrder(node);
		return result;
	}
	postOrder(node = this.root) {
		if (node === null) return null;
		var result = [];
		const traversePostOrder = node => {
			node.left && traversePostOrder(node.left);
			node.right && traversePostOrder(node.right);
			result.push(node.data);
		};
		traversePostOrder(node);
		return result;
	}
	levelOrder(node = this.root) {
		let result = [];
		let Q = [];
		if (node === null) return [];
		Q.push(node);
		while (Q.length > 0) {
			let node = Q.shift();
			result.push(node.data);
			node.left && Q.push(node.left);
			node.right && Q.push(node.right);
		}
		return result;
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
//bts.remove(4);
console.log(bts.root);
//bts.remove(3);
console.log(bts.root);
console.log(bts.findMinHeight());
console.log(bts.findMaxHeight());
console.log(bts.isBalanced());
console.log(bts.inOrder());
console.log(bts.preOrder());
console.log(bts.postOrder());
console.log(bts.levelOrder());
*/
