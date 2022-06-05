/*
    Not needed in modern JS
 */

function LinkedList() {
	var length = 0;
	var head = null;

	var Node = function (element) {
		this.element = element;
		this.next = null;
	};

	this.size = () => {
		return length;
	};

	this.head = () => {
		return head;
	};

	this.add = element => {
		var node = new Node(element);
		if (head === null) {
			head = node;
		} else {
			var currentNode = head;

			while (currentNode.next) {
				currentNode = currentNode.next;
			}

			currentNode.next = node;
		}

		length++;
	};

	this.remove = element => {
		var currentNode = head;
		var previousNode;
		if (currentNode.element === element) {
			head = currentNode.next;
		} else {
			while (currentNode.element !== element) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			previousNode.next = currentNode.next;
		}

		length--;
	};

	this.isEmpty = () => {
		return length === 0;
	};

	this.indexOf = element => {
		var currentNode = head;
		var index = -1;

		while (currentNode) {
			index++;
			if (currentNode.element === element) {
				return index;
			}
			currentNode = currentNode.next;
		}

		return -1;
	};

	this.elementAt = index => {
		var currentNode = head;
		var count = 0;
		while (count < index) {
			count++;
			currentNode = currentNode.next;
		}
		return currentNode.element;
	};

	this.addAt = (index, element) => {
		var node = new Node(element);

		var currentNode = head;
		var previousNode;
		var currentIndex = 0;

		if (index > length) return false;

		if (index === 0) {
			node.next = currentNode;
			head = node;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			node.next = currentNode;
			previousNode.next = node;
		}
		length++;
	};

	this.removeAt = index => {
		var currentNode = head;
		var previousNode;
		var currentIndex = 0;
		if (index < 0 || index >= length) {
			return null;
		}
		if (!index) head = currentNode.next;
		else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
		return currentNode.element;
	};
}

var conga = new LinkedList();
/*
//  tests
conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf("Puppy"));
console.log(conga.size());
*/
