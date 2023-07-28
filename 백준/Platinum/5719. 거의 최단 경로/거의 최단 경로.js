class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    enqueue(item) {
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

function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}

PriorityQueue.DEFAULT_COMPARATOR = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return (a > b) ? 1 : -1;
  }
};

function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}

PriorityQueue.DEFAULT_COMPARATOR = function(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return (a > b) ? 1 : -1;
  }
};

PriorityQueue.prototype.isEmpty = function() {
  return this.size() === 0;
};

PriorityQueue.prototype.peek = function() {
  if (this.isEmpty()) throw new Error('PriorityQueue is empty');

  return this._elements[0];
};

PriorityQueue.prototype.deq = function() {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  var current = 0;

  while (current < size) {
    var largest = current;
    var left = (2 * current) + 1;
    var right = (2 * current) + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

PriorityQueue.prototype.enq = function(element) {
  var size = this._elements.push(element);
  var current = size - 1;

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};

PriorityQueue.prototype.size = function() {
  return this._elements.length;
};

PriorityQueue.prototype.forEach = function(fn) {
  return this._elements.forEach(fn);
};

PriorityQueue.prototype._compare = function(a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

PriorityQueue.prototype._swap = function(a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

function dijkstra() {
    let pq = new PriorityQueue((a,b) => b[0] - a[0]);
    pq.enq([0, start]);
    distance[start] = 0;
    while(pq.size() !== 0) {
        let [dist, now] = pq.deq();
        if(distance[now] < dist) continue;
        for(let i of graph[now]) {
            let cost = dist + i[1];
            if(cost < distance[i[0]]) {
                distance[i[0]] = cost;
                pq.enq([cost, i[0]]);
            }
        }
    }
}

function bfs() {
    let queue = new Queue();
    let visited = new Set();
    queue.enqueue(end);
    let removes = [];
    while (queue.getLength() !== 0) {
        let now = queue.dequeue();
        if(now === start) {
            continue;
        }
        for(let i of reversed_graph[now]) {
            let cost = distance[i[0]] + i[1];
            if(cost === distance[now]) {
                removes.push([i[0], now]);
                if(!visited.has(i[0])){
                    queue.enqueue(i[0]);
                    visited.add(i[0]);
                }
            }
        }
    }
    return removes;
}

function getNewGraph() {
    removes = bfs();
    let newGraph = [];
    for(let i = 0; i < n; i++) newGraph.push([]);
    for(let a = 0; a < n; a++) {
        for (let [b,c] of graph[a]) {
            let check = true;
            for(let [x,y] of removes) {
                if(a === x && b === y) check = false;
            }
            if(check) newGraph[a].push([b,c]);
        }
    }
    return newGraph;
}

let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let INF = 1e9;
let line = 0;

while(true) {
    [n,m] = input[line].split(' ').map(Number);
    if(n === 0 && m === 0) break;
    [start, end] = input[line + 1].split(' ').map(Number);
    graph = [];
    for(let i = 0; i < n; i++) graph.push([]);
    reversed_graph = [];
    for(let i = 0; i < n; i++) reversed_graph.push([]);
    for(let i  = line + 2; i < line + 2 + m; i++) {
        let [a,b,c] = input[i].split(' ').map(Number);
        graph[a].push([b,c]);
        reversed_graph[b].push([a,c]);
}
    distance = new Array(n).fill(INF);
    dijkstra();
    graph = getNewGraph();
    distance = new Array(n).fill(INF);
    dijkstra();
    if(distance[end] === INF) console.log(-1);
    else console.log(distance[end]);
    line += m + 2;
}