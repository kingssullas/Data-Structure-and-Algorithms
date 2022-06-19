//Breadth-first Search Implementation for Graph data structure.

function bfs(graph, root) {
	var nodesLength = Array(graph.length).fill(Infinity);
	nodesLength[root] = 0;
	var queue = [root];
	var current;
	while (queue.length != 0) {
		current = queue.shift();
		var neighbourIdx = graph[current]
			.map((e, i) => {
				if (e) return i;
			})
			.filter(e => e != undefined);
		neighbourIdx.forEach(element => {
			if (nodesLength[element] == Infinity) {
				nodesLength[element] = nodesLength[current] + 1;
				queue.push(element);
			}
		});
	}
	return nodesLength;
}

/*
//  Test:
var graph = [
	[0, 1, 1, 1, 0],
	[0, 0, 1, 0, 0],
	[1, 1, 0, 0, 0],
	[0, 0, 0, 1, 0],
	[0, 1, 0, 0, 0],
];
var graph = [
	[false, true, true, false],
	[false, false, true, true],
	[false, false, false, false],
	[false, false, true, false],
];
console.log(bfs(graph, 0));
*/
