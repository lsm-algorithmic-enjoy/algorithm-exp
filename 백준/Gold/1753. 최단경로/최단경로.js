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
            if(cost < distance[i[0]]){
                distance[i[0]] = cost;
                pq.enq([cost, i[0]]);
            }
        }
    }
}

let file = require('fs').readFileSync('/dev/stdin');
let input = file.toString().split('\n');

let INF = 1e9;
let [n,m] = input[0].split(' ').map(Number);
let start = Number(input[1]);

let graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);
for (let i = 2; i <= m + 1; i++) {
    let [a,b,c] = input[i].split(' ').map(Number);
    graph[a].push([b,c]);
}

let distance = new Array(n + 1).fill(INF);

dijkstra();

for(let i = 1; i <= n; i++){
    if(distance[i] === INF) console.log('INF');
    else console.log(distance[i]);
}