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

let [n,k,m] = input[0].split(' ').map(Number);
let graph = [];
for (let i = 1; i <= n + m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
    let arr = input[i].split(' ').map(Number);
    for (let x of arr) {
        graph[x].push(n+i);
        graph[n+i].push(x);
    }
}

let visited = new Set([1]);
let queue = new Queue();
queue.enqueue([1,1]);
let found = false;

while(queue.getLength() !== 0) {
    let [dist, now] = queue.dequeue();
    if (now === n) {
        console.log(parseInt(dist/2)+1);
        found = true;
        break;
    }
    for (let y of graph[now]){
        if (!visited.has(y)) {
            queue.enqueue([dist+1, y]);
            visited.add(y);
}
}
}
if(!found) console.log(-1);