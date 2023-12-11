class Graph {
  constructor() {
      this.adlist = {};
  }
  
  addvertex(vertex) {
      if (!this.adlist[vertex]) {
          this.adlist[vertex] = new Set();
      }
  }
  
  addEdge(vertex1, vertex2) {
      if (!this.adlist[vertex1]) {
          this.addvertex(vertex1);
      }
      if (!this.adlist[vertex2]) {
          this.addvertex(vertex2);
      }
      this.adlist[vertex1].add(vertex2);
      this.adlist[vertex2].add(vertex1);
  }
  
  removeVertex(vertex) {
      if (this.adlist[vertex]) {
          for (const adjacentVertex of this.adlist[vertex]) {
              this.adlist[adjacentVertex].delete(vertex);
          }
          delete this.adlist[vertex];
      }
  }
  
  display() {
      for (let vertex in this.adlist) {
          console.log(vertex + "->" + [...this.adlist[vertex]]);
      }
  }
  
  dfs(startVertex) {
      const visited = {};
      const result = [];
      
      const dfsHelper = (vertex) => {
          if (!vertex) return;
          visited[vertex] = true;
          result.push(vertex);
          for (const neighbor of this.adlist[vertex]) {
              if (!visited[neighbor]) {
                  dfsHelper(neighbor);
              }
          }
      };
      
      dfsHelper(startVertex);
      return result;
  }
  
  bfs(startVertex) {
      const visited = {};
      const result = [];
      const queue = [startVertex];
      visited[startVertex] = true;
      
      while (queue.length > 0) {
          const vertex = queue.shift();
          result.push(vertex);
          
          for (const neighbor of this.adlist[vertex]) {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          }
      }
      
      return result;
  }
}

const graph = new Graph();

graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addvertex("D");
graph.addvertex("Z");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("A", "C");
graph.addEdge("A", "Z");

console.log("DFS:", graph.dfs("A"));
console.log("BFS:", graph.bfs("A"));

graph.removeVertex("A");

console.log("Graph after removing vertex A:");
graph.display();
