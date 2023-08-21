class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item){
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }
    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }
    peek() {
        return this.items[this.headIndex];
    }
    getLength() {
        return this.tailIndex - this.headIndex;
    }
}

function bfs(x,graph,visited) {
    queue = new Queue();
    queue.enqueue(x);
    visited[x] = 0;
    while(queue.getLength() !== 0) {
        x = queue.dequeue();
        for (let y of graph[x]) {
            if(visited[y] === -1) {
                visited[y] = (visited[x] + 1) % 2;
                queue.enqueue(y);
            }
        }
    }
}

function isBipartite(graph, visited) {
    for (let x = 1; x < visited.length; x++) {
        for (let y of graph[x]) if (visited[x] === visited[y]) return false;
}
    return true;
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
let line = 1;
while(testCases--) {
    let [v,e] = input[line].split(' ').map(Number);
    let graph = [];
    for (let i = 1; i <= v; i++) graph[i] = [];
    for (let i = 1; i <= e; i++) {
        let [u,v] = input[line + i].split(' ').map(Number);
        graph[u].push([v]);
        graph[v].push([u]);
    }
    let visited = new Array(v+1).fill(-1);
    for (let i = 1; i <= v; i++){
        if (visited[i] === -1) bfs(i,graph,visited);
    }
    line += e + 1;
    if(isBipartite(graph, visited)) console.log('YES');
    else console.log('NO');
}