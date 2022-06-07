/*
    Heap is a kind of ordered Binary Tree that follows certain ordering condition.
*/

let MinHeap = function () {
	var heap = [null];

	this.print = () => heap;

	this.insert = num => {
		heap.push(num);
		if (!heap.length > 2) return;
		var id = heap.length - 1;
		while (heap[id] < heap[Math.floor(id / 2)]) {
			[heap[id], heap[Math.floor(id / 2)]] = [
				heap[Math.floor(id / 2)],
				heap[id],
			];
			if (Math.floor(id / 2) > 1) id = Math.floor(id / 2);
			else break;
		}
	};

	this.remove = () => {
		var smallest = heap[1];
		if (heap.length == 2) {
			heap.splice(1);
			return smallest;
		} else if (heap.length < 2) return null;
		heap[1] = heap[heap.length - 1];
		heap.splice(heap.length - 1);
		if (heap.length === 3)
			if (heap[1] > heap[2]) {
				[heap[1], heap[2]] = [heap[2], heap[1]];
				return smallest;
			}
		let i = 1;
		while (heap[i] > heap[i * 2] || heap[1] > heap[i * 2 + 1]) {
			if (heap[i * 2] < heap[i * 2 + 1]) {
				[heap[i], heap[i * 2]] = [heap[i * 2], heap[i]];
				i = i * 2; //left
			} else {
				[heap[i * 2 + 1], heap[i]] = [heap[i], heap[i * 2 + 1]];
				i = i * 2 + 1; //right
			}
			if (heap[i * 2] == undefined || heap[i * 2 + 1] == undefined) break;
		}
		return smallest;
	};

	this.sort = () => {
		//remove *s to sort and modify at the same time
		var result = [];
		var container = heap.concat(); //*
		while (heap.length > 1) {
			result.push(this.remove());
		}
		heap = container.concat(); //*
		return result;
	};
};

let MaxHeap = function () {
	var heap = [null];

	this.print = () => heap;

	this.insert = function (num) {
		heap.push(num);
		if (!heap.length > 2) return;
		var id = heap.length - 1;
		while (heap[id] > heap[Math.floor(id / 2)]) {
			if (heap[Math.floor(id / 2)] !== null)
				[heap[id], heap[Math.floor(id / 2)]] = [
					heap[Math.floor(id / 2)],
					heap[id],
				];
			if (Math.floor(id / 2) > 1) id = Math.floor(id / 2);
			else break;
		}
	};

	this.remove = function () {
		let smallest = heap[1];
		if (heap.length == 2) {
			heap.splice(1);
			return smallest;
		} else if (heap.length < 2) return null;
		heap[1] = heap[heap.length - 1];
		heap.splice(heap.length - 1);
		if (heap.length === 3)
			if (heap[1] < heap[2]) {
				[heap[1], heap[2]] = [heap[2], heap[1]];
				return smallest;
			}
		let i = 1;
		while (heap[i] < heap[i * 2] || heap[1] < heap[i * 2 + 1]) {
			if (heap[i * 2] > heap[i * 2 + 1]) {
				[heap[i], heap[i * 2]] = [heap[i * 2], heap[i]];
				i = i * 2; //left
			} else {
				[heap[i * 2 + 1], heap[i]] = [heap[i], heap[i * 2 + 1]];
				i = i * 2 + 1; //right
			}
			if (heap[i * 2] == undefined || heap[i * 2 + 1] == undefined) break;
		}
		return smallest;
	};

	this.sort = () => {
		//remove *s to sort and modify at the same time
		var result = [];
		var container = heap.concat(); //*
		while (heap.length > 1) {
			result.push(this.remove());
		}
		heap = container.concat(); //*
		return result;
	};
};

// | 0|1|2|3|4|5|6|7| = child
// |-1|0|1|1|2|2|3|3| = parent

let heap = new MaxHeap();

/*
//  tests

heap.insert(4);
heap.insert(6);
heap.insert(8);
heap.insert(10);
heap.insert(5);
heap.insert(16);
heap.insert(3);
heap.insert(1);
console.log(heap.print());
console.log(heap.sort());
console.log(heap.print());
console.log(heap.remove());
console.log(heap.print());
*/
