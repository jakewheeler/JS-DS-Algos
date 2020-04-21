class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex = (node) => {
    // add to object
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  };

  addEdge = (node1, node2) => {
    // node 1 connects to node 2
    this.adjacentList[node1].push(node2);

    // node 2 connects back to node 1
    this.adjacentList[node2].push(node1);
  };

  showConnections = () => {
    console.log(this.adjacentList);
    console.log(`number of nodes: ${this.numberOfNodes}`);
  };
}

let graph = new Graph();

// add all vertices
graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');

// add all edges

graph.addEdge('0', '2');
graph.addEdge('1', '0');
graph.addEdge('1', '2');
graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '2');
graph.addEdge('4', '5');
graph.addEdge('6', '5');

graph.showConnections();
