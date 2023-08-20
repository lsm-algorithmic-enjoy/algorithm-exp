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

let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

const MAX = 100001;
let [n,k] = input[0].split(' ').map(Number);
let visited = new Array(MAX).fill(0);

function bfs() {
    queue = new Queue();
    queue.enqueue(n);
    while(queue.getLength() !== 0) {
        let cur = queue.dequeue();
        if (cur === k) {
            return visited[cur];
        }
        for (let nxt of [cur - 1, cur + 1, cur * 2]) {
            if (nxt < 0 || nxt >= MAX) continue;
            if(visited[nxt] === 0) {
                visited[nxt] = visited[cur] + 1;
                queue.enqueue(nxt);
            }
        }
    }
}
console.log(bfs());