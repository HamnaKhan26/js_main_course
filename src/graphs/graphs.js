/*

This graph should implement an adjacency list

*/

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(v) {
        if (this.adjList[v]) {
            throw new Error('Vertex already exists');
        }

        this.adjList[v] = [];
    }

    addEdge(v, w) {
        this.adjList[v].push(w);
    }

    // implements breadth first search
    bfs(node, visited = []) {
        //add your code here
        const queue = [];
        queue.push(node);

        while (queue.length > 0) {
            const current = queue.shift();
            if (!visited.includes(current)) {
                visited.push(current);
                const neighbors = this.adjList[current];
                for (const neighbor of neighbors) {
                    if (!visited.includes(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }

        return visited;
    }

    // implements depth first search
    dfs(node, visited = []) {
        //add your code here
        visited.push(node);
        const neighbors = this.adjList[node];
        for (const neighbor of neighbors) {
            if (!visited.includes(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }

        return visited;
    }

    print() {
        console.log(this.adjList);
    }
}

module.exports = { Graph };

/**
* @example Graph 
    A
 /  |  \
B   D    E
|  /
 C  

*/
