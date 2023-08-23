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

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,k] = input[0].split(' ').map(Number);
let graph = [];
let data = [];

for (let i = 0; i < n; i++){
    graph.push(input[i+1].split(' ').map(Number));
    for (let j = 0; j < n; j++){
        if (graph[i][j] !== 0){
            data.push([graph[i][j], 0, i, j]);
        }
    }
}

data.sort((a,b) => a[0] - b[0]);
queue = new Queue();
for (let x of data){
    queue.enqueue(x);
}

let [targetS, targetX, targetY] = input[n+1].split(' ').map(Number);

let dx = [-1,0,1,0];
let dy = [0,1,0,-1];

while(queue.getLength() !== 0) {
    let [virus, s, x, y] = queue.dequeue();
    if (s === targetS) break;
    for (let i = 0; i < 4; i++){
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(0 <= nx && nx < n && 0 <= ny && ny < n) {
            if (graph[nx][ny] === 0){
                graph[nx][ny] = virus;
                queue.enqueue([virus, s+1, nx, ny]);
            }
        }
}
}
console.log(graph[targetX - 1][targetY - 1]);