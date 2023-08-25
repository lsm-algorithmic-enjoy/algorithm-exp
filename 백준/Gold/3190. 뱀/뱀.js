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

let n = Number(input[0]);
let k = Number(input[1]);
let data = [];
for (let i = 0; i < n + 1; i++){
    data.push(new Array(n+1).fill(0));
}
for (let i = 2; i <= k + 1; i++){
    let [a,b] = input[i].split(' ').map(Number);
    data[a][b] = 1;
}

let l = Number(input[k+2]);
let info = [];
for (let i = k + 3; i < k + 3 + l; i++){
    let [x,c] = input[i].split(' ');
    info.push([Number(x), c]);
}

let dx = [0,1,0,-1];
let dy = [1,0,-1,0];
function turn(direction, c) {
    if (c === 'L') {
        direction = direction - 1;
        if (direction === -1) direction = 3;
    }
    else direction = (direction + 1) % 4;
    return direction;
}

let [x,y] = [1,1];
data[x][y] = 2;
let direction = 0;
let time = 0;
let index = 0;
let q = new Queue();
q.enqueue([x,y]);
while(true) {
    let nx = x + dx[direction];
    let ny = y + dy[direction];
    if (1 <= nx && nx <= n && 1 <= ny && ny <= n && data[nx][ny] !== 2) {
        if (data[nx][ny] === 0){
            data[nx][ny] = 2;
            q.enqueue([nx,ny]);
            let [px,py] = q.dequeue();
            data[px][py] = 0;
        }
        if (data[nx][ny] === 1) {
            data[nx][ny] = 2;
            q.enqueue([nx, ny]);
        }
}
    else {
        time += 1;
        break;
    }
    [x,y] = [nx,ny];
    time += 1;
    if (index < l && time === info[index][0]){
        direction = turn(direction, info[index][1]);
        index += 1;
    }
}
console.log(time);